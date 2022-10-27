import { IBaseRepository } from "src/core/repository/interface/base-repository.interface";
import { Event } from "src/entities";
import { Banner } from "src/entities/marketing/banner-ads.entity";

export const IEventRepositoryInterface = "IEventRepository";
export type IEventRepository = IBaseRepository<Event>;
