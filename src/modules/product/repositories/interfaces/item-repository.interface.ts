import { IBaseRepository } from "src/core/repository/interface/base-repository.interface";
import { Item } from "src/entities";

export const IItemRepositoryInterface = "IItemRepository";
export type IItemRepository = IBaseRepository<Item>;
