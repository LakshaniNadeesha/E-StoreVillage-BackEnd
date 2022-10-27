import { BaseEntity } from "src/core/repository/base.entity";
export declare class Order extends BaseEntity {
    Items: string;
    subtotal: number;
    paid: number;
    user: number;
}
