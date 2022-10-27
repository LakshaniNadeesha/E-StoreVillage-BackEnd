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
exports.OrderController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const decorators_1 = require("../../../core/decorators");
const guards_1 = require("../../auth/guards");
const user_point_dto_1 = require("../dto/user-point.dto");
const user_point_service_1 = require("../services/user-point.service");
let OrderController = class OrderController {
    constructor(userPointsService) {
        this.userPointsService = userPointsService;
    }
    async create(createUserPointDto, user) {
        return this.userPointsService.create(createUserPointDto, parseInt(user.id), 7);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, decorators_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_point_dto_1.CreateUserPointDto, Object]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "create", null);
OrderController = __decorate([
    (0, common_1.Controller)("points"),
    (0, swagger_1.ApiTags)("Points"),
    (0, common_1.UseGuards)(guards_1.JwtAuthGuard),
    __param(0, (0, common_1.Inject)(user_point_service_1.UserPointService.name)),
    __metadata("design:paramtypes", [user_point_service_1.UserPointService])
], OrderController);
exports.OrderController = OrderController;
//# sourceMappingURL=user-point.controller.js.map