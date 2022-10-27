import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BaseRepository } from "src/core/repository/base.repository";
import { Item } from "src/entities";
import { Repository } from "typeorm";
import { IItemRepository } from "./interfaces/item-repository.interface";

@Injectable()
export class ItemRepository extends BaseRepository<Item> implements IItemRepository {
  constructor(@InjectRepository(Item) private repo: Repository<Item>) {
    super(repo);
  }
}
