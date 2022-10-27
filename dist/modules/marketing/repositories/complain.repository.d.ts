import { BaseRepository } from "src/core/repository/base.repository";
import { Complain } from "src/entities";
import { Repository } from "typeorm";
import { IComplainRepository } from "./interfaces/complain-repository.interface";
export declare class ComplainRepository extends BaseRepository<Complain> implements IComplainRepository {
    private repo;
    constructor(repo: Repository<Complain>);
}
