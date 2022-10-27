import { IPagination } from "src/core/pagination";
import { CreateItemDto, FilterItemDto, UpdateItemDto } from "../dto/item.dto";
import { ItemService } from "../services/item.service";
export declare class ItemController {
    private readonly itemService;
    constructor(itemService: ItemService);
    findAll(filter: FilterItemDto, page: IPagination): Promise<{
        data: any;
        pageInfo: IPagination;
    }>;
    create(createItemDto: CreateItemDto): Promise<import("../../../entities").Item>;
    update(updateItemDto: UpdateItemDto, id: number): Promise<import("typeorm").UpdateResult>;
    getOneById(id: number): Promise<import("../../../entities").Item>;
    deleteOneById(id: number): Promise<any>;
}
