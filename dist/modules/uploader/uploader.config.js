"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MulterOptionConfig = void 0;
const aws_sdk_1 = require("aws-sdk");
const multer_1 = require("multer");
const fs_1 = require("fs");
const common_1 = require("@nestjs/common");
const crypto = __importStar(require("crypto"));
const s3Storage = require("multer-sharp-s3");
const configuration_1 = __importDefault(require("../../core/config/configuration"));
const s3 = new aws_sdk_1.S3();
let MulterOptionConfig = class MulterOptionConfig {
    constructor() {
        this.awsConfig = (0, configuration_1.default)().awsS3;
        try {
            aws_sdk_1.config.update({
                accessKeyId: this.awsConfig.accessKeyId,
                secretAccessKey: this.awsConfig.secretAccessKey,
            });
            console.log("config updatd");
        }
        catch (error) {
            console.error(`Failed to set AWS Config ${error}`);
        }
    }
    createMulterOptions() {
        return this.getS3ConfigWithResize();
    }
    getS3ConfigWithResize() {
        return {
            storage: s3Storage({
                s3: s3,
                Bucket: this.awsConfig.bucketName,
                ACL: "public-read",
                Key: function (req, file, cb) {
                    let fileRef = "";
                    if (req.directoryMeta) {
                        if (req.directoryMeta.section) {
                            fileRef = `${req.directoryMeta.section}`;
                        }
                        if (req.directoryMeta.id) {
                            fileRef = `${fileRef}/${req.directoryMeta.id}`;
                        }
                    }
                    const timestamp = Date.now().toString();
                    const hashedFileName = crypto.createHash("md5").update(timestamp).digest("hex");
                    const filename = `${hashedFileName}`;
                    fileRef = `${fileRef}/${filename}`;
                    file.reference = fileRef;
                    file.originalname = filename;
                    file.reference = fileRef;
                    cb(null, fileRef);
                },
                multiple: true,
                resize: [{ suffix: "thumb", width: 300, height: 300 }, { suffix: "original" }],
            }),
        };
    }
    getLocalDiskConfig() {
        return {
            storage: (0, multer_1.diskStorage)({
                destination: (req, file, cb) => {
                    let uploadPath = (0, configuration_1.default)().app.localUpload;
                    let fileRef = "";
                    if (req.directoryMeta) {
                        if (req.directoryMeta.section) {
                            uploadPath = `${uploadPath}/${req.directoryMeta.section}`;
                            fileRef = `${fileRef}/${req.directoryMeta.section}`;
                        }
                        if (req.directoryMeta.id) {
                            uploadPath = `${uploadPath}/${req.directoryMeta.id}`;
                            fileRef = `${fileRef}/${req.directoryMeta.id}`;
                        }
                    }
                    if (!(0, fs_1.existsSync)(uploadPath)) {
                        (0, fs_1.mkdirSync)(uploadPath, { recursive: true });
                    }
                    file.reference = fileRef;
                    cb(null, uploadPath);
                },
                filename: (req, file, cb) => {
                    const timestamp = Date.now().toString();
                    const hashedFileName = crypto.createHash("md5").update(timestamp).digest("hex");
                    const extension = file.originalname.substring(file.originalname.lastIndexOf("."), file.originalname.length);
                    const filename = `${hashedFileName}${extension}`;
                    file.reference = `${file.reference}/${filename}`;
                    file.originalname = filename;
                    cb(null, filename);
                },
            }),
        };
    }
};
MulterOptionConfig = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], MulterOptionConfig);
exports.MulterOptionConfig = MulterOptionConfig;
//# sourceMappingURL=uploader.config.js.map