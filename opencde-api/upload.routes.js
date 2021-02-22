"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenCDEAPIUploadRoutes = void 0;
var express = __importStar(require("express"));
var randomId = require("random-id");
var OpenCDEAPIUploadRoutes = /** @class */ (function () {
    function OpenCDEAPIUploadRoutes() {
        this.app = express.default();
        this.configure_routes();
    }
    OpenCDEAPIUploadRoutes.prototype.configure_routes = function () {
        this.app.get("/upload-documents", function (req, res) {
            var session_response;
            var sessionId = randomId(10);
            session_response = {
                _links: {
                    'register-file-upload': {
                        href: "https://server/cde/0.1/register-file-upload/" + sessionId
                    },
                    'upload-metadata': {
                        href: 'https://server/cde/0.1/upload-metadata/?upload_session_id=' + sessionId
                    }
                }
            };
            res.json(session_response);
        });
        this.app.route("/upload-documents")
            .all(function (req, res, next) {
            next();
        })
            .post(function (req, res) {
            res.status(200).send("User interface");
        });
        this.app.route("/register-file-upload/:session_id")
            .all(function (req, res, next) {
            next();
        })
            .post(function (req, res) {
            res.status(200).send("User interface");
        });
        this.app.route("/upload-file/:document_id")
            .all(function (req, res, next) {
            next();
        })
            .post(function (req, res) {
            res.status(200).send("User interface");
        });
        return this.app;
    };
    return OpenCDEAPIUploadRoutes;
}());
exports.OpenCDEAPIUploadRoutes = OpenCDEAPIUploadRoutes;
exports.default = new OpenCDEAPIUploadRoutes().app;
