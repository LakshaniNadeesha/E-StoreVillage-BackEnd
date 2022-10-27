import { IPagination } from "src/core/pagination";
import { CreateBannerAdsDto, FilterBannerAdsDto, UpdateBannerAdsDto } from "../dto/banner-ads.dto";
import { IBannerAdsRepository } from "../repositories/interfaces/banner-ads-repository.interface";
export declare class BannerAdsService {
    private readonly bannerAdsRepository;
    constructor(bannerAdsRepository: IBannerAdsRepository);
    deleteOneById(id: number): any;
    getOneById(id: number): Promise<import("../../../entities").Banner>;
    update(updatebannerAdsDto: UpdateBannerAdsDto, id: number): Promise<import("typeorm").UpdateResult>;
    create(createbannerAdsDto: CreateBannerAdsDto): Promise<import("../../../entities").Banner>;
    findAll(filter: FilterBannerAdsDto, page: IPagination): Promise<[any, any] | PromiseLike<[any, any]>>;
}
