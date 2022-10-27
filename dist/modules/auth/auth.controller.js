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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const configuration_1 = __importDefault(require("../../core/config/configuration"));
const redis_cache_service_1 = require("../cache/redis-cache.service");
const decorators_1 = require("./decorators");
const dto_1 = require("./dto");
const guards_1 = require("./guards");
const auth_service_1 = require("./services/auth.service");
let AuthController = class AuthController {
    constructor(authService, cacheService) {
        this.authService = authService;
        this.cacheService = cacheService;
    }
    async login(login, req, response) {
        const { user } = req;
        if (user.status != 1) {
            throw new common_1.BadRequestException('User Block');
        }
        const token = await this.authService.getGeneratedAccessToken(user);
        delete user.password;
        await this.cacheService.setUser(user);
        await this.cacheService.setLoggedTokens(user, token.access_token);
        token.user = user;
        response.cookie("Authentication", token.access_token, {
            maxAge: Number((0, configuration_1.default)().app.jwtSecretExp) * 1000,
            httpOnly: true,
            sameSite: "strict",
        });
        return response.send(token);
    }
    async logout(req, response, user) {
        response.cookie("Authentication", "", {
            maxAge: 0,
            httpOnly: true,
            sameSite: "strict",
        });
        await this.cacheService.clearLoggedTokens(user.sub);
        return response.send({ status: 200, message: "Logged Out" });
    }
    async forgotPasswordGetToken(email) {
        return await this.authService.forgotPasswordGetToken(email);
    }
    async resetPassword(data) {
        const reset = await this.authService.resetPassword(data);
        return reset;
    }
};
__decorate([
    (0, common_1.Post)("login"),
    (0, common_1.UseGuards)(guards_1.LocalAuthGuard),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.LoginDto, Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.Post)("logout"),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(guards_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __param(2, (0, decorators_1.AuthUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "logout", null);
__decorate([
    (0, common_1.Get)("forgot-password/:email"),
    __param(0, (0, common_1.Param)("email")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "forgotPasswordGetToken", null);
__decorate([
    (0, common_1.Post)("forgot-password"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.ForgotPasswordDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "resetPassword", null);
AuthController = __decorate([
    (0, common_1.Controller)("auth"),
    (0, swagger_1.ApiTags)("Auth"),
    __metadata("design:paramtypes", [auth_service_1.AuthService, redis_cache_service_1.RedisCacheService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map