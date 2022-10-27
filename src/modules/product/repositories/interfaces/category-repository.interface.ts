import { IBaseRepository } from "src/core/repository/interface/base-repository.interface";
import { Category } from "src/entities";

export const ICategoryRepositoryInterface = "ICategoryRepository";
export type ICategoryRepository = IBaseRepository<Category>;
