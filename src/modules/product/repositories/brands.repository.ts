import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BaseRepository } from "src/core/repository/base.repository";
import { Brands } from "src/entities";
import { Repository } from "typeorm";
import { IBrandsRepository } from "./interfaces/brands-repository.interface";

@Injectable()
export class BrandsRepository extends BaseRepository<Brands> implements IBrandsRepository {
  constructor(@InjectRepository(Brands) private repo: Repository<Brands>) {
    super(repo);
  }
}
