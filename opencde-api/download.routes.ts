import * as express from "express";
import * as common_types from "./common.types";
import {Documentbase} from "./documentbase"



export class OpenCDEAPIDownloadRoutes{
    public app: express.Application;
    private readonly documents:Documentbase;

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
            let file_version_uuidHash:string;
            file_version_uuidHash=req.params.documentversion_id;
            console.log("Download: Document version  was:"+ file_version_uuidHash);


            this.documents.db.get("document_reference:"+file_version_uuidHash).then(function (db_document_reference:any) {
                let document_reference:common_types.DocumentReference=db_document_reference.document_reference;
                console.log("Download: DB Document reference  was:"+ db_document_reference);
                console.log("Download: Document reference  was:"+ document_reference);
                res.json(document_reference);
            }).catch(function () {
                // handle any errors
            });
            console.log("Download: Document reference done.");

        });


        this.app.get("/document-version-metadata/:documentversion_id", (req, res) => {
            let file_version_uuidHash:string;
            file_version_uuidHash=req.params.documentversion_id;


            this.documents.db.get("document_metadata:"+file_version_uuidHash).then(function (db_document_metadata:any) {
                let document_metadata:common_types.DocumentReference=db_document_metadata.document_metadata;
                console.log("Download: DB Document reference  was:"+ document_metadata);
                console.log("Download: Document reference  was:"+ document_metadata);
                res.json(document_metadata);
            }).catch(function () {
                // handle any errors
            });
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
                    ]
                }
            };
            res.json(document_reference_list);
        });


        return this.app;
    }
}

export default new OpenCDEAPIDownloadRoutes().app;