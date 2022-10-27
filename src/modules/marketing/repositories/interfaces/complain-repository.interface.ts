import { IBaseRepository } from "src/core/repository/interface/base-repository.interface";
import { Complain } from "src/entities";
import { Banner } from "src/entities/marketing/banner-ads.entity";

export const IComplainRepositoryInterface = "IComplainRepository";
export type IComplainRepository = IBaseRepository<Complain>;
