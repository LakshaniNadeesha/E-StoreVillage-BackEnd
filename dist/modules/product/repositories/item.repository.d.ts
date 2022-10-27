import { BaseRepository } from "src/core/repository/base.repository";
import { Item } from "src/entities";
import { Repository } from "typeorm";
import { IItemRepository } from "./interfaces/item-repository.interface";
export declare class ItemRepository extends BaseRepository<Item> implements IItemRepository {
    private repo;
    constructor(repo: Repository<Item>);
}
