"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const entities_1 = require("../../entities");
const repositories_1 = require("./repositories");
const services_1 = require("./services");
const user_controller_1 = require("./controllers/user.controller");
const sms_service_1 = __importDefault(require("../../core/services/sms.service"));
const platform_express_1 = require("@nestjs/platform-express");
const uploader_config_1 = require("../uploader/uploader.config");
let UserModule = class UserModule {
};
UserModule = __decorate([
    (0, common_1.Module)({
        imports: [platform_express_1.MulterModule.registerAsync({ useClass: uploader_config_1.MulterOptionConfig }), typeorm_1.TypeOrmModule.forFeature([entities_1.User])],
        providers: [repositories_1.UsersRepository, services_1.UserService, sms_service_1.default],
        exports: [repositories_1.UsersRepository, services_1.UserService],
        controllers: [user_controller_1.UserController],
    })
], UserModule);
exports.UserModule = UserModule;
//# sourceMappingURL=user.module.js.map