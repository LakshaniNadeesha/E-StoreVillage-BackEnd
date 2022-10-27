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
exports.ItemReviewService = void 0;
const common_1 = require("@nestjs/common");
const entities_1 = require("../../../entities");
const item_review_repository_interface_1 = require("../repositories/interfaces/item-review-repository.interface");
let ItemReviewService = class ItemReviewService {
    constructor(ItemReviewRepository) {
        this.ItemReviewRepository = ItemReviewRepository;
    }
    delete(id) {
        return this.ItemReviewRepository.remove(id);
    }
    getOneById(id) {
        return this.ItemReviewRepository.getOneById(id);
    }
    update(updateItemReviewDto, id) {
        return this.ItemReviewRepository.update(id, updateItemReviewDto);
    }
    async create(createItemReviewDto) {
        const newReview = this.ItemReviewRepository.create(createItemReviewDto);
        const item = new entities_1.Item();
        item.id = createItemReviewDto.item_id;
        newReview.Item = item;
        return this.ItemReviewRepository.create(newReview);
    }
    async findAll(filter, page) {
        filter.limit ? delete filter.limit : null;
        filter.page ? delete filter.page : null;
        return await this.ItemReviewRepository.getAll(filter, null, null, null, page).catch((err) => {
            throw new common_1.BadRequestException(err);
        });
    }
};
ItemReviewService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(`${item_review_repository_interface_1.IItemReviewRepositoryInterface}`)),
    __metadata("design:paramtypes", [Object])
], ItemReviewService);
exports.ItemReviewService = ItemReviewService;
//# sourceMappingURL=item-review.service.js.map