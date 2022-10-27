import { IPagination } from "src/core/pagination";
import { CategoryService } from "../services/category.service";
import { CreateCategoryDto, FilterCategoryDto, UpdateCategoryDto } from "../dto/category.dto";
export declare class CategoryController {
    private readonly CategoryService;
    constructor(CategoryService: CategoryService);
    findAll(filter: FilterCategoryDto, page: IPagination): Promise<{
        data: any;
        pageInfo: IPagination;
    }>;
    create(createCategoryDto: CreateCategoryDto): Promise<import("../../../entities").Category>;
    update(updateCategoryDto: UpdateCategoryDto, id: number): Promise<import("typeorm").UpdateResult>;
    getOneById(id: number): Promise<import("../../../entities").Category>;
    deleteOneById(id: number): Promise<any>;
}
