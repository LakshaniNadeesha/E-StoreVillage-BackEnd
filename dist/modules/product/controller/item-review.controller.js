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
exports.ItemReviewController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const pagination_1 = require("../../../core/pagination");
const guards_1 = require("../../auth/guards");
const item_review_dto_1 = require("../dto/item-review.dto");
const item_review_service_1 = require("../services/item-review.service");
let ItemReviewController = class ItemReviewController {
    constructor(itemReviewService) {
        this.itemReviewService = itemReviewService;
    }
    async findAll(filter, page) {
        const [data, total] = await this.itemReviewService.findAll(filter, page);
        page.totalCount = total;
        return { data, pageInfo: page };
    }
    async create(createItemReviewDto) {
        return this.itemReviewService.create(createItemReviewDto);
    }
    async update(updateItemReviewDto, id) {
        return this.itemReviewService.update(updateItemReviewDto, id);
    }
    async getOneById(id) {
        return this.itemReviewService.getOneById(id);
    }
    async deleteOneById(id) {
        return this.itemReviewService.delete(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, pagination_1.Pager)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [item_review_dto_1.FilterItemReviewDto, Object]),
    __metadata("design:returntype", Promise)
], ItemReviewController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [item_review_dto_1.CreateItemReviewDto]),
    __metadata("design:returntype", Promise)
], ItemReviewController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(":id"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [item_review_dto_1.UpdateItemReviewDto, Number]),
    __metadata("design:returntype", Promise)
], ItemReviewController.prototype, "update", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ItemReviewController.prototype, "getOneById", null);
__decorate([
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ItemReviewController.prototype, "deleteOneById", null);
ItemReviewController = __decorate([
    (0, common_1.Controller)("item-review"),
    (0, swagger_1.ApiTags)("Item Review"),
    (0, common_1.UseGuards)(guards_1.JwtAuthGuard),
    __param(0, (0, common_1.Inject)(item_review_service_1.ItemReviewService.name)),
    __metadata("design:paramtypes", [item_review_service_1.ItemReviewService])
], ItemReviewController);
exports.ItemReviewController = ItemReviewController;
//# sourceMappingURL=item-review.controller.js.map