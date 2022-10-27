import { IPagination } from "src/core/pagination";
import { CreateItemReviewDto, FilterItemReviewDto, UpdateItemReviewDto } from "../dto/item-review.dto";
import { ItemReviewService } from "../services/item-review.service";
export declare class ItemReviewController {
    private readonly itemReviewService;
    constructor(itemReviewService: ItemReviewService);
    findAll(filter: FilterItemReviewDto, page: IPagination): Promise<{
        data: any;
        pageInfo: IPagination;
    }>;
    create(createItemReviewDto: CreateItemReviewDto): Promise<import("../../../entities").ItemReview>;
    update(updateItemReviewDto: UpdateItemReviewDto, id: number): Promise<import("typeorm").UpdateResult>;
    getOneById(id: number): Promise<import("../../../entities").ItemReview>;
    deleteOneById(id: number): Promise<any>;
}
