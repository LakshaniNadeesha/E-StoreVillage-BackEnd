import { BaseRepository } from "src/core/repository/base.repository";
import { ContactUs } from "src/entities";
import { Repository } from "typeorm";
import { IContactUsRepository } from "./interfaces/contact-us-repository.interface";
export declare class ContactUsRepository extends BaseRepository<ContactUs> implements IContactUsRepository {
    private repo;
    constructor(repo: Repository<ContactUs>);
}
