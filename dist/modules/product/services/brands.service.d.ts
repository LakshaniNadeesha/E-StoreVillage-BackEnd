import { IPagination } from "src/core/pagination";
import { CreateBrandsDto, FilterBrandsDto, UpdateBrandsDto } from "../dto/brands.dto";
import { IBrandsRepository } from "../repositories/interfaces/brands-repository.interface";
export declare class BrandsService {
    private readonly brandsRepository;
    constructor(brandsRepository: IBrandsRepository);
    deleteOneById(id: number): any;
    getOneById(id: number): Promise<import("../../../entities").Brands>;
    update(updateBrandsDto: UpdateBrandsDto, id: number): Promise<import("typeorm").UpdateResult>;
    create(createBrandsDto: CreateBrandsDto): Promise<import("../../../entities").Brands>;
    findAll(filter: FilterBrandsDto, page: IPagination): Promise<[any, any] | PromiseLike<[any, any]>>;
}
