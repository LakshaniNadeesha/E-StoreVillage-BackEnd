import { BaseEntity } from "src/core/repository/base.entity";
import { Item } from "./item.entity";
export declare class Category extends BaseEntity {
    name: string;
    description: string;
    image: string;
    status: number;
    Item: Item;
}
