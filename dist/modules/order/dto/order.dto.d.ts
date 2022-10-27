import { PageRequest } from "src/core/pagination";
export declare class CreateOrderDto {
    items?: [string];
    subtotal?: number;
    paid?: number;
    user: number;
}
export declare class FilterOrderDto extends PageRequest {
}
export declare class UpdateOrderDto extends CreateOrderDto {
}
