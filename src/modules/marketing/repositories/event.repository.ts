import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BaseRepository } from "src/core/repository/base.repository";
import { Event } from "src/entities";
import { Repository } from "typeorm";
import { IEventRepository } from "./interfaces/event-repository.interface";

@Injectable()
export class EventRepository extends BaseRepository<Event> implements IEventRepository {
  constructor(@InjectRepository(Event) private repo: Repository<Event>) {
    super(repo);
  }
}
