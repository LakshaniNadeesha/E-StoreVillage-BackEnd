import { IPagination } from "src/core/pagination";
import { CreateComplainDto, CreateComplainReplyDto, FilterComplainDto, UpdateComplainDto } from "../dto/complain.dto";
import { ComplainService } from "../services/complain.service";
export declare class ComplainController {
    private readonly complainService;
    constructor(complainService: ComplainService);
    findAll(filter: FilterComplainDto, page: IPagination): Promise<{
        data: any;
        pageInfo: IPagination;
    }>;
    create(createComplainDto: CreateComplainDto): Promise<import("../../../entities").Complain>;
    createReply(createComplainDto: CreateComplainReplyDto): Promise<boolean>;
    update(id: number, updateComplainDto: UpdateComplainDto): Promise<import("typeorm").UpdateResult>;
    getOneById(id: number): Promise<import("../../../entities").Complain>;
    deleteOneById(id: number): Promise<any>;
}
