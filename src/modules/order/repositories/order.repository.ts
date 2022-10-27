import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BaseRepository } from "src/core/repository/base.repository";
import { Order } from "src/entities";
import { Repository } from "typeorm";
import { IOrderRepository } from "./interfaces/order-repository.interface";

@Injectable()
export class OrderRepository extends BaseRepository<Order> implements IOrderRepository {
  constructor(@InjectRepository(Order) private repo: Repository<Order>) {
    super(repo);
  }
}
