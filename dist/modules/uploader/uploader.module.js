"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploaderModule = void 0;
const uploader_config_1 = require("./uploader.config");
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const uploader_service_1 = require("./uploader.service");
const uploader_controller_1 = require("./controller/uploader.controller");
let UploaderModule = class UploaderModule {
};
UploaderModule = __decorate([
    (0, common_1.Module)({
        imports: [platform_express_1.MulterModule.registerAsync({ useClass: uploader_config_1.MulterOptionConfig })],
        providers: [uploader_service_1.UploaderService],
        exports: [uploader_service_1.UploaderService],
        controllers: [uploader_controller_1.UploaderController],
    })
], UploaderModule);
exports.UploaderModule = UploaderModule;
//# sourceMappingURL=uploader.module.js.map