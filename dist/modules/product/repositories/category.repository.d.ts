import { BaseRepository } from "src/core/repository/base.repository";
import { Category } from "src/entities";
import { Repository } from "typeorm";
import { ICategoryRepository } from "./interfaces/category-repository.interface";
export declare class CategoryRepository extends BaseRepository<Category> implements ICategoryRepository {
    private repo;
    constructor(repo: Repository<Category>);
}
