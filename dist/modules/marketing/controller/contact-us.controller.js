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
exports.ContactUsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const pagination_1 = require("../../../core/pagination");
const guards_1 = require("../../auth/guards");
const contact_us_dto_1 = require("../dto/contact-us.dto");
const contact_us_service_1 = require("../services/contact-us.service");
let ContactUsController = class ContactUsController {
    constructor(contactUsService) {
        this.contactUsService = contactUsService;
    }
    async findAll(filter, page) {
        const [data, total] = await this.contactUsService.findAll(filter, page);
        page.totalCount = total;
        return { data, pageInfo: page };
    }
    async create(createContactUsDto) {
        return this.contactUsService.create(createContactUsDto);
    }
    async update(id, updateContactUsDto) {
        return this.contactUsService.update(updateContactUsDto, id);
    }
    async getOneById(id) {
        return this.contactUsService.getOneById(id);
    }
    async deleteOneById(id) {
        return this.contactUsService.deleteOneById(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, pagination_1.Pager)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [contact_us_dto_1.FilterContactUsDto, Object]),
    __metadata("design:returntype", Promise)
], ContactUsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [contact_us_dto_1.CreateContactUsDto]),
    __metadata("design:returntype", Promise)
], ContactUsController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(";id"),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, contact_us_dto_1.UpdateContactUsDto]),
    __metadata("design:returntype", Promise)
], ContactUsController.prototype, "update", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ContactUsController.prototype, "getOneById", null);
__decorate([
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ContactUsController.prototype, "deleteOneById", null);
ContactUsController = __decorate([
    (0, common_1.Controller)("ContactUs"),
    (0, swagger_1.ApiTags)("ContactUs"),
    (0, common_1.UseGuards)(guards_1.JwtAuthGuard),
    __param(0, (0, common_1.Inject)(contact_us_service_1.ContactUsService.name)),
    __metadata("design:paramtypes", [contact_us_service_1.ContactUsService])
], ContactUsController);
exports.ContactUsController = ContactUsController;
//# sourceMappingURL=contact-us.controller.js.map