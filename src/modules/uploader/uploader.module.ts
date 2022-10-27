import { MulterOptionConfig } from "./uploader.config";
import { Module } from "@nestjs/common";
import { MulterModule } from "@nestjs/platform-express";
import { UploaderService } from "./uploader.service";
import { UploaderController } from "./controller/uploader.controller";

@Module({
  imports: [MulterModule.registerAsync({ useClass: MulterOptionConfig })],
  providers: [UploaderService],
  exports: [UploaderService],
  controllers: [UploaderController],
})
export class UploaderModule {}
