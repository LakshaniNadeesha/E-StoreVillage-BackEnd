import { IPagination } from "src/core/pagination";
import { Order } from "src/entities";
import { IItemRepository } from "src/modules/product/repositories/interfaces/item-repository.interface";
import { CreateOrderDto, FilterOrderDto, UpdateOrderDto } from "../dto/order.dto";
import { IOrderRepository } from "../repositories/interfaces/order-repository.interface";
import { UserPointService } from "./user-point.service";
export declare class OrderService {
    private readonly OrderRepository;
    private readonly userPointService;
    private readonly itemRepository;
    constructor(OrderRepository: IOrderRepository, userPointService: UserPointService, itemRepository: IItemRepository);
    delete(id: number): any;
    getOneById(id: number): Promise<Order>;
    update(id: number, updateOrderDto: UpdateOrderDto): Promise<Order>;
    create(createOrderDto: CreateOrderDto, user: number): Promise<Order>;
    findAll(filter: FilterOrderDto, page: IPagination): Promise<[any, any] | PromiseLike<[any, any]>>;
}
