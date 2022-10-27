import { IPagination } from "src/core/pagination";
import { CreateBannerAdsDto, FilterBannerAdsDto, UpdateBannerAdsDto } from "../dto/banner-ads.dto";
import { BannerAdsService } from "../services/banner-ads.service";
export declare class BannerAdsController {
    private readonly bannerAdsService;
    constructor(bannerAdsService: BannerAdsService);
    findAll(filter: FilterBannerAdsDto, page: IPagination): Promise<{
        data: any;
        pageInfo: IPagination;
    }>;
    create(createBannerAdsDto: CreateBannerAdsDto): Promise<import("../../../entities").Banner>;
    update(id: number, updateBannerAdsDto: UpdateBannerAdsDto): Promise<import("typeorm").UpdateResult>;
    getOneById(id: number): Promise<import("../../../entities").Banner>;
    deleteOneById(id: number): Promise<any>;
}
