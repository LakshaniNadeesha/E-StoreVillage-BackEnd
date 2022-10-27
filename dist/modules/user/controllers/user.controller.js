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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const configuration_1 = __importDefault(require("../../../core/config/configuration"));
const decorators_1 = require("../../../core/decorators");
const pagination_1 = require("../../../core/pagination");
const sms_service_1 = __importDefault(require("../../../core/services/sms.service"));
const guards_1 = require("../../auth/guards");
const sms_dto_1 = require("../dto/sms.dto");
const user_filter_dto_1 = require("../dto/user-filter.dto");
const user_update_dto_1 = require("../dto/user-update.dto");
const user_dto_1 = require("../dto/user.dto");
const user_service_1 = require("../services/user.service");
const user_module_1 = require("../user.module");
const jwt_auth_guard_1 = require("./../../auth/guards/jwt-auth.guard");
let UserController = class UserController {
    constructor(userService, smsService) {
        this.userService = userService;
        this.smsService = smsService;
    }
    async create(userDto) {
        return await this.userService.create(userDto);
    }
    async updateUser(id, updateUserDto) {
        return await this.userService.updateUser(id, updateUserDto);
    }
    async findAllUsers(filter, page) {
        const [data, total] = await this.userService.findAllUsers(filter, page);
        page.totalCount = total;
        return { data, pageInfo: page };
    }
    async findAllSales(filter, page) {
        const [data, total] = await this.userService.findAllSales(filter, page);
        page.totalCount = total;
        return { data, pageInfo: page };
    }
    findOne(id) {
        return this.userService.findOne(id);
    }
    async shearRefLink(user) {
        const url = Buffer.from(`${user.id}`).toString("base64");
        return `${(0, configuration_1.default)().app.webPortalUrl}/${(0, configuration_1.default)().app.loginPath}?ref=true&ref_user=${url}`;
    }
    async welcomeMail(id) {
        return await this.userService.welcomeMail(id);
    }
    async changePassword(changePasswordDto, user) {
        console.log(5);
        return await this.userService.changePassword(user.id, changePasswordDto);
    }
    async initiatePhoneNumberVerification(smsUserMail) {
        return await this.userService.initiatePhoneNumberVerification(smsUserMail.userEmail);
    }
    async checkVerificationCode(verificationData) {
        return await this.userService.confirmPhoneNumber(verificationData);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.UserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, user_update_dto_1.UpdateUserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateUser", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, pagination_1.Pager)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_filter_dto_1.FilterUserDto, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findAllUsers", null);
__decorate([
    (0, common_1.Get)("/sales"),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, pagination_1.Pager)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_filter_dto_1.FilterUserDto, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findAllSales", null);
__decorate([
    (0, common_1.Get)(":id"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.UseGuards)(guards_1.RolesGuard),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", user_module_1.UserModule)
], UserController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)("ref/link"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, decorators_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "shearRefLink", null);
__decorate([
    (0, common_1.Post)("welcome/mail/:user"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)("user", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "welcomeMail", null);
__decorate([
    (0, common_1.Patch)("profile/change-password"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, decorators_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_update_dto_1.UpdateUserPasswordDto, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "changePassword", null);
__decorate([
    (0, common_1.Post)("initiate-verification"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [sms_dto_1.SmsUserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "initiatePhoneNumberVerification", null);
__decorate([
    (0, common_1.Post)("check-verification-code"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [sms_dto_1.CheckVerificationCodeDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "checkVerificationCode", null);
UserController = __decorate([
    (0, common_1.Controller)("user"),
    (0, swagger_1.ApiTags)("User"),
    __metadata("design:paramtypes", [user_service_1.UserService, sms_service_1.default])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map