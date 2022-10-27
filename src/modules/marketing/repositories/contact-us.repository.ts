import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BaseRepository } from "src/core/repository/base.repository";
import { ContactUs } from "src/entities";
import { Repository } from "typeorm";
import { IContactUsRepository } from "./interfaces/contact-us-repository.interface";
@Injectable()
export class ContactUsRepository extends BaseRepository<ContactUs> implements IContactUsRepository {
  constructor(@InjectRepository(ContactUs) private repo: Repository<ContactUs>) {
    super(repo);
  }
}
