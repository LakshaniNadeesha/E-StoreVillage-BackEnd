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
import { CategoryService } from "../services/category.service";
import { CreateCategoryDto, FilterCategoryDto, UpdateCategoryDto } from "../dto/category.dto";

@Controller("category")
@ApiTags("Category")
export class CategoryController {
  constructor(@Inject(CategoryService.name) private readonly CategoryService: CategoryService) {}

  @Get()
  async findAll(@Query() filter: FilterCategoryDto, @Pager() page: IPagination) {
    const [data, total] = await this.CategoryService.findAll(filter, page);

    page.totalCount = total;
    return { data, pageInfo: page };
  }

  
  @Post()
  @UseGuards(JwtAuthGuard)
  async create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.CategoryService.create(createCategoryDto);
  }

  @Patch(":id")
  @UseGuards(JwtAuthGuard)
  async update(@Body() updateCategoryDto: UpdateCategoryDto, @Param("id", ParseIntPipe) id: number) {
    return this.CategoryService.update(updateCategoryDto, id);
  }

  @Get(":id")
  async getOneById(@Param("id", ParseIntPipe) id: number) {
    return this.CategoryService.getOneById(id);
  }

  @Delete(":id")
  async deleteOneById(@Param("id", ParseIntPipe) id: number) {
    return this.CategoryService.delete(id);
  }
}
