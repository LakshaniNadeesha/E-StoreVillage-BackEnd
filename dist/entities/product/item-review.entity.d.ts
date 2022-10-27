import { BaseEntity } from "src/core/repository/base.entity";
import { Item } from "./item.entity";
import { User } from "../user.entity";
export declare class ItemReview extends BaseEntity {
    review: string;
    rate: number;
    Item: Item;
    ItemReviewBy: User;
}
