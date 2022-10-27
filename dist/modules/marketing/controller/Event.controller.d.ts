import { IPagination } from "src/core/pagination";
import { CreateEventDto, FilterEventDto, UpdateEventDto } from "../dto/event.dto";
import { EventService } from "../services/Event.service";
export declare class EventController {
    private readonly EventService;
    constructor(EventService: EventService);
    findAll(filter: FilterEventDto, page: IPagination): Promise<{
        data: any;
        pageInfo: IPagination;
    }>;
    create(createEventDto: CreateEventDto): Promise<import("../../../entities").Event>;
    update(id: number, updateEventDto: UpdateEventDto): Promise<import("typeorm").UpdateResult>;
    getOneById(id: number): Promise<import("../../../entities").Event>;
    deleteOneById(id: number): Promise<any>;
}
