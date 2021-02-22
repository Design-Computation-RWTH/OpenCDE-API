import {CommonRoutesConfig} from '../common/common.routes.config';
// @ts-ignore
import express from 'express';

export class OpenCDEAPIUploadRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'OpenCDE-API Upload Routes');
    }
	
	configureRoutes() {

        this.app.route(`/upload-documents`)
            .all((req: express.Request, res: express.Response, next: express.NextFunction) => {
                next();
            })
            .post((req: express.Request, res: express.Response) => {
                res.status(200).send(`User interface`);
            });

        this.app.route(`/register-file-upload-link`)
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