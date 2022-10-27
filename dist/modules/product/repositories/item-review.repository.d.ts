import { BaseRepository } from "src/core/repository/base.repository";
import { ItemReview } from "src/entities";
import { Repository } from "typeorm";
import { IItemReviewRepository } from "./interfaces/item-review-repository.interface";
export declare class ItemReviewRepository extends BaseRepository<ItemReview> implements IItemReviewRepository {
    private repo;
    constructor(repo: Repository<ItemReview>);
}
