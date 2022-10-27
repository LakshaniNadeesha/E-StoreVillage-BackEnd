import { BadRequestException, Inject, Injectable } from "@nestjs/common";
import { IPagination } from "src/core/pagination";
import { Item } from "src/entities";
import { CreateItemReviewDto, FilterItemReviewDto, UpdateItemReviewDto } from "../dto/item-review.dto";
import {
  IItemReviewRepository,
  IItemReviewRepositoryInterface,
} from "../repositories/interfaces/item-review-repository.interface";
@Injectable()
export class ItemReviewService {
  constructor(
    @Inject(`${IItemReviewRepositoryInterface}`) private readonly ItemReviewRepository: IItemReviewRepository
  ) {}

  delete(id: number) {
    return this.ItemReviewRepository.remove(id);
  }
  getOneById(id: number) {
    return this.ItemReviewRepository.getOneById(id);
  }
  update(updateItemReviewDto: UpdateItemReviewDto, id: number) {
    return this.ItemReviewRepository.update(id, updateItemReviewDto);
  }
  async create(createItemReviewDto: CreateItemReviewDto) {
    const newReview = this.ItemReviewRepository.create(createItemReviewDto);
    const item = new Item();
    item.id = createItemReviewDto.item_id;

    newReview.Item = item;
    return this.ItemReviewRepository.create(newReview);
  }
  async findAll(filter: FilterItemReviewDto, page: IPagination): Promise<[any, any] | PromiseLike<[any, any]>> {
    filter.limit ? delete filter.limit : null;
    filter.page ? delete filter.page : null;

    return await this.ItemReviewRepository.getAll(filter, null, null, null, page).catch((err) => {
      throw new BadRequestException(err);
    });
  }
}
