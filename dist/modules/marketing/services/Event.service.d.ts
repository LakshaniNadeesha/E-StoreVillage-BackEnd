import { IPagination } from "src/core/pagination";
import { CreateEventDto, FilterEventDto, UpdateEventDto } from "../dto/event.dto";
import { IEventRepository } from "../repositories/interfaces/Event-repository.interface";
export declare class EventService {
    private readonly EventRepository;
    constructor(EventRepository: IEventRepository);
    deleteOneById(id: number): any;
    getOneById(id: number): Promise<import("../../../entities").Event>;
    update(updateEventDto: UpdateEventDto, id: number): Promise<import("typeorm").UpdateResult>;
    create(createEventDto: CreateEventDto): Promise<import("../../../entities").Event>;
    findAll(filter: FilterEventDto, page: IPagination): Promise<[any, any] | PromiseLike<[any, any]>>;
}
