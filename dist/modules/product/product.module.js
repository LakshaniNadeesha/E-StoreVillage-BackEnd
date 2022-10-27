"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModule = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const entities_1 = require("../../entities");
const brands_controller_1 = require("./controller/brands.controller");
const item_review_controller_1 = require("./controller/item-review.controller");
const item_controller_1 = require("./controller/item.controller");
const brands_service_1 = require("./services/brands.service");
const brands_repository_1 = require("./repositories/brands.repository");
const brands_repository_interface_1 = require("./repositories/interfaces/brands-repository.interface");
const category_repository_interface_1 = require("./repositories/interfaces/category-repository.interface");
const category_service_1 = require("./services/category.service");
const category_repository_1 = require("./repositories/category.repository");
const item_review_service_1 = require("./services/item-review.service");
const item_review_repository_1 = require("./repositories/item-review.repository");
const item_review_repository_interface_1 = require("./repositories/interfaces/item-review-repository.interface");
const item_repository_1 = require("./repositories/item.repository");
const item_repository_interface_1 = require("./repositories/interfaces/item-repository.interface");
const item_service_1 = require("./services/item.service");
const category_controller_1 = require("./controller/category.controller");
let ProductModule = class ProductModule {
};
ProductModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([entities_1.Item, entities_1.ItemReview, entities_1.Brands, entities_1.Category])],
        providers: [
            {
                provide: `${brands_repository_interface_1.IBrandsRepositoryInterface}`,
                useClass: brands_repository_1.BrandsRepository,
            },
            {
                provide: brands_service_1.BrandsService.name,
                useClass: brands_service_1.BrandsService,
            },
            {
                provide: `${category_repository_interface_1.ICategoryRepositoryInterface}`,
                useClass: category_repository_1.CategoryRepository,
            },
            {
                provide: category_service_1.CategoryService.name,
                useClass: category_service_1.CategoryService,
            },
            {
                provide: `${item_review_repository_interface_1.IItemReviewRepositoryInterface}`,
                useClass: item_review_repository_1.ItemReviewRepository,
            },
            {
                provide: item_review_service_1.ItemReviewService.name,
                useClass: item_review_service_1.ItemReviewService,
            },
            {
                provide: `${item_repository_interface_1.IItemRepositoryInterface}`,
                useClass: item_repository_1.ItemRepository,
            },
            {
                provide: item_service_1.ItemService.name,
                useClass: item_service_1.ItemService,
            },
        ],
        exports: [
            {
                provide: `${brands_repository_interface_1.IBrandsRepositoryInterface}`,
                useClass: brands_repository_1.BrandsRepository,
            },
            {
                provide: brands_service_1.BrandsService.name,
                useClass: brands_service_1.BrandsService,
            },
            {
                provide: `${category_repository_interface_1.ICategoryRepositoryInterface}`,
                useClass: category_repository_1.CategoryRepository,
            },
            {
                provide: category_service_1.CategoryService.name,
                useClass: category_service_1.CategoryService,
            },
            {
                provide: `${item_review_repository_interface_1.IItemReviewRepositoryInterface}`,
                useClass: item_review_repository_1.ItemReviewRepository,
            },
            {
                provide: item_review_service_1.ItemReviewService.name,
                useClass: item_review_service_1.ItemReviewService,
            },
            {
                provide: `${item_repository_interface_1.IItemRepositoryInterface}`,
                useClass: item_repository_1.ItemRepository,
            },
            {
                provide: item_service_1.ItemService.name,
                useClass: item_service_1.ItemService,
            },
        ],
        controllers: [brands_controller_1.BrandController, category_controller_1.CategoryController, item_review_controller_1.ItemReviewController, item_controller_1.ItemController],
    })
], ProductModule);
exports.ProductModule = ProductModule;
//# sourceMappingURL=product.module.js.map