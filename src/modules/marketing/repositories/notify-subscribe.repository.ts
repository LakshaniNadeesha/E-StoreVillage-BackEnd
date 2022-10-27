import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BaseRepository } from "src/core/repository/base.repository";
import { NotifySubscribe } from "src/entities";
import { Repository } from "typeorm";
import { INotifySubscribeRepository } from "./interfaces/notify-subscribe-repository.interface";

@Injectable()
export class NotifySubscribeRepository extends BaseRepository<NotifySubscribe> implements INotifySubscribeRepository {
  constructor(@InjectRepository(NotifySubscribe) private repo: Repository<NotifySubscribe>) {
    super(repo);
  }
}
