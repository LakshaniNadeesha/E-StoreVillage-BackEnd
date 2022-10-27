"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt_1 = require("bcrypt");
const sms_service_1 = __importDefault(require("../../../core/services/sms.service"));
const enum_1 = require("../enum");
const user_repository_1 = require("./../repositories/user.repository");
let UserService = class UserService {
    constructor(userRepo, smsService) {
        this.userRepo = userRepo;
        this.smsService = smsService;
    }
    updateUser(id, updateUserDto) {
        return this.userRepo.update(id, updateUserDto);
    }
    async create(user) {
        const userExist = await this.userRepo.getByEmail(user.email);
        if (userExist) {
            throw new common_1.BadRequestException(`User already exists with ${user.email}`);
        }
        let newUser = {};
        const passwordHash = await (0, bcrypt_1.hash)(user.r_password, 10);
        if (user.role === enum_1.UserRole.Customer) {
            newUser = {
                first_name: user.first_name,
                last_name: user.last_name,
                email: user.email,
                phoneNumber: user.phoneNumber,
                password: passwordHash,
                status: 1,
                role: enum_1.UserRole.Customer,
                failed_login_attempt: 0,
            };
        }
        else if (user.role === enum_1.UserRole.Seller) {
            newUser = {
                first_name: user.first_name,
                last_name: user.first_name,
                email: user.email,
                numFriends: user.numFriends,
                socialLink: user.socialLink,
                bio: user.bio,
                phoneNumber: user.phoneNumber,
                password: passwordHash,
                status: 0,
                role: enum_1.UserRole.Seller,
                failed_login_attempt: 0,
            };
        }
        else if (user.role === enum_1.UserRole.Manager) {
            newUser = {
                first_name: user.first_name,
                last_name: user.first_name,
                email: user.email,
                numFriends: user.numFriends,
                socialLink: user.socialLink,
                bio: user.bio,
                phoneNumber: user.phoneNumber,
                password: passwordHash,
                status: 1,
                role: enum_1.UserRole.Manager,
                failed_login_attempt: 0,
            };
        }
        else {
            throw new common_1.BadRequestException(`User role issue ${user.email}`);
        }
        return this.userRepo.save(newUser);
    }
    async setStatus(id, status) {
        const statusSet = await this.userRepo.updateAndGetEntity(id, { status: status });
        return statusSet;
    }
    async findOne(id) {
        const user = await this.userRepo.getOneById(id);
        return user;
    }
    async findAllUsers(filter, page) {
        filter['role'] = enum_1.UserRole.Customer;
        return await this.userRepo.getAll(filter, null, null, null, page);
    }
    async findAllSales(filter, page) {
        filter['role'] = enum_1.UserRole.Seller;
        return await this.userRepo.getAll(filter, null, null, null, page);
    }
    async changePassword(id, changePasswordDto) {
        const uid = parseInt(id);
        const user = await this.userRepo.getOneById(uid);
        if (!user) {
            throw new common_1.ForbiddenException(`Invalid User`);
        }
        const isPasswordCorrect = await (0, bcrypt_1.compare)(changePasswordDto.current_password, user.password);
        if (!isPasswordCorrect) {
            throw new common_1.BadRequestException(`Invalid current password`);
        }
        const newPassword = await (0, bcrypt_1.hash)(changePasswordDto.new_password, 10);
        return await this.userRepo.updatePassword(uid, newPassword).then(async (res) => {
            if (res) {
                return true;
            }
            else {
                throw new common_1.ForbiddenException(`Password not updated`);
            }
        });
    }
    async welcomeMail(id) {
        const user = await this.userRepo.getOneById(id);
        return user;
    }
    async confirmPhoneNumber(verificationData) {
        console.log(verificationData.userEmail);
        const userExist = await this.userRepo.getOne({ email: verificationData.userEmail });
        console.log(userExist);
        if (userExist.isPhoneNumberConfirmed) {
            throw new common_1.BadRequestException(`Phone number already confirmed`);
        }
        const result = await this.smsService.tokenVerify(userExist.phoneNumber, verificationData.userCode);
        if (!result.valid || result.status !== "approved") {
            throw new common_1.BadRequestException("Wrong code provided");
        }
        return this.userRepo.update(userExist.id, { isPhoneNumberConfirmed: true }).then(async (res) => {
            await this.smsService.sendSMS(userExist.phoneNumber, `Welcome to EStore`);
            return res;
        });
    }
    async initiatePhoneNumberVerification(email) {
        const userExist = await this.userRepo.getByEmail(email);
        if (userExist.isPhoneNumberConfirmed) {
            throw new common_1.BadRequestException(`Phone number already confirmed`);
        }
        await this.smsService.initiatePhoneNumberVerification(userExist.phoneNumber);
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_repository_1.UsersRepository, sms_service_1.default])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map