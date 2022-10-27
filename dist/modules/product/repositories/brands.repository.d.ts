import { BaseRepository } from "src/core/repository/base.repository";
import { Brands } from "src/entities";
import { Repository } from "typeorm";
import { IBrandsRepository } from "./interfaces/brands-repository.interface";
export declare class BrandsRepository extends BaseRepository<Brands> implements IBrandsRepository {
    private repo;
    constructor(repo: Repository<Brands>);
}
