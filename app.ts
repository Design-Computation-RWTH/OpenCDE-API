import express from 'express';
import * as http from 'http';
import * as bodyparser from 'body-parser';

import * as winston from 'winston';
import * as expressWinston from 'express-winston';
import cors from 'cors';
import {CommonRoutesConfig} from './common/common.routes.config';
import {OpenCDEAPIUploadRoutes} from './cde/cde.upload.routes.config';
import {OpenCDEAPIDownloadRoutes} from './cde/cde.download.routes.config';
import debug from 'debug';

//import swaggerJSDocs from 'swagger-jsdoc';

const app: express.Application = express();
const server: http.Server = http.createServer(app);
const port: Number = 3000;
const routes: Array<CommonRoutesConfig> = [];
const debugLog: debug.IDebugger = debug('app');


// middleware to parse all incoming requests as JSON
app.use(bodyparser.json());

// middleware to allow cross-origin requests
app.use(cors());

const router = require('express').Router();
const swaggerUi = require('swagger-ui-express');
/*const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'OpenCDE-API',
            version: '1.0.0',
        },
    },
    apis: ['./*.js'], // files containing annotations as above
};
const swaggerDocument = swaggerJSDocs(options);

router.use('/api-docs', swaggerUi.serve);

 */
//router.get('/api-docs', swaggerUi.setup(swaggerDocument));

app.use(expressWinston.logger({
    transports: [
        new winston.transports.Console()
    ],
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.json()
    )
}));

routes.push(new OpenCDEAPIUploadRoutes(app));
routes.push(new OpenCDEAPIDownloadRoutes(app));

app.use(expressWinston.errorLogger({
    transports: [
        new winston.transports.Console()
    ],
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.json()
    )
}));

app.get('/', (req: express.Request, res: express.Response) => {
    res.status(200).send(`Server up and running!`)
});

server.listen(port, () => {
    debugLog(`Server running at http://localhost:${port}`);
    routes.forEach((route: CommonRoutesConfig) => {
        debugLog(`Routes configured for ${route.getName()}`);
    });
});