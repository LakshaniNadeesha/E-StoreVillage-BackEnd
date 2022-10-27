import { IPagination } from "src/core/pagination";
import SmsService from "src/core/services/sms.service";
import { User } from "src/entities";
import { CheckVerificationCodeDto } from "../dto/sms.dto";
import { FilterUserDto } from "../dto/user-filter.dto";
import { UpdateUserDto, UpdateUserPasswordDto } from "../dto/user-update.dto";
import { UserDto } from "../dto/user.dto";
import { IUser } from "../interface/user.interface";
import { UsersRepository } from "./../repositories/user.repository";
export declare class UserService {
    private readonly userRepo;
    private readonly smsService;
    constructor(userRepo: UsersRepository, smsService: SmsService);
    updateUser(id: number, updateUserDto: UpdateUserDto): Promise<import("typeorm").UpdateResult>;
    create(user: UserDto): Promise<User>;
    setStatus(id: number, status: number): Promise<IUser>;
    findOne(id: number): Promise<IUser>;
    findAllUsers(filter: FilterUserDto, page: IPagination): Promise<[User[], number]>;
    findAllSales(filter: FilterUserDto, page: IPagination): Promise<[User[], number]>;
    changePassword(id: string, changePasswordDto: UpdateUserPasswordDto): Promise<boolean>;
    welcomeMail(id: number): Promise<User>;
    confirmPhoneNumber(verificationData: CheckVerificationCodeDto): Promise<import("typeorm").UpdateResult>;
    initiatePhoneNumberVerification(email: string): Promise<void>;
}
