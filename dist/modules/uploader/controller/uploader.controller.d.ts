/// <reference types="multer" />
import { CreateMediaDto } from "../dto/file-upload.dto";
export declare class UploaderController {
    create(createMediaDto: CreateMediaDto, file: Express.Multer.File): Promise<Express.Multer.File>;
}
