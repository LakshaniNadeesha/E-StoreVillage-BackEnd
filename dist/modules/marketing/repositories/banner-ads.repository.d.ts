import { BaseRepository } from "src/core/repository/base.repository";
import { Banner } from "src/entities";
import { Repository } from "typeorm";
import { IBannerAdsRepository } from "./interfaces/banner-ads-repository.interface";
export declare class BannerAdsRepository extends BaseRepository<Banner> implements IBannerAdsRepository {
    private repo;
    constructor(repo: Repository<Banner>);
}
