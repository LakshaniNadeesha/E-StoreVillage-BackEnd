import { IS3File } from "./interfaces";
import { IImage } from "src/core/interface/image-model.interface";
import { IFile } from "src/core/interface/file-model.interface";
import FileUploadDto from "./dto/file-upload.dto";
export declare class UploaderService {
    formatImageFile(file: IS3File): IImage;
    formatFile(file: IS3File): IFile;
    private static getS3;
    uploadBuffer(fileUploadDto: FileUploadDto): Promise<string>;
}
