import { BaseRepository } from "src/core/repository/base.repository";
import { Event } from "src/entities";
import { Repository } from "typeorm";
import { IEventRepository } from "./interfaces/event-repository.interface";
export declare class EventRepository extends BaseRepository<Event> implements IEventRepository {
    private repo;
    constructor(repo: Repository<Event>);
}
