import { PageRequest } from "src/core/pagination";
export declare class CreateCategoryDto {
    name?: string;
    description?: string;
    image: string;
    status: number;
}
export declare class FilterCategoryDto extends PageRequest {
}
export declare class UpdateCategoryDto {
}
