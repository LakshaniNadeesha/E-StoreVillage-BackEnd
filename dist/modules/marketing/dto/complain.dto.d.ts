import { PageRequest } from "src/core/pagination";
export declare class CreateComplainDto {
    user: number;
    name?: string;
    complain: string;
}
export declare class CreateComplainReplyDto {
    user?: string;
    complain_reply: string;
}
export declare class FilterComplainDto extends PageRequest {
}
export declare class UpdateComplainDto {
}
