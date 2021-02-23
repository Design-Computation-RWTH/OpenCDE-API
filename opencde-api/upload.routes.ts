import * as express from "express";
import * as upload_types from "./upload.types";
import * as common_types from "./common.types";


const randomId = require("random-id");
const busboy = require('connect-busboy'); //middleware for form/file upload
const path = require('path');     //used for file path
const fs = require('fs-extra');       //File System - for file manipulation

export class OpenCDEAPIUploadRoutes{
    public app: express.Application;

    constructor() {
        this.app =express.default();
        this.app.use(busboy());
        this.app.use(express.static(path.join(__dirname, 'public')));
        this.configure_routes();

    }


    configure_routes() {

        this.app.post("/upload-documents", (req, res) => {
            let session_response:upload_types.UploadSessionCreatedResponse;
            let sessionId=randomId(10);
            session_response={
                _links: {
                    'register-file-upload': {
                        href: "https://server/cde/0.1/register-file-upload/"+sessionId
                    },
                    'upload-metadata': {
                        href: 'https://server/cde/0.1/upload-metadata/?upload_session_id='+sessionId
                    }
                }
            };
            res.json(session_response);
        });

        this.app.post("/register-file-upload/:session_id", (req, res) => {
            let registerfile_response:upload_types.RegisterFileResponse;
            let documentId=randomId(10);
            let sessionId:string;
            sessionId=req.params.session_id;
            let file_request: upload_types.UploadSessionCreatedResponse = req.body;
            registerfile_response={
                "_links": {
                    "upload-file": {
                        "href": "https://server/documents-api/upload-session/"+sessionId+"/files/"+documentId
                    }
                }
            };
            res.json(registerfile_response);
        });

        // Upload file
        this.app.post("/upload-session/:sessionId/files/:document_id", (req, res) => {

            let fstream;
            // @ts-ignore
            req.pipe(req.busboy);
            // @ts-ignore
            req.busboy.on('file', function (fieldname: any, file: { pipe: (arg0: any) => void; }, filename: string) {
                console.log("Uploading: " + filename);

                //Path where image will be uploaded
                fstream = fs.createWriteStream(__dirname + '/files/' + filename);
                file.pipe(fstream);
                fstream.on('close', function () {
                    console.log("Upload Finished of " + filename);
                    res.redirect('back');           //where to go next
                });
            });



            let document_reference:common_types.DocumentReference;
            document_reference={
                "_links": {
                    "self": {
                        "href": "https://bim.aconex.com/link/to/resource"
                    },
                    "metadata": {
                        "href": "https://bim.aconex.com/link/to/resource"
                    },
                    "versions": {
                        "href": "https://bim.aconex.com/link/to/resource"
                    },
                    "content": {
                        "href": "https://bim.aconex.com/link/to/resource"
                    }
                },
                "version": "string",
                "version_date": "string",
                "title": "string",
                "file_description": {
                    "size_in_bytes": 0,
                    "name": "string"
                }
            };
            res.json(document_reference);
        });

        return this.app;
    }
}

export default new OpenCDEAPIUploadRoutes().app;

