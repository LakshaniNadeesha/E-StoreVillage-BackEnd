import { SortOrder } from "../enums/sort-order.enum";
export declare class PageRequest {
    page?: number;
    limit?: number;
    skip?: number;
    sort?: string;
    sortOrder?: SortOrder;
}
