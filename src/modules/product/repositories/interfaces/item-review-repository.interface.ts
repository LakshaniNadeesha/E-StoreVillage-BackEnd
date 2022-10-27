import { IBaseRepository } from "src/core/repository/interface/base-repository.interface";
import { ItemReview } from "src/entities";

export const IItemReviewRepositoryInterface = "IItemReviewRepository";
export type IItemReviewRepository = IBaseRepository<ItemReview>;
