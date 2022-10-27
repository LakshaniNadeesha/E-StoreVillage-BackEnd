import { IPagination } from "src/core/pagination";
import { CreateItemDto, FilterItemDto, UpdateItemDto } from "../dto/item.dto";
import { IItemRepository } from "../repositories/interfaces/item-repository.interface";
export declare class ItemService {
    private readonly ItemRepository;
    constructor(ItemRepository: IItemRepository);
    delete(id: number): any;
    getOneById(id: number): Promise<import("src/entities").Item>;
    update(updateItemDto: UpdateItemDto, id: number): Promise<import("typeorm").UpdateResult>;
    create(createItemDto: CreateItemDto): Promise<import("src/entities").Item>;
    findAll(filter: FilterItemDto, page: IPagination): Promise<[any, any] | PromiseLike<[any, any]>>;
}
