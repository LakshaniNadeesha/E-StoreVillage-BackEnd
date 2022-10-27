import { BadRequestException, Inject, Injectable } from "@nestjs/common";
import { IPagination } from "src/core/pagination";
import { Item, Order, User } from "src/entities";
import {
  IItemRepository,
  IItemRepositoryInterface,
} from "src/modules/product/repositories/interfaces/item-repository.interface";
import { CreateOrderDto, FilterOrderDto, UpdateOrderDto } from "../dto/order.dto";
import { CreateUserPointDto } from "../dto/user-point.dto";

import { IOrderRepository, IOrderRepositoryInterface } from "../repositories/interfaces/order-repository.interface";
import { UserPointService } from "./user-point.service";
import fs from "fs";
import PDFDocument from "pdfkit";

@Injectable()
export class OrderService {
  constructor(
    @Inject(`${IOrderRepositoryInterface}`) private readonly OrderRepository: IOrderRepository,
    @Inject(UserPointService.name) private readonly userPointService: UserPointService,
    @Inject(`${IItemRepositoryInterface}`) private readonly itemRepository: IItemRepository
  ) { }

  delete(id: number) {
    return this.OrderRepository.remove(id);
  }
  getOneById(id: number) {
    return this.OrderRepository.getOneById(id);
  }
  async update(id: number, updateOrderDto: UpdateOrderDto) {
    const newOder = new Order();



    updateOrderDto.items.forEach(async (key) => {
      const newItem = new Item();
      newItem.id = updateOrderDto.items[key];
    });

    const orderSaved = await this.OrderRepository.save(newOder);

    return this.OrderRepository.getOneById(orderSaved.id, null,);
  }
  async create(createOrderDto: CreateOrderDto, user: number) {     
    return await this.OrderRepository.save(createOrderDto);


  }
  async findAll(filter: FilterOrderDto, page: IPagination): Promise<[any, any] | PromiseLike<[any, any]>> {
    filter.limit ? delete filter.limit : null;
    filter.page ? delete filter.page : null;

    return await this.OrderRepository.getAll(filter, null, null, null, page).catch((err) => {
      throw new BadRequestException(err);
    });
  }


}
