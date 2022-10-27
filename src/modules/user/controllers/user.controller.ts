import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  UseGuards,
  UseInterceptors,
} from "@nestjs/common";
import { FilesInterceptor } from "@nestjs/platform-express";
import { ApiConsumes, ApiTags } from "@nestjs/swagger";
import configuration from "src/core/config/configuration";
import { CurrentUser } from "src/core/decorators";
import { ITokenUser } from "src/core/interface";
import { IPagination, Pager } from "src/core/pagination";
import SmsService from "src/core/services/sms.service";
import { RolesGuard } from "src/modules/auth/guards";
import { CheckVerificationCodeDto, SmsUserDto } from "../dto/sms.dto";
import { FilterUserDto } from "../dto/user-filter.dto";
import { UpdateUserDto, UpdateUserPasswordDto } from "../dto/user-update.dto";
import { UserDto } from "../dto/user.dto";
import { UserService } from "../services/user.service";
import { UserModule } from "../user.module";
import { JwtAuthGuard } from "./../../auth/guards/jwt-auth.guard";

@Controller("user")
@ApiTags("User")
export class UserController {
  constructor(private readonly userService: UserService, private readonly smsService: SmsService) {}

  @Post()
  async create(@Body() userDto: UserDto) {
    return await this.userService.create(userDto);
  }
  
  @Patch(':id')
  async updateUser(@Param("id", ParseIntPipe) id: number,@Body() updateUserDto: UpdateUserDto) {
    return await this.userService.updateUser(id,updateUserDto);
  }


  @Get()
  @UseGuards(JwtAuthGuard)
  async findAllUsers(@Query() filter: FilterUserDto, @Pager() page: IPagination) {
    const [data, total] = await this.userService.findAllUsers(filter, page);
    page.totalCount = total;
    return { data, pageInfo: page };
  }

  @Get("/sales")
  async findAllSales(@Query() filter: FilterUserDto, @Pager() page: IPagination) {
    const [data, total] = await this.userService.findAllSales(filter, page);
    page.totalCount = total;
    return { data, pageInfo: page };
  }


  @Get(":id")
  @UseGuards(JwtAuthGuard)
  @UseGuards(RolesGuard)
  public findOne(@Param("id", ParseIntPipe) id: number): UserModule {
    return this.userService.findOne(id);
  }

  @Get("ref/link")
  @UseGuards(JwtAuthGuard)
  public async shearRefLink(@CurrentUser() user: ITokenUser) {
    const url = Buffer.from(`${user.id}`).toString("base64");
    return `${configuration().app.webPortalUrl}/${configuration().app.loginPath}?ref=true&ref_user=${url}`;
  }x

  @Post("welcome/mail/:user")
  @UseGuards(JwtAuthGuard)
  async welcomeMail(@Param("user", ParseIntPipe) id: number) {
    return await this.userService.welcomeMail(id);
  }

  // @Patch()
  // @UseGuards(JwtAuthGuard)
  // @UseInterceptors(
  //   FilesInterceptor("profile_picture", 20, {
  //     limits: { fileSize: Number(configuration().app.maxUploadSize) },
  //   })
  // )
  // async change(@Body() changePasswordDto: UpdateUserPasswordDto, @CurrentUser() user: ITokenUser) {
  //   console.log(5);
  //   return await this.userService.updateUs(user.id, changePasswordDto);
  // }



  @Patch("profile/change-password")
  @UseGuards(JwtAuthGuard)
  async changePassword(@Body() changePasswordDto: UpdateUserPasswordDto, @CurrentUser() user: ITokenUser) {
    console.log(5);
    return await this.userService.changePassword(user.id, changePasswordDto);
  }

  @Post("initiate-verification")
  async initiatePhoneNumberVerification(@Body() smsUserMail: SmsUserDto) {
    return await this.userService.initiatePhoneNumberVerification(smsUserMail.userEmail);
  }

  @Post("check-verification-code")
  async checkVerificationCode(@Body() verificationData: CheckVerificationCodeDto) {
    return await this.userService.confirmPhoneNumber(verificationData);
  }
}
