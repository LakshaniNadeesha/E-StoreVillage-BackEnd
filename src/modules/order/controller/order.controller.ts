import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  UseGuards,
} from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CurrentUser } from "src/core/decorators";
import { ITokenUser } from "src/core/interface";
import { IPagination, Pager } from "src/core/pagination";
import { JwtAuthGuard } from "src/modules/auth/guards";
import { CreateOrderDto, FilterOrderDto, UpdateOrderDto } from "../dto/order.dto";
import { OrderService } from "../services/order.service";

@Controller("order")
@ApiTags("Order")
@UseGuards(JwtAuthGuard)
export class OrderController {
  constructor(@Inject(OrderService.name) private readonly orderService: OrderService) {}

  @Get()
  async findAll(@Query() filter: FilterOrderDto, @Pager() page: IPagination) {
    const [data, total] = await this.orderService.findAll(filter, page);

    page.totalCount = total;
    return { data, pageInfo: page };
  }

  @Post()
  async create(@Body() createOrderDto: CreateOrderDto, @CurrentUser() user: ITokenUser) {
    return  await this.orderService.create(createOrderDto, parseInt(user.id));
  }

  @Patch(":id")
  async update(@Param("id", ParseIntPipe) id: number, @Body() updateOrderDto: UpdateOrderDto) {
    return this.orderService.update(id, updateOrderDto);
  }

  @Get(":id")
  async getOneById(@Param("id", ParseIntPipe) id: number) {
    return this.orderService.getOneById(id);
  }

  @Delete(":id")
  async deleteOneById(@Param("id", ParseIntPipe) id: number) {
    return this.orderService.delete(id);
  }

}
