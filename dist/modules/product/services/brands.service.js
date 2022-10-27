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
exports.BrandsService = void 0;
const common_1 = require("@nestjs/common");
const brands_repository_interface_1 = require("../repositories/interfaces/brands-repository.interface");
let BrandsService = class BrandsService {
    constructor(brandsRepository) {
        this.brandsRepository = brandsRepository;
    }
    deleteOneById(id) {
        return this.brandsRepository.remove(id);
    }
    getOneById(id) {
        return this.brandsRepository.getOneById(id);
    }
    update(updateBrandsDto, id) {
        return this.brandsRepository.update(id, updateBrandsDto);
    }
    async create(createBrandsDto) {
        return this.brandsRepository.save(createBrandsDto);
    }
    async findAll(filter, page) {
        filter.limit ? delete filter.limit : null;
        filter.page ? delete filter.page : null;
        return await this.brandsRepository.getAll(filter, null, null, null, page).catch((err) => {
            throw new common_1.BadRequestException(err);
        });
    }
};
BrandsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(`${brands_repository_interface_1.IBrandsRepositoryInterface}`)),
    __metadata("design:paramtypes", [Object])
], BrandsService);
exports.BrandsService = BrandsService;
//# sourceMappingURL=brands.service.js.map