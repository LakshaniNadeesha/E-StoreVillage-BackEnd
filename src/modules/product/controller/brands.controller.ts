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
import { CreateBrandsDto, FilterBrandsDto, UpdateBrandsDto } from "../dto/brands.dto";
import { BrandsService } from "../services/brands.service";

@Controller("brand")
@ApiTags("Brand")
@UseGuards(JwtAuthGuard)
export class BrandController {
  constructor(@Inject(BrandsService.name) private readonly brandsService: BrandsService) {}

  @Get()
  async findAll(@Query() filter: FilterBrandsDto, @Pager() page: IPagination) {
    const [data, total] = await this.brandsService.findAll(filter, page);

    page.totalCount = total;
    return { data, pageInfo: page };
  }

  @Post()
  async create(@Body() createBrandsDto: CreateBrandsDto) {
    return this.brandsService.create(createBrandsDto);
  }

  @Patch(":id")
  async update(@Body() updateBrandsDto: UpdateBrandsDto, @Param("id", ParseIntPipe) id: number) {
    return this.brandsService.update(updateBrandsDto, id);
  }

  @Get(":id")
  async getOneById(@Param("id", ParseIntPipe) id: number) {
    return this.brandsService.getOneById(id);
  }

  @Delete(":id")
  async deleteOneById(@Param("id", ParseIntPipe) id: number) {
    return this.brandsService.deleteOneById(id);
  }
}
