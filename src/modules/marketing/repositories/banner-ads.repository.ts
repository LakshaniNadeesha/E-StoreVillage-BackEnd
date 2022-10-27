import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BaseRepository } from "src/core/repository/base.repository";
import { Banner } from "src/entities";
import { Repository } from "typeorm";
import { IBannerAdsRepository } from "./interfaces/banner-ads-repository.interface";

@Injectable()
export class BannerAdsRepository extends BaseRepository<Banner> implements IBannerAdsRepository {
  constructor(@InjectRepository(Banner) private repo: Repository<Banner>) {
    super(repo);
  }
}
