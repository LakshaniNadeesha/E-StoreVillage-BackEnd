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
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotifySubscribeController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const pagination_1 = require("../../../core/pagination");
const guards_1 = require("../../auth/guards");
const notify_subscribe_dto_1 = require("../dto/notify-subscribe.dto");
const notify_subscribe_service_1 = require("../services/notify-subscribe.service");
let NotifySubscribeController = class NotifySubscribeController {
    constructor(notifySubscribeService) {
        this.notifySubscribeService = notifySubscribeService;
    }
    async findAll(filter, page) {
        const [data, total] = await this.notifySubscribeService.findAll(filter, page);
        page.totalCount = total;
        return { data, pageInfo: page };
    }
    async create(createNotifySubscribeDto) {
        return this.notifySubscribeService.create(createNotifySubscribeDto);
    }
    async update(id, updateNotifySubscribeDto) {
        return this.notifySubscribeService.update(updateNotifySubscribeDto, id);
    }
    async getOneById(id) {
        return this.notifySubscribeService.getOneById(id);
    }
    async deleteOneById(id) {
        return this.notifySubscribeService.deleteOneById(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, pagination_1.Pager)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [notify_subscribe_dto_1.FilterNotifySubscribeDto, Object]),
    __metadata("design:returntype", Promise)
], NotifySubscribeController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [notify_subscribe_dto_1.CreateNotifySubscribeDto]),
    __metadata("design:returntype", Promise)
], NotifySubscribeController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(":id"),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, notify_subscribe_dto_1.UpdateNotifySubscribeDto]),
    __metadata("design:returntype", Promise)
], NotifySubscribeController.prototype, "update", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], NotifySubscribeController.prototype, "getOneById", null);
__decorate([
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], NotifySubscribeController.prototype, "deleteOneById", null);
NotifySubscribeController = __decorate([
    (0, common_1.Controller)("NotifySubscribe"),
    (0, swagger_1.ApiTags)("NotifySubscribe"),
    (0, common_1.UseGuards)(guards_1.JwtAuthGuard),
    __param(0, (0, common_1.Inject)(notify_subscribe_service_1.NotifySubscribeService.name)),
    __metadata("design:paramtypes", [notify_subscribe_service_1.NotifySubscribeService])
], NotifySubscribeController);
exports.NotifySubscribeController = NotifySubscribeController;
//# sourceMappingURL=notify-subscribe.controller.js.map