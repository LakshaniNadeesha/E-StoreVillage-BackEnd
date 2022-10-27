import { ITokenUser } from "src/core/interface";
import { IPagination } from "src/core/pagination";
import SmsService from "src/core/services/sms.service";
import { CheckVerificationCodeDto, SmsUserDto } from "../dto/sms.dto";
import { FilterUserDto } from "../dto/user-filter.dto";
import { UpdateUserDto, UpdateUserPasswordDto } from "../dto/user-update.dto";
import { UserDto } from "../dto/user.dto";
import { UserService } from "../services/user.service";
import { UserModule } from "../user.module";
export declare class UserController {
    private readonly userService;
    private readonly smsService;
    constructor(userService: UserService, smsService: SmsService);
    create(userDto: UserDto): Promise<import("../../../entities").User>;
    updateUser(id: number, updateUserDto: UpdateUserDto): Promise<import("typeorm").UpdateResult>;
    findAllUsers(filter: FilterUserDto, page: IPagination): Promise<{
        data: import("../../../entities").User[];
        pageInfo: IPagination;
    }>;
    findAllSales(filter: FilterUserDto, page: IPagination): Promise<{
        data: import("../../../entities").User[];
        pageInfo: IPagination;
    }>;
    findOne(id: number): UserModule;
    shearRefLink(user: ITokenUser): Promise<string>;
    x: any;
    welcomeMail(id: number): Promise<import("../../../entities").User>;
    changePassword(changePasswordDto: UpdateUserPasswordDto, user: ITokenUser): Promise<boolean>;
    initiatePhoneNumberVerification(smsUserMail: SmsUserDto): Promise<void>;
    checkVerificationCode(verificationData: CheckVerificationCodeDto): Promise<import("typeorm").UpdateResult>;
}
