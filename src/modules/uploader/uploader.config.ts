import { MulterOptionsFactory } from "@nestjs/platform-express";
import { config, S3 } from "aws-sdk";
import { diskStorage } from "multer";
import { existsSync, mkdirSync } from "fs";
import { MulterOptions } from "@nestjs/platform-express/multer/interfaces/multer-options.interface";
import { Injectable } from "@nestjs/common";
import * as crypto from "crypto";
import s3Storage = require("multer-sharp-s3");
import configuration from "src/core/config/configuration";

const s3 = new S3();

@Injectable()
export class MulterOptionConfig implements MulterOptionsFactory {
  private awsConfig = configuration().awsS3;
  constructor() {
    try {
      config.update({
        accessKeyId: this.awsConfig.accessKeyId,
        secretAccessKey: this.awsConfig.secretAccessKey,
      });
      console.log("config updatd");
    } catch (error) {
      console.error(`Failed to set AWS Config ${error}`);
    }
  }
  createMulterOptions(): MulterOptions {
    // return this.getLocalDiskConfig();
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

  // getS3Config() {
  //   return {
  //     storage: multerS3({
  //       s3: s3,
  //       bucket: this.awsConfig.bucketName,
  //       acl: "public-read",
  //       contentType: multerS3.AUTO_CONTENT_TYPE,

  //       key: function (req: any, file: any, cb) {
  //         let fileRef = "";
  //         console.log(req.directoryMeta);
  //         if (req.directoryMeta) {
  //           if (req.directoryMeta.section) {
  //             fileRef = `${req.directoryMeta.section}`;
  //           }
  //           if (req.directoryMeta.id) {
  //             fileRef = `${fileRef}/${req.directoryMeta.id}`;
  //           }
  //         }

  //         // Calling the callback passing the random name generated with
  //         // the original extension name
  //         const timestamp = Date.now().toString();
  //         const hashedFileName = crypto.createHash("md5").update(timestamp).digest("hex");
  //         const extension = file.originalname.substring(file.originalname.lastIndexOf("."), file.originalname.length);

  //         const filename = `${hashedFileName}${extension}`;
  //         fileRef = `${fileRef}/${filename}`;
  //         file.reference = fileRef;
  //         file.originalname = filename;
  //         file.reference = fileRef;

  //         cb(null, fileRef);
  //       },
  //       metadata: function (req, file, cb) {
  //         cb(null, { fieldName: file.fieldname });
  //       },
  //     }),
  //   };
  // } // getS3Config

  getLocalDiskConfig() {
    return {
      storage: diskStorage({
        destination: (req: any, file: any, cb: any) => {
          let uploadPath = configuration().app.localUpload;
          // console.log('uploadPath--', uploadPath);
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
          if (!existsSync(uploadPath)) {
            // Create folder if doesn't exist
            mkdirSync(uploadPath, { recursive: true });
          }
          file.reference = fileRef;
          // console.log('uploadPath', uploadPath);
          cb(null, uploadPath);
        },
        filename: (req: any, file: any, cb: any) => {
          // Calling the callback passing the random name generated with
          // the original extension name
          const timestamp = Date.now().toString();
          const hashedFileName = crypto.createHash("md5").update(timestamp).digest("hex");
          const extension = file.originalname.substring(file.originalname.lastIndexOf("."), file.originalname.length);
          const filename = `${hashedFileName}${extension}`;
          file.reference = `${file.reference}/${filename}`;
          file.originalname = filename;
          // console.log('file.reference ', file.reference);
          // console.log('filename ', filename);
          cb(null, filename);
        },
      }),
      //   fileFilter: (req: any, file: any, cb: any) => {
      //     console.log('file filter', req.directoryMeta);
      //     cb(null, true);
      //   },
    };
  } //getLocalDiskConfig
}
