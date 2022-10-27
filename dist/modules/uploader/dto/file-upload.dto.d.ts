/// <reference types="node" />
export declare class FileUploadDto {
    buffer: Buffer | string;
    filePath?: string;
    ext?: string;
    contentType: string;
}
export default FileUploadDto;
export declare class CreateMediaDto {
    file: any;
}
