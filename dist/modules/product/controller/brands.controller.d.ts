import { IPagination } from "src/core/pagination";
import { CreateBrandsDto, FilterBrandsDto, UpdateBrandsDto } from "../dto/brands.dto";
import { BrandsService } from "../services/brands.service";
export declare class BrandController {
    private readonly brandsService;
    constructor(brandsService: BrandsService);
    findAll(filter: FilterBrandsDto, page: IPagination): Promise<{
        data: any;
        pageInfo: IPagination;
    }>;
    create(createBrandsDto: CreateBrandsDto): Promise<import("../../../entities").Brands>;
    update(updateBrandsDto: UpdateBrandsDto, id: number): Promise<import("typeorm").UpdateResult>;
    getOneById(id: number): Promise<import("../../../entities").Brands>;
    deleteOneById(id: number): Promise<any>;
}
