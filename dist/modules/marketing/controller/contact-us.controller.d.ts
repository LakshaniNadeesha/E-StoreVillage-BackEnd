import { IPagination } from "src/core/pagination";
import { CreateContactUsDto, FilterContactUsDto, UpdateContactUsDto } from "../dto/contact-us.dto";
import { ContactUsService } from "../services/contact-us.service";
export declare class ContactUsController {
    private readonly contactUsService;
    constructor(contactUsService: ContactUsService);
    findAll(filter: FilterContactUsDto, page: IPagination): Promise<{
        data: any;
        pageInfo: IPagination;
    }>;
    create(createContactUsDto: CreateContactUsDto): Promise<import("../../../entities").ContactUs>;
    update(id: number, updateContactUsDto: UpdateContactUsDto): Promise<import("typeorm").UpdateResult>;
    getOneById(id: number): Promise<import("../../../entities").ContactUs>;
    deleteOneById(id: number): Promise<any>;
}
