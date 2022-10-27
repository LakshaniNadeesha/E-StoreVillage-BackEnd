import { BaseEntity } from "src/core/repository/base.entity";
import { ItemReview } from "./item-review.entity";
import { User } from "../user.entity";
import { Category } from "./category.entity";
export declare class Item extends BaseEntity {
    name: string;
    description: string;
    image: string;
    point: number;
    price_sale: number;
    price_discount: number;
    discount_rate: number;
    qty: number;
    ItemReview: ItemReview[];
    CreatedBy: User;
    Category: Category;
}
