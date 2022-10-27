import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BaseRepository } from "src/core/repository/base.repository";
import { Complain } from "src/entities";
import { Repository } from "typeorm";
import { IComplainRepository } from "./interfaces/complain-repository.interface";

@Injectable()
export class ComplainRepository extends BaseRepository<Complain> implements IComplainRepository {
  constructor(@InjectRepository(Complain) private repo: Repository<Complain>) {
    super(repo);
  }
}
