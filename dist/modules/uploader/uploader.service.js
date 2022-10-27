"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var UploaderService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploaderService = void 0;
const common_1 = require("@nestjs/common");
const configuration_1 = __importDefault(require("../../core/config/configuration"));
const crypto_1 = __importDefault(require("crypto"));
const client_s3_1 = require("@aws-sdk/client-s3");
let UploaderService = UploaderService_1 = class UploaderService {
    formatImageFile(file) {
        return {
            name: file.originalname,
            key: file.key,
            src: file.reference,
            thumb: file.thumb,
        };
    }
    formatFile(file) {
        return {
            name: file.originalname,
            key: file.key,
            src: file.reference,
        };
    }
    static getS3() {
        return new client_s3_1.S3({
            credentials: {
                accessKeyId: (0, configuration_1.default)().awsS3.accessKeyId,
                secretAccessKey: (0, configuration_1.default)().awsS3.secretAccessKey,
            },
            region: (0, configuration_1.default)().awsS3.region,
        });
    }
    async uploadBuffer(fileUploadDto) {
        const { buffer, filePath, ext, contentType } = fileUploadDto;
        const bucketName = (0, configuration_1.default)().awsS3.bucketName;
        const timestamp = Date.now().toString();
        const hash = crypto_1.default.createHash("md5").update(timestamp).digest("hex");
        const fileName = `${hash}.${ext}`;
        const fullPath = `${filePath}/${fileName}`;
        try {
            const bucket = UploaderService_1.getS3();
            await bucket.putObject({
                Bucket: bucketName,
                Body: buffer,
                Key: fullPath,
                ContentType: contentType,
            });
            return fullPath;
        }
        catch (error) {
            throw new common_1.InternalServerErrorException("Error occurred while uploading!");
        }
    }
};
UploaderService = UploaderService_1 = __decorate([
    (0, common_1.Injectable)()
], UploaderService);
exports.UploaderService = UploaderService;
//# sourceMappingURL=uploader.service.js.map