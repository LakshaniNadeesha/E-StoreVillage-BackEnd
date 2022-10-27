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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const bcrypt_1 = require("bcrypt");
const configuration_1 = __importDefault(require("../../../core/config/configuration"));
const redis_cache_service_1 = require("../../cache/redis-cache.service");
const repositories_1 = require("../../user/repositories");
const auth_messages_1 = require("../auth.messages");
const passwordReset_repository_1 = require("./../repositories/passwordReset.repository");
let AuthService = class AuthService {
    constructor(jwtService, userRepo, cacheService, passwordResetTokenRepo) {
        this.jwtService = jwtService;
        this.userRepo = userRepo;
        this.cacheService = cacheService;
        this.passwordResetTokenRepo = passwordResetTokenRepo;
    }
    async verifyPassword(plainPassword, hashPassword) {
        return await (0, bcrypt_1.compare)(plainPassword, hashPassword);
    }
    async getAuthenticatedUser(email, password) {
        try {
            const user = await this.userRepo.getByEmail(email);
            if (!user) {
                throw new common_1.ForbiddenException(auth_messages_1.AuthMessages.InvalidCred);
            }
            if (user.status === 0) {
                throw new common_1.ForbiddenException(auth_messages_1.AuthMessages.Blocked);
            }
            const isMatch = await this.verifyPassword(password, user.password);
            if (!isMatch) {
                let message = "";
                const updateAttempt = {
                    failed_login_attempt: user.failed_login_attempt + 1,
                };
                message = `${auth_messages_1.AuthMessages.InvalidCred} You have only ${5 - updateAttempt.failed_login_attempt} attempts`;
                if (updateAttempt.failed_login_attempt === 5) {
                    updateAttempt["status"] = 0;
                    message = `${auth_messages_1.AuthMessages.LoginAttemptExceeded}`;
                }
                await this.userRepo.update(user.id, updateAttempt);
                throw new common_1.BadRequestException(message);
            }
            if (user.failed_login_attempt > 0) {
                await this.userRepo.update(user.id, { failed_login_attempt: 0 });
            }
            return user;
        }
        catch (error) {
            throw error;
        }
    }
    async getGeneratedAccessToken(user, _isTwoFactor = false) {
        const payload = {
            sub: user.id,
            email: user.email,
        };
        const token = this.jwtService.sign(payload, {
            secret: (0, configuration_1.default)().app.jwtSecret,
            expiresIn: `${(0, configuration_1.default)().app.jwtSecretExp}s`,
        });
        return {
            access_token: token,
            expires_in: `${(0, configuration_1.default)().app.jwtSecretExp}s`,
        };
    }
    async getTokenUser(id, _payload) {
        try {
            let user = await this.cacheService.getUser(id);
            if (!user) {
                user = await this.userRepo.tokenUserGetById(id);
                await this.cacheService.setUser(user);
            }
            const tokenUser = {
                sub: user.id,
                email: user.email,
                role: user.role,
            };
            return tokenUser;
        }
        catch (error) {
            console.log(error);
            throw error;
        }
    }
    async getUserByRefreshToken(userId) {
        return await this.cacheService.getUser(userId);
    }
    async forgotPasswordGetToken(email) {
        const user = await this.userRepo.getOne({ email }, ["id", "email", "first_name"]);
        if (!user) {
            throw new common_1.NotFoundException("Invalid email");
        }
        const code = await this.passwordResetTokenRepo.getOne({ email });
        let token = null;
        if (code) {
            code.generateActivationCode();
            code.setExpireDate();
            const newToken = await this.passwordResetTokenRepo
                .update(code.id, code)
                .then(async () => await this.passwordResetTokenRepo.getOne({ id: code.id }));
            token = newToken.token;
        }
        else {
            const newCode = this.passwordResetTokenRepo.create({ email });
            console.log("newCode", newCode);
            const newToken = await this.passwordResetTokenRepo.save(newCode);
            token = newToken.token;
        }
        if (token) {
        }
        return false;
    }
    async resetPassword(data) {
        const code = await this.passwordResetTokenRepo.getOne({
            token: data.code,
            email: data.email,
        });
        if (!code) {
            throw new common_1.BadRequestException("Invalid reset link or link already used");
        }
        const date = new Date();
        if (code.expiration.getTime() < date.getTime()) {
            throw new common_1.BadRequestException("Link has expired. Please try again.");
        }
        const user = await this.userRepo.getOne({ email: data.email });
        if (!user) {
            throw new common_1.NotFoundException("Invalid email");
        }
        user.password = await (0, bcrypt_1.hash)(data.newPassword, 10);
        return await this.userRepo
            .update(user.id, user)
            .then(async () => {
            this.passwordResetTokenRepo.remove(code.id);
            return true;
        })
            .catch((e) => {
            throw new common_1.InternalServerErrorException(e);
        });
    }
    createForgotPasswordLink(code, email) {
        const frontRedirectUrl = (0, configuration_1.default)().app.webPortalUrl;
        const forgotPwdLink = `${frontRedirectUrl}/password-reset?code=${code}&email=${email}`;
        return forgotPwdLink;
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        repositories_1.UsersRepository,
        redis_cache_service_1.RedisCacheService,
        passwordReset_repository_1.PasswordResetRepository])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map