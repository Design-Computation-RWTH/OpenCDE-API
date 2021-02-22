import * as express from "express";

const randomId = require("random-id");

export class OpenCDEAPIUploadRoutes{
    public app: express.Application;

    constructor() {
        this.app =express.default();
        this.configure_routes();
    }


    configure_routes() {

        this.app.get("/upload-documents", (req, res) => {
            let session_response:UploadSessionCreatedResponse;
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

        this.app.route(`/upload-documents`)
            .all((req: express.Request, res: express.Response, next: express.NextFunction) => {
                next();
            })
            .post((req: express.Request, res: express.Response) => {
                res.status(200).send(`User interface`);
            });

        this.app.route(`/register-file-upload/:session_id`)
            .all((req: express.Request, res: express.Response, next: express.NextFunction) => {
                next();
            })
            .post((req: express.Request, res: express.Response) => {
                res.status(200).send(`User interface`);
            });

        this.app.route(`/upload-file/:document_id`)
            .all((req: express.Request, res: express.Response, next: express.NextFunction) => {
                next();
            })
            .post((req: express.Request, res: express.Response) => {
                res.status(200).send(`User interface`);
            });

        return this.app;
    }
}

export default new OpenCDEAPIUploadRoutes().app;

type UploadSessionCreatedResponse = {
    '_links': Links1

};

type Links1 = {
    'register-file-upload' ? : RegisterFileUpload

    'upload-metadata' ? : UploadMetadata

};


type RegisterFileUpload = {
    'href' ? : string

};

type UploadMetadata = {
    'href' ? : string

};


