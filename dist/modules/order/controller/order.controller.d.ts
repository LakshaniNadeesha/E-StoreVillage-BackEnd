import { ITokenUser } from "src/core/interface";
import { IPagination } from "src/core/pagination";
import { CreateOrderDto, FilterOrderDto, UpdateOrderDto } from "../dto/order.dto";
import { OrderService } from "../services/order.service";
export declare class OrderController {
    private readonly orderService;
    constructor(orderService: OrderService);
    findAll(filter: FilterOrderDto, page: IPagination): Promise<{
        data: any;
        pageInfo: IPagination;
    }>;
    create(createOrderDto: CreateOrderDto, user: ITokenUser): Promise<import("../../../entities").Order>;
    update(id: number, updateOrderDto: UpdateOrderDto): Promise<import("../../../entities").Order>;
    getOneById(id: number): Promise<import("../../../entities").Order>;
    deleteOneById(id: number): Promise<any>;
}
