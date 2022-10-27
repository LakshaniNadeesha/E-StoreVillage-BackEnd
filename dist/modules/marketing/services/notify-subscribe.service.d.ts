import { IPagination } from "src/core/pagination";
import { CreateNotifySubscribeDto, FilterNotifySubscribeDto, UpdateNotifySubscribeDto } from "../dto/notify-subscribe.dto";
import { INotifySubscribeRepository } from "../repositories/interfaces/notify-subscribe-repository.interface";
export declare class NotifySubscribeService {
    private readonly notifySubscribeRepository;
    constructor(notifySubscribeRepository: INotifySubscribeRepository);
    deleteOneById(id: number): any;
    getOneById(id: number): Promise<import("../../../entities").NotifySubscribe>;
    update(updatenotifySubscribeDto: UpdateNotifySubscribeDto, id: number): Promise<import("typeorm").UpdateResult>;
    create(createnotifySubscribeDto: CreateNotifySubscribeDto): Promise<import("../../../entities").NotifySubscribe>;
    findAll(filter: FilterNotifySubscribeDto, page: IPagination): Promise<[any, any] | PromiseLike<[any, any]>>;
}
