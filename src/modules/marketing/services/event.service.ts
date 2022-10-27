import { BadRequestException, Inject, Injectable } from "@nestjs/common";
import { IPagination } from "src/core/pagination";
import { CreateEventDto, FilterEventDto, UpdateEventDto } from "../dto/event.dto";
import { IEventRepository, IEventRepositoryInterface } from "../repositories/interfaces/Event-repository.interface";
@Injectable()
export class EventService {
  constructor(@Inject(`${IEventRepositoryInterface}`) private readonly EventRepository: IEventRepository) {}

  deleteOneById(id: number) {
    return this.EventRepository.remove(id);
  }
  getOneById(id: number) {
    return this.EventRepository.getOneById(id);
  }
  update(updateEventDto: UpdateEventDto, id: number) {
    return this.EventRepository.update(id, updateEventDto);
  }
  async create(createEventDto: CreateEventDto) {
    return this.EventRepository.save(createEventDto);
  }
  async findAll(filter: FilterEventDto, page: IPagination): Promise<[any, any] | PromiseLike<[any, any]>> {
    filter.limit ? delete filter.limit : null;
    filter.page ? delete filter.page : null;

    return await this.EventRepository.getAll(filter, null, null, null, page).catch((err) => {
      throw new BadRequestException(err);
    });
  }
}
