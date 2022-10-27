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
import { CreateBannerAdsDto, FilterBannerAdsDto, UpdateBannerAdsDto } from "../dto/banner-ads.dto";
import { BannerAdsService } from "../services/banner-ads.service";

@Controller("banner-ads")
@ApiTags("Banner Ads")
@UseGuards(JwtAuthGuard)
export class BannerAdsController {
  constructor(@Inject(BannerAdsService.name) private readonly bannerAdsService: BannerAdsService) {}

  @Get()
  async findAll(@Query() filter: FilterBannerAdsDto, @Pager() page: IPagination) {
    const [data, total] = await this.bannerAdsService.findAll(filter, page);

    page.totalCount = total;
    return { data, pageInfo: page };
  }

  @Post()
  async create(@Body() createBannerAdsDto: CreateBannerAdsDto) {
    return this.bannerAdsService.create(createBannerAdsDto);
  }

  @Patch(":id")
  async update(@Param("id", ParseIntPipe) id: number, @Body() updateBannerAdsDto: UpdateBannerAdsDto) {
    return this.bannerAdsService.update(updateBannerAdsDto, id);
  }

  @Get(":id")
  async getOneById(@Param("id", ParseIntPipe) id: number) {
    return this.bannerAdsService.getOneById(id);
  }

  @Delete(":id")
  async deleteOneById(@Param("id", ParseIntPipe) id: number) {
    return this.bannerAdsService.deleteOneById(id);
  }
}
