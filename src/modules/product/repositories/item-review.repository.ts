import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BaseRepository } from "src/core/repository/base.repository";
import { ItemReview } from "src/entities";
import { Repository } from "typeorm";
import { IItemReviewRepository } from "./interfaces/item-review-repository.interface";

@Injectable()
export class ItemReviewRepository extends BaseRepository<ItemReview> implements IItemReviewRepository {
  constructor(@InjectRepository(ItemReview) private repo: Repository<ItemReview>) {
    super(repo);
  }
}
