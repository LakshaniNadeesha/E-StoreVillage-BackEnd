import { IBaseRepository } from "src/core/repository/interface/base-repository.interface";
import { Banner } from "src/entities/marketing/banner-ads.entity";

export const IBannerAdsRepositoryInterface = "IBannerAdsRepository";
export type IBannerAdsRepository = IBaseRepository<Banner>;
