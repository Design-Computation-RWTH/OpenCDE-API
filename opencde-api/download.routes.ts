import * as express from "express";
import * as common_types from "./common.types";
import {Documentbase} from "./documentbase"



export class OpenCDEAPIDownloadRoutes{
    public app: express.Application;
    private  documents:Documentbase;

    constructor() {
        this.app = express.default();
        this.configure_routes();
        this.documents=Documentbase.getInstance();
    }

    configure_routes() {

		this.app.route(`/select-documents`)
            .all((req: express.Request, res: express.Response, next: express.NextFunction) => {
                next();
            })
            .get((req: express.Request, res: express.Response) => {
                res.status(200).send(`User interface`);
        });


        this.app.get("/document_reference/:documentversion_id", (req, res) => {
            let document_id:string;
            document_id=req.params.document_id;

            let document_reference:common_types.DocumentReference;
            document_reference={
                "_links": {
                    "self": {
                        href: "http://"+req.headers.host+"/link/to/resource"
                    },
                    "metadata": {
                        href: "http://"+req.headers.host+"/link/to/resource"
                    },
                    "versions": {
                        href: "http://"+req.headers.host+"/link/to/resource"
                    },
                    "content": {
                        href: "http://"+req.headers.host+"/link/to/resource"
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


        this.app.get("/document-version-metadata/:documentversion_id", (req, res) => {
            let documentversion_id:string;
            documentversion_id=req.params.documentversion_id;

            let document_metadata:common_types.DocumentMetadata;
            document_metadata={
                "_links": {
                    "self": {
                        href: "http://"+req.headers.host+"/link/to/resource"
                    },
                    "documentReference": {
                        href: "http://"+req.headers.host+"/link/to/resource"
                    }
                },
                "_metaData": [
                    {
                        "name": "string",
                        "value": "string",
                        "type": {
                            "type": "string",
                            "required": true,
                            "enumValues": [
                                "string"
                            ]
                        }
                    }
                ]
            };
            res.json(document_metadata);
        });

        this.app.get("/document-versions/:document_id", (req, res) => {

            let document_reference_list:common_types.DocumentReferenceList;
            document_reference_list={
                "_links": {
                    "self": {
                        href: "http://"+req.headers.host+":3000/link/to/resource"
                    }
                },
                "_embedded": {
                    "documentReferenceList": [
                        {
                            "_links": {
                                "self": {
                                    href: "http://"+req.headers.host+"/link/to/resource"
                                },
                                "metadata": {
                                    href: "http://"+req.headers.host+"/link/to/resource"
                                },
                                "versions": {
                                    href: "http://"+req.headers.host+"/link/to/resource"
                                },
                                "content": {
                                    href: "http://"+req.headers.host+"/link/to/resource"
                                }
                            },
                            "version": "string",
                            "version_date": "string",
                            "title": "string",
                            "file_description": {
                                "size_in_bytes": 0,
                                "name": "string"
                            }
                        }
                    ]
                }
            };
            res.json(document_reference_list);
        });


        return this.app;
    }
}

export default new OpenCDEAPIDownloadRoutes().app;