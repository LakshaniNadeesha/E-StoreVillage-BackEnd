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
exports.ItemService = void 0;
const common_1 = require("@nestjs/common");
const entities_1 = require("../../../entities");
const item_repository_interface_1 = require("../repositories/interfaces/item-repository.interface");
let ItemService = class ItemService {
    constructor(ItemRepository) {
        this.ItemRepository = ItemRepository;
    }
    delete(id) {
        return this.ItemRepository.remove(id);
    }
    getOneById(id) {
        return this.ItemRepository.getOneById(id);
    }
    update(updateItemDto, id) {
        const newItem = this.ItemRepository.create(updateItemDto);
        const category = new entities_1.Category();
        category.id = updateItemDto.category_id;
        newItem.Category = category;
        return this.ItemRepository.update(id, newItem);
    }
    async create(createItemDto) {
        const newItem = this.ItemRepository.create(createItemDto);
        const category = new entities_1.Category();
        category.id = createItemDto.category_id;
        newItem.Category = category;
        const user = new entities_1.User();
        user.id = createItemDto.createdBy;
        newItem.CreatedBy = user;
        return this.ItemRepository.save(newItem);
    }
    async findAll(filter, page) {
        filter.limit ? delete filter.limit : null;
        filter.page ? delete filter.page : null;
        return await this.ItemRepository.getAll(filter, null, ["Category", "CreatedBy"], null, page).catch((err) => {
            throw new common_1.BadRequestException(err);
        });
    }
};
ItemService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(`${item_repository_interface_1.IItemRepositoryInterface}`)),
    __metadata("design:paramtypes", [Object])
], ItemService);
exports.ItemService = ItemService;
//# sourceMappingURL=item.service.js.map