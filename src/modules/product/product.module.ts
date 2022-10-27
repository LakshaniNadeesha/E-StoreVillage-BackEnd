import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";
import { Brands, Category, Item, ItemReview } from "src/entities";
import { BrandController } from "./controller/brands.controller";
import { ItemReviewController } from "./controller/item-review.controller";
import { ItemController } from "./controller/item.controller";
import { BrandsService } from "./services/brands.service";
import { BrandsRepository } from "./repositories/brands.repository";
import { IBrandsRepositoryInterface } from "./repositories/interfaces/brands-repository.interface";
import { ICategoryRepositoryInterface } from "./repositories/interfaces/category-repository.interface";
import { CategoryService } from "./services/category.service";
import { CategoryRepository } from "./repositories/category.repository";
import { ItemReviewService } from "./services/item-review.service";
import { ItemReviewRepository } from "./repositories/item-review.repository";
import { IItemReviewRepositoryInterface } from "./repositories/interfaces/item-review-repository.interface";
import { ItemRepository } from "./repositories/item.repository";
import { IItemRepositoryInterface } from "./repositories/interfaces/item-repository.interface";
import { ItemService } from "./services/item.service";
import { CategoryController } from "./controller/category.controller";

@Module({
  imports: [TypeOrmModule.forFeature([Item, ItemReview, Brands, Category])],
  providers: [
    {
      provide: `${IBrandsRepositoryInterface}`,
      useClass: BrandsRepository,
    },
    {
      provide: BrandsService.name,
      useClass: BrandsService,
    },
    {
      provide: `${ICategoryRepositoryInterface}`,
      useClass: CategoryRepository,
    },
    {
      provide: CategoryService.name,
      useClass: CategoryService,
    },
    {
      provide: `${IItemReviewRepositoryInterface}`,
      useClass: ItemReviewRepository,
    },
    {
      provide: ItemReviewService.name,
      useClass: ItemReviewService,
    },
    {
      provide: `${IItemRepositoryInterface}`,
      useClass: ItemRepository,
    },
    {
      provide: ItemService.name,
      useClass: ItemService,
    },
  ],
  exports: [
    {
      provide: `${IBrandsRepositoryInterface}`,
      useClass: BrandsRepository,
    },
    {
      provide: BrandsService.name,
      useClass: BrandsService,
    },
    {
      provide: `${ICategoryRepositoryInterface}`,
      useClass: CategoryRepository,
    },
    {
      provide: CategoryService.name,
      useClass: CategoryService,
    },
    {
      provide: `${IItemReviewRepositoryInterface}`,
      useClass: ItemReviewRepository,
    },
    {
      provide: ItemReviewService.name,
      useClass: ItemReviewService,
    },
    {
      provide: `${IItemRepositoryInterface}`,
      useClass: ItemRepository,
    },
    {
      provide: ItemService.name,
      useClass: ItemService,
    },
  ],
  controllers: [BrandController, CategoryController, ItemReviewController, ItemController],
})
export class ProductModule {}
