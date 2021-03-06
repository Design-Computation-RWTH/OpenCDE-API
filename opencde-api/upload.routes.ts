import * as express from "express";
import * as upload_types from "./upload.types";
import * as common_types from "./common.types";

import {Documentbase} from "./documentbase"
const busboy = require('connect-busboy'); //middleware for form/file upload
const path = require('path');     //used for file path
const fs = require('fs-extra');       //File System - for file manipulation

const getUuid = require('uuid-by-string')

let sessionstorage = require('sessionstorage');
const mkdirp = require('mkdirp')

export class OpenCDEAPIUploadRoutes{
    public app: express.Application;
    private readonly documents:Documentbase;

    constructor() {
        this.app =express.default();
        this.app.use(busboy());
        this.app.use(express.static(path.join(__dirname, 'public')));
        this.configure_routes();
        this.documents=Documentbase.getInstance();
    }

    uuidv4() {
        //ES6 crypto API could be used instead
        // https://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };

    configure_routes() {
        mkdirp.sync(process.cwd()+'/documents/files')

        this.app.post("/upload-documents", (req, res) => {
            let session_response:upload_types.UploadSessionCreatedResponse;
            let sessionId=this.uuidv4();

            const session_context = {
                _id: sessionId,
                file_metadata: [],
                file_description: []
            };

            this.documents.db.put(session_context)

            session_response={
                _links: {
                    'register-file-upload': {
                        // http is used in the dev environment. Should be replaced with https in production
                        href: "http://"+req.headers.host+"/cde/0.1/documents/register-file-upload/"+sessionId
                    },
                    'upload-metadata': {
                        href: "http://"+req.headers.host+"/cde/0.1/documents/upload-metadata/?upload_session_id="+sessionId
                    }
                }
            };
            res.json(session_response);
        });

        this.app.post("/register-file-upload/:session_id", (req, res) => {
            let registerfile_response:upload_types.RegisterFileResponse;
            //let documentVersionId=this.uuidv4();
            let sessionId:string;
            sessionId=req.params.session_id;
            console.log("sessionId: "+sessionId)

            let file_request: upload_types.RegisterFileRequest= req.body;
            const file_name_uuidHash = getUuid(file_request.filename)
            const file_version_uuidHash = getUuid(file_request.filename+":"+file_request.version)



            sessionstorage.setItem(sessionId,file_name_uuidHash);
            let documents:Documentbase=this.documents;
            this.documents.db.get("file_request:"+file_version_uuidHash).then(function (db_file_request:any) {

                // UPDATE
                db_file_request.file_request=file_request;

                documents.db.put(db_file_request, function (err: any) {
                    if (err) {
                        if (err.name === 'conflict') {
                            console.log("File reference version exists already in db");
                        } else {
                            console.log("File reference update error: " + err.name);
                        }
                    } else {
                        console.log("File reference created Successfully");
                    }
                });
            }).catch(function () {
                let db_file_request: any =
                    {
                        _id: "file_request:" + file_version_uuidHash,
                        file_request: file_request
                    }

                documents.db.put(db_file_request, function (err: any) {
                    if (err) {
                        if (err.name === 'conflict') {
                            console.log("File reference version exists already in db");
                        } else {
                            console.log("File reference update error: " + err.name);
                        }
                    } else {
                        console.log("File reference created Successfully");
                    }
                });
            });

            registerfile_response={
                "_links": {
                    "upload-file": {
                        href: "http://"+req.headers.host+"/cde/0.1/documents/upload-session/"+sessionId+"/files/"+file_version_uuidHash
                    }
                }
            };
            res.json(registerfile_response);
        });

        // Upload file
        this.app.post("/upload-session/:session_id/files/:documentversion_id", (req, res) => {
            let sessionId:string;
            sessionId=req.params.session_id;

            let file_version_uuidHash:string;
            file_version_uuidHash=req.params.documentversion_id;


            let file_name_uuidHash:string;
            file_name_uuidHash= sessionstorage.getItem(sessionId);

            let documents:Documentbase=this.documents;
            this.documents.db.get("file_request:"+file_version_uuidHash).then(function (db_file_request:any) {
                console.log("DB db_file_request 1 " + db_file_request);
                console.log("DB db_file_request 2 " + db_file_request.file_request.size);
                let fstream;
                // @ts-ignore
                req.pipe(req.busboy);
                // @ts-ignore
                req.busboy.on('file', function (fieldname: any, file: { pipe: (arg0: any) => void; }, filename: string) {
                    console.log("Uploading: " + filename);
                    //Path where image will be uploaded
                    fstream = fs.createWriteStream(process.cwd()+'/documents/files/' + file_version_uuidHash);
                    file.pipe(fstream);
                    fstream.on('close', function () {
                        console.log("Upload Finished of " + filename);
                    });
                });

                let document_reference:common_types.DocumentReference;
                document_reference={
                    "_links": {
                        "self": {
                            href: "http://"+req.headers.host+"/cde/0.1/documents/document_reference/"+file_version_uuidHash
                        },
                        "metadata": {
                            href: "http://"+req.headers.host+"/cde/0.1/documents/document-version-metadata/"+file_version_uuidHash
                        },
                        "versions": {
                            href: "http://"+req.headers.host+"/cde/0.1/documents/document-versions/"+file_name_uuidHash
                        },
                        "content": {
                            href: "http://"+req.headers.host+"/cde/0.1/documents/content/"+file_version_uuidHash
                        }
                    },
                    "version": db_file_request.file_request.version,
                    "version_date": db_file_request.file_request.last_modified,
                    "title": "string",
                    "file_description": {
                        "size_in_bytes": db_file_request.file_request.size,
                        "name": db_file_request.file_request.filename
                    }
                };
                console.log("Document reference to be saved");

                documents.db.get("document_reference:"+file_version_uuidHash).then(function (db_document_reference:any) {
                    db_document_reference.document_reference=document_reference;
                    db_document_reference.file_name_uuidHash=file_name_uuidHash;
                    documents.db.put(db_document_reference, function(err: any) {
                        if (err) {
                            if (err.name === 'conflict') {
                                console.log("Document reference version exists already in db");
                            } else {
                                console.log("Document reference update error: "+err.name);
                            }
                        } else {
                            console.log("Document reference saved successfully 1");
                        }

                }).catch(function () {
                        console.log("Document reference not saved");
                })
                }).catch(function () {
                    console.log("Document reference exist");
                        console.log("Document reference rewrite");
                        let db_document_reference: any =
                            {
                                _id: "document_reference:" + file_version_uuidHash,
                                file_name_uuidHash: file_name_uuidHash,
                                document_reference: document_reference
                            }
                        documents.db.put(db_document_reference, function (err: any) {
                            if (err) {
                                if (err.name === 'conflict') {
                                    console.log("Document reference version exists already in db");
                                } else {
                                    console.log("Document reference update error: " + err.name);
                                }
                            } else {
                                console.log("Document reference saved successfully 2");
                            }
                        })

                    });
                console.log("Document reference was:"+ document_reference);
                res.json(document_reference);
            }).catch(function () {

            });
        });


        this.app.post("/document-version-metadata/:documentversion_id", (req, res) => {
            let file_version_uuidHash:string;
            file_version_uuidHash=req.params.documentversion_id;

            let document_metadata:common_types.DocumentMetadata;
            document_metadata= req.body;
            let documents:Documentbase=this.documents;
            this.documents.db.get("document_metadata:"+file_version_uuidHash).then(function (db_document_metadata:any) {

                // UPDATE
                db_document_metadata.document_metadata=document_metadata;

                documents.db.put(db_document_metadata, function(err: any) {
                    if (err) {
                        if (err.name === 'conflict') {
                            console.log("Document metadata version exists already in db");
                        } else {
                            console.log("Document metadata update error: "+err.name);
                        }
                    } else {
                        console.log("Document metadata saved successfully");
                    }
                });
            }).catch(function () {
                let db_document_metadata:any=
                    {
                        _id:"document_metadata:"+file_version_uuidHash,
                        document_metadata:document_metadata
                    }
                documents.db.put(db_document_metadata, function(err: any) {
                    if (err) {
                        if (err.name === 'conflict') {
                            console.log("Document metadata version exists already in db");
                        } else {
                            console.log("Document metadata update error: "+err.name);
                        }
                    } else {
                        console.log("Document metadata saved successfully");
                    }
                });

            });

            res.status(200).send(`Done`);
        });

        return this.app;
    }

}

export default new OpenCDEAPIUploadRoutes().app;

