import { BadRequestException, Inject, Injectable } from "@nestjs/common";
import { IPagination } from "src/core/pagination";
import { CreateContactUsDto, FilterContactUsDto, UpdateContactUsDto } from "../dto/contact-us.dto";
import {
  IContactUsRepository,
  IContactUsRepositoryInterface,
} from "../repositories/interfaces/contact-us-repository.interface";

@Injectable()
export class ContactUsService {
  constructor(@Inject(`${IContactUsRepositoryInterface}`) private readonly contactUsRepository: IContactUsRepository) {}

  deleteOneById(id: number) {
    return this.contactUsRepository.remove(id);
  }
  getOneById(id: number) {
    return this.contactUsRepository.getOneById(id);
  }
  update(updatecontactUsDto: UpdateContactUsDto, id: number) {
    return this.contactUsRepository.update(id, updatecontactUsDto);
  }
  async create(createcontactUsDto: CreateContactUsDto) {
    return this.contactUsRepository.save(createcontactUsDto);
  }
  async findAll(filter: FilterContactUsDto, page: IPagination): Promise<[any, any] | PromiseLike<[any, any]>> {
    filter.limit ? delete filter.limit : null;
    filter.page ? delete filter.page : null;

    return await this.contactUsRepository.getAll(filter, null, null, null, page).catch((err) => {
      throw new BadRequestException(err);
    });
  }
}
