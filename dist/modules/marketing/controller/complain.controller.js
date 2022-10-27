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
exports.ComplainController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const pagination_1 = require("../../../core/pagination");
const complain_dto_1 = require("../dto/complain.dto");
const complain_service_1 = require("../services/complain.service");
let ComplainController = class ComplainController {
    constructor(complainService) {
        this.complainService = complainService;
    }
    async findAll(filter, page) {
        const [data, total] = await this.complainService.findAll(filter, page);
        page.totalCount = total;
        return { data, pageInfo: page };
    }
    async create(createComplainDto) {
        return this.complainService.create(createComplainDto);
    }
    async createReply(createComplainDto) {
        console.log(createComplainDto);
        return await this.complainService.createReply(createComplainDto);
    }
    async update(id, updateComplainDto) {
        return this.complainService.update(updateComplainDto, id);
    }
    async getOneById(id) {
        return this.complainService.getOneById(id);
    }
    async deleteOneById(id) {
        return this.complainService.deleteOneById(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, pagination_1.Pager)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [complain_dto_1.FilterComplainDto, Object]),
    __metadata("design:returntype", Promise)
], ComplainController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [complain_dto_1.CreateComplainDto]),
    __metadata("design:returntype", Promise)
], ComplainController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('reply'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [complain_dto_1.CreateComplainReplyDto]),
    __metadata("design:returntype", Promise)
], ComplainController.prototype, "createReply", null);
__decorate([
    (0, common_1.Patch)(":id"),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, complain_dto_1.UpdateComplainDto]),
    __metadata("design:returntype", Promise)
], ComplainController.prototype, "update", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ComplainController.prototype, "getOneById", null);
__decorate([
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ComplainController.prototype, "deleteOneById", null);
ComplainController = __decorate([
    (0, common_1.Controller)("complain"),
    (0, swagger_1.ApiTags)("Complain"),
    __param(0, (0, common_1.Inject)(complain_service_1.ComplainService.name)),
    __metadata("design:paramtypes", [complain_service_1.ComplainService])
], ComplainController);
exports.ComplainController = ComplainController;
//# sourceMappingURL=complain.controller.js.map