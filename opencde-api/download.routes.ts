import * as express from "express";

const randomId = require("random-id");

export class OpenCDEAPIDownloadRoutes{
    public app: express.Application;

    constructor() {
        this.app = express.default();
        this.configure_routes();
    }

    configure_routes() {

		this.app.route(`/select-documents`)
            .all((req: express.Request, res: express.Response, next: express.NextFunction) => {
                next();
            })
            .get((req: express.Request, res: express.Response) => {
                res.status(200).send(`User interface`);
        });


        this.app.route(`/document-reference/:document_id`)
            .all((req: express.Request, res: express.Response, next: express.NextFunction) => {
                next();
            })
            .get((req: express.Request, res: express.Response) => {
                res.status(200).send(`GET requested for id ${req.params.document_id}`);
            });

        this.app.route(`/document-version-metadata/:document_id`)
            .all((req: express.Request, res: express.Response, next: express.NextFunction) => {
                next();
            })
            .get((req: express.Request, res: express.Response) => {
                res.status(200).send(`GET requested for id ${req.params.document_id}`);
            });

        this.app.route(`/document-versions`)
            .all((req: express.Request, res: express.Response, next: express.NextFunction) => {
                next();
            })
            .get((req: express.Request, res: express.Response) => {
                res.status(200).send(`GET requested for id ${req.params.document_id}`);
            });

        return this.app;
    }
}

export default new OpenCDEAPIDownloadRoutes().app;