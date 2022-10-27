import { IPagination } from "src/core/pagination";
import { Complain } from "src/entities";
import { MailerService } from "@nestjs-modules/mailer";
import { CreateComplainDto, CreateComplainReplyDto, FilterComplainDto, UpdateComplainDto } from "../dto/complain.dto";
import { IComplainRepository } from "../repositories/interfaces/complain-repository.interface";
export declare class ComplainService {
    private readonly complainRepository;
    private readonly mailService;
    constructor(complainRepository: IComplainRepository, mailService: MailerService);
    createReply(createComplainDto: CreateComplainReplyDto): Promise<boolean>;
    deleteOneById(id: number): any;
    getOneById(id: number): Promise<Complain>;
    update(updatecomplainDto: UpdateComplainDto, id: number): Promise<import("typeorm").UpdateResult>;
    create(createcomplainDto: CreateComplainDto): Promise<Complain>;
    findAll(filter: FilterComplainDto, page: IPagination): Promise<[any, any] | PromiseLike<[any, any]>>;
}
