import { IPagination } from "src/core/pagination";
import { CreateContactUsDto, FilterContactUsDto, UpdateContactUsDto } from "../dto/contact-us.dto";
import { IContactUsRepository } from "../repositories/interfaces/contact-us-repository.interface";
export declare class ContactUsService {
    private readonly contactUsRepository;
    constructor(contactUsRepository: IContactUsRepository);
    deleteOneById(id: number): any;
    getOneById(id: number): Promise<import("../../../entities").ContactUs>;
    update(updatecontactUsDto: UpdateContactUsDto, id: number): Promise<import("typeorm").UpdateResult>;
    create(createcontactUsDto: CreateContactUsDto): Promise<import("../../../entities").ContactUs>;
    findAll(filter: FilterContactUsDto, page: IPagination): Promise<[any, any] | PromiseLike<[any, any]>>;
}
