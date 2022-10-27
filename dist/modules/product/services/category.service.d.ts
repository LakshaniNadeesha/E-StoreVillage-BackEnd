import { IPagination } from "src/core/pagination";
import { Category } from "src/entities";
import { CreateCategoryDto, FilterCategoryDto, UpdateCategoryDto } from "../dto/category.dto";
import { ICategoryRepository } from "../repositories/interfaces/category-repository.interface";
export declare class CategoryService {
    private readonly CategoryRepository;
    constructor(CategoryRepository: ICategoryRepository);
    delete(id: number): any;
    getOneById(id: number): Promise<Category>;
    update(updateCategoryDto: UpdateCategoryDto, id: number): Promise<import("typeorm").UpdateResult>;
    create(createCategoryDto: CreateCategoryDto): Promise<Category>;
    findAll(filter: FilterCategoryDto, page: IPagination): Promise<[any, any] | PromiseLike<[any, any]>>;
}
