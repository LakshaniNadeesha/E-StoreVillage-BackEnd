import { BaseRepository } from "src/core/repository/base.repository";
import { NotifySubscribe } from "src/entities";
import { Repository } from "typeorm";
import { INotifySubscribeRepository } from "./interfaces/notify-subscribe-repository.interface";
export declare class NotifySubscribeRepository extends BaseRepository<NotifySubscribe> implements INotifySubscribeRepository {
    private repo;
    constructor(repo: Repository<NotifySubscribe>);
}
