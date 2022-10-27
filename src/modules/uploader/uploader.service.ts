import { IS3File } from "./interfaces";
import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { IImage } from "src/core/interface/image-model.interface";
import { IFile } from "src/core/interface/file-model.interface";
import configuration from "../../core/config/configuration";
import crypto from "crypto";
import { S3 } from "@aws-sdk/client-s3";
import FileUploadDto from "./dto/file-upload.dto";

@Injectable()
export class UploaderService {
  // noinspection JSUnusedGlobalSymbols
  formatImageFile(file: IS3File): IImage {
    return {
      name: file.originalname,
      key: file.key,
      src: file.reference,
      thumb: file.thumb,
    };
  }

  // noinspection JSUnusedGlobalSymbols
  formatFile(file: IS3File): IFile {
    return {
      name: file.originalname,
      key: file.key,
      src: file.reference,
    };
  }

  private static getS3(): S3 {
    return new S3({
      credentials: {
        accessKeyId: configuration().awsS3.accessKeyId,
        secretAccessKey: configuration().awsS3.secretAccessKey,
      },
      region: configuration().awsS3.region,
    });
  }

  async uploadBuffer(fileUploadDto: FileUploadDto): Promise<string> {
    const { buffer, filePath, ext, contentType } = fileUploadDto;

    const bucketName: string = configuration().awsS3.bucketName;

    const timestamp: string = Date.now().toString();
    const hash: string = crypto.createHash("md5").update(timestamp).digest("hex");

    const fileName = `${hash}.${ext}`;
    const fullPath = `${filePath}/${fileName}`;

    try {
      const bucket = UploaderService.getS3();
      await bucket.putObject({
        Bucket: bucketName,
        Body: buffer,
        Key: fullPath,
        ContentType: contentType,
      });
      return fullPath;
    } catch (error) {
      throw new InternalServerErrorException("Error occurred while uploading!");
    }
  }
}
