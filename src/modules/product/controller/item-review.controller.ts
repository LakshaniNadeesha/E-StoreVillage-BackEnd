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
import { CreateItemReviewDto, FilterItemReviewDto, UpdateItemReviewDto } from "../dto/item-review.dto";
import { ItemReviewService } from "../services/item-review.service";

@Controller("item-review")
@ApiTags("Item Review")
@UseGuards(JwtAuthGuard)
export class ItemReviewController {
  constructor(@Inject(ItemReviewService.name) private readonly itemReviewService: ItemReviewService) {}

  @Get()
  async findAll(@Query() filter: FilterItemReviewDto, @Pager() page: IPagination) {
    const [data, total] = await this.itemReviewService.findAll(filter, page);

    page.totalCount = total;
    return { data, pageInfo: page };
  }

  @Post()
  async create(@Body() createItemReviewDto: CreateItemReviewDto) {
    return this.itemReviewService.create(createItemReviewDto);
  }

  @Patch(":id")
  async update(@Body() updateItemReviewDto: UpdateItemReviewDto, @Param("id", ParseIntPipe) id: number) {
    return this.itemReviewService.update(updateItemReviewDto, id);
  }

  @Get(":id")
  async getOneById(@Param("id", ParseIntPipe) id: number) {
    return this.itemReviewService.getOneById(id);
  }

  @Delete(":id")
  async deleteOneById(@Param("id", ParseIntPipe) id: number) {
    return this.itemReviewService.delete(id);
  }
}
