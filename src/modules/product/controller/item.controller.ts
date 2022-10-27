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
import { IPagination, Pager } from "src/core/pagination";
import { JwtAuthGuard } from "src/modules/auth/guards";
import { CreateItemDto, FilterItemDto, UpdateItemDto } from "../dto/item.dto";
import { ItemService } from "../services/item.service";

@Controller("product")
@ApiTags("Product")

export class ItemController {
  constructor(@Inject(ItemService.name) private readonly itemService: ItemService) {}

  @Get()
  async findAll(@Query() filter: FilterItemDto, @Pager() page: IPagination) {
    const [data, total] = await this.itemService.findAll(filter, page);

    page.totalCount = total;
    return { data, pageInfo: page };
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() createItemDto: CreateItemDto) {
    return this.itemService.create(createItemDto);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(":id")
  async update(@Body() updateItemDto: UpdateItemDto, @Param("id", ParseIntPipe) id: number) {
    return this.itemService.update(updateItemDto, id);
  }

  @UseGuards(JwtAuthGuard)
  @Get(":id")
  async getOneById(@Param("id", ParseIntPipe) id: number) {
    return this.itemService.getOneById(id);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(":id")
  async deleteOneById(@Param("id", ParseIntPipe) id: number) {
    return this.itemService.delete(id);
  }
}
