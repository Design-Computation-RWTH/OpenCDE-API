import * as express from "express";
import * as http from 'http';
import * as bodyParser from "body-parser";
import swaggerUi = require('swagger-ui-express');


import cors from 'cors';
import fs = require('fs');

import Routes from "./opencde-api/routes";

class OpenCDEAPI {
    public app: express.Application;
    /* Swagger files start */
    private swaggerFile: any =(process.cwd()+"/swagger/openapi.json-Swagger20.json");
    private swaggerData: any = fs.readFileSync(this.swaggerFile, 'utf8');
    private swaggerDocument = JSON.parse(this.swaggerData);

    constructor() {
        this.app = express.default();
        this.middleware();
        this.configure_routes();

        const server: http.Server = http.createServer(this.app);
        const port: Number = 3000;

        server.listen(port, () => {

        });
    }

    private middleware(): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));

        // middleware to allow cross-origin requests
        this.app.use(cors());
    }

    private configure_routes(): void {

        // @ts-ignore
        this.app.get("/", (req, res, next) => {
            res.send("API Works!!!!!");
        });

        // user route
        this.app.use("/cde/0.1", Routes);

        // swagger docs
        this.app.use('/cde/0.1/docs', swaggerUi.serve,
            swaggerUi.setup(this.swaggerDocument));

        // handle undefined routes
        this.app.use("*", (req, res, next) => {
            res.send("Make sure url is correct!");
        });
    }

}

new OpenCDEAPI();