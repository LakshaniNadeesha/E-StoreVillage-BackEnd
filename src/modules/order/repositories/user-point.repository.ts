import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BaseRepository } from "src/core/repository/base.repository";
import { UserPoint } from "src/entities/user-point.entity";
import { Repository } from "typeorm";
import { IUserPointRepository } from "./interfaces/user-point-repository.interface";

@Injectable()
export class UserPointRepository extends BaseRepository<UserPoint> implements IUserPointRepository {
  constructor(@InjectRepository(UserPoint) private repo: Repository<UserPoint>) {
    super(repo);
  }
}
