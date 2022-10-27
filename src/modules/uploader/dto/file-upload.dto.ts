import { ApiProperty } from "@nestjs/swagger";

export class FileUploadDto {
  buffer: Buffer | string;

  filePath?: string;

  ext?: string;

  contentType: string;
}

export default FileUploadDto;

export class CreateMediaDto {
  @ApiProperty({ type: String, format: "binary" })
  file: any;
}
