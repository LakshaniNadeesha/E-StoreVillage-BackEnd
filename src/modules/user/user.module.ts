import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";
import { User } from "src/entities";
import { UsersRepository } from "./repositories";
import { UserService } from "./services";
import { UserController } from "./controllers/user.controller";
import SmsService from "src/core/services/sms.service";
import { MulterModule } from "@nestjs/platform-express";
import { MulterOptionConfig } from "../uploader/uploader.config";

@Module({
  imports: [MulterModule.registerAsync({ useClass: MulterOptionConfig }), TypeOrmModule.forFeature([User])],
  providers: [UsersRepository, UserService, SmsService],
  exports: [UsersRepository, UserService],
  controllers: [UserController],
})
export class UserModule {}
