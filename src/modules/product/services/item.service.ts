import { BadRequestException, Inject, Injectable } from "@nestjs/common";
import { IPagination } from "src/core/pagination";
import { Brands, Category, User } from "src/entities";
import { CreateItemDto, FilterItemDto, UpdateItemDto } from "../dto/item.dto";
import { IItemRepository, IItemRepositoryInterface } from "../repositories/interfaces/item-repository.interface";

@Injectable()
export class ItemService {
  constructor(@Inject(`${IItemRepositoryInterface}`) private readonly ItemRepository: IItemRepository) { }

  delete(id: number) {
    return this.ItemRepository.remove(id);
  }
  getOneById(id: number) {
    return this.ItemRepository.getOneById(id);
  }
  update(updateItemDto: UpdateItemDto, id: number) {
    const newItem = this.ItemRepository.create(updateItemDto);

    // const brand = new Brands();
    // brand.id = updateItemDto.brand_id;
    // newItem.Brands = brand;

    const category = new Category();
    category.id = updateItemDto.category_id;
    newItem.Category = category;

    return this.ItemRepository.update(id, newItem);
  }
  async create(createItemDto: CreateItemDto) {
    const newItem = this.ItemRepository.create(createItemDto);

    // const brand = new Brands();
    // brand.id = 1;
    // newItem.Brands = brand;

    const category = new Category();
    category.id = createItemDto.category_id;
    newItem.Category = category;

    const user = new User();
    user.id = createItemDto.createdBy;
    newItem.CreatedBy = user;

    return this.ItemRepository.save(newItem);
  }
  async findAll(filter: FilterItemDto, page: IPagination): Promise<[any, any] | PromiseLike<[any, any]>> {
    filter.limit ? delete filter.limit : null;
    filter.page ? delete filter.page : null;

    return await this.ItemRepository.getAll(filter, null, ["Category", "CreatedBy"], null, page).catch((err) => {
      throw new BadRequestException(err);
    });
  }
}
