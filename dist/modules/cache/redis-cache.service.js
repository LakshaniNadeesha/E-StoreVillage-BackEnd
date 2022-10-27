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
exports.RedisCacheService = void 0;
const common_1 = require("@nestjs/common");
const configuration_1 = __importDefault(require("../../core/config/configuration"));
let RedisCacheService = class RedisCacheService {
    constructor(cache) {
        this.cache = cache;
        this.key_user = "user-";
        this.logged = "logged-";
    }
    async get(key) {
        return await this.cache.get(key);
    }
    async set(key, value) {
        await this.cache.set(key, value);
    }
    async getUser(id) {
        return await this.get(this.key_user + id);
    }
    async setUser(user) {
        delete user.password;
        const key = this.key_user + user.id;
        await this.set(key, user);
    }
    async setLoggedTokens(user, token) {
        const key = this.logged + user.id;
        const found = await this.get(key);
        if (found) {
            found.push(token);
            await this.cache.set(key, found, Number((0, configuration_1.default)().app.jwtSecretExp));
        }
        else {
            const tokens = [];
            tokens.push(token);
            await this.cache.set(key, tokens, Number((0, configuration_1.default)().app.jwtSecretExp));
        }
    }
    async getLoggedTokens(userId) {
        const key = this.logged + userId;
        return await this.get(key);
    }
    async clearLoggedTokens(userId) {
        const key = this.logged + userId;
        await this.cache.del(key);
    }
};
RedisCacheService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(common_1.CACHE_MANAGER)),
    __metadata("design:paramtypes", [Object])
], RedisCacheService);
exports.RedisCacheService = RedisCacheService;
//# sourceMappingURL=redis-cache.service.js.map