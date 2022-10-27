import { IBaseRepository } from "src/core/repository/interface/base-repository.interface";
import { Order } from "src/entities";

export const IOrderRepositoryInterface = "IOrderRepository";
export type IOrderRepository = IBaseRepository<Order>;
