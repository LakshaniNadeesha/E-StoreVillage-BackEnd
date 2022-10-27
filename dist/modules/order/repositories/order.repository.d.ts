import { BaseRepository } from "src/core/repository/base.repository";
import { Order } from "src/entities";
import { Repository } from "typeorm";
import { IOrderRepository } from "./interfaces/order-repository.interface";
export declare class OrderRepository extends BaseRepository<Order> implements IOrderRepository {
    private repo;
    constructor(repo: Repository<Order>);
}
