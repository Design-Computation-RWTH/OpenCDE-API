import * as express from "express";
import OpenCDEAPIUploadRoutes from './upload.routes';
import OpenCDEAPIDownloadRoutes from './download.routes';

class Routes {

    public app: express.Application;

    constructor() {
        this.app = express.default();
        this.configure_routes();
    }

    private configure_routes(): void {

        // user route
        this.app.use("/", OpenCDEAPIUploadRoutes);
        this.app.use("/", OpenCDEAPIDownloadRoutes);

    }
}
export default new Routes().app;