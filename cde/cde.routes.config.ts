import {CommonRoutesConfig} from '../common/common.routes.config';
// @ts-ignore
import express from 'express';

export class OpenCDEAPIRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'OpenCDE-API Routes');
    }
	
	configureRoutes() {
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

        return this.app;
    }
}