import { BadRequestException, Inject, Injectable } from "@nestjs/common";
import { IPagination } from "src/core/pagination";
import { Category } from "src/entities";
import { CreateCategoryDto, FilterCategoryDto, UpdateCategoryDto } from "../dto/category.dto";
import {
  ICategoryRepository,
  ICategoryRepositoryInterface,
} from "../repositories/interfaces/category-repository.interface";

@Injectable()
export class CategoryService {
  constructor(@Inject(`${ICategoryRepositoryInterface}`) private readonly CategoryRepository: ICategoryRepository) { }

  delete(id: number) {
    return this.CategoryRepository.remove(id);
  }
  getOneById(id: number) {
    return this.CategoryRepository.getOneById(id);
  }
  update(updateCategoryDto: UpdateCategoryDto, id: number) {
    return this.CategoryRepository.update(id, updateCategoryDto);
  }
  async create(createCategoryDto: CreateCategoryDto) {
    const newCat = this.CategoryRepository.create(createCategoryDto);

    return this.CategoryRepository.save(newCat);
  }
  async findAll(filter: FilterCategoryDto, page: IPagination): Promise<[any, any] | PromiseLike<[any, any]>> {
    filter.limit ? delete filter.limit : null;
    filter.page ? delete filter.page : null;

    return await this.CategoryRepository.getAll(filter, null, ['Item'], null, null).catch((err) => {
      throw new BadRequestException(err);
    });
  }
}
