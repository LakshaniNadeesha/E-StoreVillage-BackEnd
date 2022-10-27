import { IPagination } from "src/core/pagination";
import { CreateItemReviewDto, FilterItemReviewDto, UpdateItemReviewDto } from "../dto/item-review.dto";
import { IItemReviewRepository } from "../repositories/interfaces/item-review-repository.interface";
export declare class ItemReviewService {
    private readonly ItemReviewRepository;
    constructor(ItemReviewRepository: IItemReviewRepository);
    delete(id: number): any;
    getOneById(id: number): Promise<import("src/entities").ItemReview>;
    update(updateItemReviewDto: UpdateItemReviewDto, id: number): Promise<import("typeorm").UpdateResult>;
    create(createItemReviewDto: CreateItemReviewDto): Promise<import("src/entities").ItemReview>;
    findAll(filter: FilterItemReviewDto, page: IPagination): Promise<[any, any] | PromiseLike<[any, any]>>;
}
