import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BaseRepository } from "src/core/repository/base.repository";
import { Category } from "src/entities";
import { Repository } from "typeorm";
import { ICategoryRepository } from "./interfaces/category-repository.interface";

@Injectable()
export class CategoryRepository extends BaseRepository<Category> implements ICategoryRepository {
  constructor(@InjectRepository(Category) private repo: Repository<Category>) {
    super(repo);
  }
}
