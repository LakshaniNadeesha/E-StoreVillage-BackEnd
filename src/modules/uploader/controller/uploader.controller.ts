import { Body, Controller, Post, UploadedFiles, UseInterceptors } from "@nestjs/common";
import { FilesInterceptor } from "@nestjs/platform-express";
import { ApiConsumes, ApiCreatedResponse, ApiTags } from "@nestjs/swagger";
import configuration from "src/core/config/configuration";
import { CreateMediaDto } from "../dto/file-upload.dto";

@Controller("upload")
@ApiTags("Uploader")
export class UploaderController {
  @Post()
  @ApiCreatedResponse()
  @ApiConsumes("multipart/form-data")
  @UseInterceptors(
    // VesselFileUploadInterceptor,
    FilesInterceptor("file", 20, {
      limits: { fileSize: Number(configuration().app.maxUploadSize) },
    })
  )
  async create(@Body() createMediaDto: CreateMediaDto, @UploadedFiles() file: Express.Multer.File) {
    return file;
  }
}
