import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";
import { Item, Order, User } from "src/entities";
import { OrderService } from "./services/order.service";
import { OrderRepository } from "./repositories/order.repository";
import { IOrderRepositoryInterface } from "./repositories/interfaces/order-repository.interface";
import { OrderController } from "./controller/order.controller";

import { UserPoint } from "src/entities/user-point.entity";
import { UserPointRepository } from "./repositories/user-point.repository";
import { IUserPointRepositoryInterface } from "./repositories/interfaces/user-point-repository.interface";
import { UserPointService } from "./services/user-point.service";
import { UsersRepository } from "../user/repositories";
import { IItemRepositoryInterface } from "../product/repositories/interfaces/item-repository.interface";
import { ItemRepository } from "../product/repositories/item.repository";
import SmsService from "src/core/services/sms.service";

@Module({
  imports: [TypeOrmModule.forFeature([Order, UserPoint, User, Item])],
  providers: [
    {
      provide: `${IOrderRepositoryInterface}`,
      useClass: OrderRepository,
    },
    {
      provide: OrderService.name,
      useClass: OrderService,
    },
    {
      provide: `${IUserPointRepositoryInterface}`,
      useClass: UserPointRepository,
    },
    {
      provide: UserPointService.name,
      useClass: UserPointService,
    },
    {
      provide: `${IItemRepositoryInterface}`,
      useClass: ItemRepository,
    },
    UsersRepository,
    SmsService,
  ],
  exports: [],
  controllers: [OrderController],
})
export class OrderModule {}
