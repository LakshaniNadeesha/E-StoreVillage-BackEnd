import { IBaseRepository } from "src/core/repository/interface/base-repository.interface";
import { Brands } from "src/entities";

export const IBrandsRepositoryInterface = "IBrandsRepository";
export type IBrandsRepository = IBaseRepository<Brands>;
