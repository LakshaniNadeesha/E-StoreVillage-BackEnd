import { IBaseRepository } from "src/core/repository/interface/base-repository.interface";
import { NotifySubscribe } from "src/entities";
import { Banner } from "src/entities/marketing/banner-ads.entity";

export const INotifySubscribeRepositoryInterface = "INotifySubscribeRepository";
export type INotifySubscribeRepository = IBaseRepository<NotifySubscribe>;
