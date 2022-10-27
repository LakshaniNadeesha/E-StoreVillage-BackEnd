import { BadRequestException, Inject, Injectable } from "@nestjs/common";
import { IPagination } from "src/core/pagination";
import { CreateBannerAdsDto, FilterBannerAdsDto, UpdateBannerAdsDto } from "../dto/banner-ads.dto";
import {
  IBannerAdsRepository,
  IBannerAdsRepositoryInterface,
} from "../repositories/interfaces/banner-ads-repository.interface";
@Injectable()
export class BannerAdsService {
  constructor(@Inject(`${IBannerAdsRepositoryInterface}`) private readonly bannerAdsRepository: IBannerAdsRepository) {}

  deleteOneById(id: number) {
    return this.bannerAdsRepository.remove(id);
  }
  getOneById(id: number) {
    return this.bannerAdsRepository.getOneById(id);
  }
  update(updatebannerAdsDto: UpdateBannerAdsDto, id: number) {
    return this.bannerAdsRepository.update(id, updatebannerAdsDto);
  }
  async create(createbannerAdsDto: CreateBannerAdsDto) {
    return this.bannerAdsRepository.save(createbannerAdsDto);
  }
  async findAll(filter: FilterBannerAdsDto, page: IPagination): Promise<[any, any] | PromiseLike<[any, any]>> {
    filter.limit ? delete filter.limit : null;
    filter.page ? delete filter.page : null;

    return await this.bannerAdsRepository.getAll(filter, null, null, null, page).catch((err) => {
      throw new BadRequestException(err);
    });
  }
}
