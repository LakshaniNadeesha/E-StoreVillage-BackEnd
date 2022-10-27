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
exports.CategoryService = void 0;
const common_1 = require("@nestjs/common");
const category_repository_interface_1 = require("../repositories/interfaces/category-repository.interface");
let CategoryService = class CategoryService {
    constructor(CategoryRepository) {
        this.CategoryRepository = CategoryRepository;
    }
    delete(id) {
        return this.CategoryRepository.remove(id);
    }
    getOneById(id) {
        return this.CategoryRepository.getOneById(id);
    }
    update(updateCategoryDto, id) {
        return this.CategoryRepository.update(id, updateCategoryDto);
    }
    async create(createCategoryDto) {
        const newCat = this.CategoryRepository.create(createCategoryDto);
        return this.CategoryRepository.save(newCat);
    }
    async findAll(filter, page) {
        filter.limit ? delete filter.limit : null;
        filter.page ? delete filter.page : null;
        return await this.CategoryRepository.getAll(filter, null, ['Item'], null, null).catch((err) => {
            throw new common_1.BadRequestException(err);
        });
    }
};
CategoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(`${category_repository_interface_1.ICategoryRepositoryInterface}`)),
    __metadata("design:paramtypes", [Object])
], CategoryService);
exports.CategoryService = CategoryService;
//# sourceMappingURL=category.service.js.map