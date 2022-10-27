import { PageRequest } from "src/core/pagination";
export declare class CreateItemDto {
    brand_id?: number;
    category_id?: number;
    name?: string;
    description: string;
    image: string;
    point: number;
    price_sale: number;
    price_discount: number;
    discount_rate: number;
    qty: number;
    createdBy: number;
}
export declare class FilterItemDto extends PageRequest {
}
export declare class UpdateItemDto extends CreateItemDto {
}
