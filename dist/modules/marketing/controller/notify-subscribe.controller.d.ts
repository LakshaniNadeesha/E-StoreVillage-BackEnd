import { IPagination } from "src/core/pagination";
import { CreateNotifySubscribeDto, FilterNotifySubscribeDto, UpdateNotifySubscribeDto } from "../dto/notify-subscribe.dto";
import { NotifySubscribeService } from "../services/notify-subscribe.service";
export declare class NotifySubscribeController {
    private readonly notifySubscribeService;
    constructor(notifySubscribeService: NotifySubscribeService);
    findAll(filter: FilterNotifySubscribeDto, page: IPagination): Promise<{
        data: any;
        pageInfo: IPagination;
    }>;
    create(createNotifySubscribeDto: CreateNotifySubscribeDto): Promise<import("../../../entities").NotifySubscribe>;
    update(id: number, updateNotifySubscribeDto: UpdateNotifySubscribeDto): Promise<import("typeorm").UpdateResult>;
    getOneById(id: number): Promise<import("../../../entities").NotifySubscribe>;
    deleteOneById(id: number): Promise<any>;
}
