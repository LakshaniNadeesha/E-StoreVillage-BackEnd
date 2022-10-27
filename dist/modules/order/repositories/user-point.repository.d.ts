import { BaseRepository } from "src/core/repository/base.repository";
import { UserPoint } from "src/entities/user-point.entity";
import { Repository } from "typeorm";
import { IUserPointRepository } from "./interfaces/user-point-repository.interface";
export declare class UserPointRepository extends BaseRepository<UserPoint> implements IUserPointRepository {
    private repo;
    constructor(repo: Repository<UserPoint>);
}
