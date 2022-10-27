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
exports.BannerAdsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const pagination_1 = require("../../../core/pagination");
const guards_1 = require("../../auth/guards");
const banner_ads_dto_1 = require("../dto/banner-ads.dto");
const banner_ads_service_1 = require("../services/banner-ads.service");
let BannerAdsController = class BannerAdsController {
    constructor(bannerAdsService) {
        this.bannerAdsService = bannerAdsService;
    }
    async findAll(filter, page) {
        const [data, total] = await this.bannerAdsService.findAll(filter, page);
        page.totalCount = total;
        return { data, pageInfo: page };
    }
    async create(createBannerAdsDto) {
        return this.bannerAdsService.create(createBannerAdsDto);
    }
    async update(id, updateBannerAdsDto) {
        return this.bannerAdsService.update(updateBannerAdsDto, id);
    }
    async getOneById(id) {
        return this.bannerAdsService.getOneById(id);
    }
    async deleteOneById(id) {
        return this.bannerAdsService.deleteOneById(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, pagination_1.Pager)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [banner_ads_dto_1.FilterBannerAdsDto, Object]),
    __metadata("design:returntype", Promise)
], BannerAdsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [banner_ads_dto_1.CreateBannerAdsDto]),
    __metadata("design:returntype", Promise)
], BannerAdsController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(":id"),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, banner_ads_dto_1.UpdateBannerAdsDto]),
    __metadata("design:returntype", Promise)
], BannerAdsController.prototype, "update", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BannerAdsController.prototype, "getOneById", null);
__decorate([
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BannerAdsController.prototype, "deleteOneById", null);
BannerAdsController = __decorate([
    (0, common_1.Controller)("banner-ads"),
    (0, swagger_1.ApiTags)("Banner Ads"),
    (0, common_1.UseGuards)(guards_1.JwtAuthGuard),
    __param(0, (0, common_1.Inject)(banner_ads_service_1.BannerAdsService.name)),
    __metadata("design:paramtypes", [banner_ads_service_1.BannerAdsService])
], BannerAdsController);
exports.BannerAdsController = BannerAdsController;
//# sourceMappingURL=banner-ads.controller.js.map