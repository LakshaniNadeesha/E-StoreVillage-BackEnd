import { IBaseRepository } from "src/core/repository/interface/base-repository.interface";
import { ContactUs } from "src/entities";
import { Banner } from "src/entities/marketing/banner-ads.entity";

export const IContactUsRepositoryInterface = "IContactUsRepository";
export type IContactUsRepository = IBaseRepository<ContactUs>;
