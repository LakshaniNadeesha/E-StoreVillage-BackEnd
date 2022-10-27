/// <reference types="multer" />
import { MulterOptionsFactory } from "@nestjs/platform-express";
import { MulterOptions } from "@nestjs/platform-express/multer/interfaces/multer-options.interface";
export declare class MulterOptionConfig implements MulterOptionsFactory {
    private awsConfig;
    constructor();
    createMulterOptions(): MulterOptions;
    getS3ConfigWithResize(): {
        storage: import("multer-sharp-s3/dist/types/main").S3Storage;
    };
    getLocalDiskConfig(): {
        storage: import("multer").StorageEngine;
    };
}
