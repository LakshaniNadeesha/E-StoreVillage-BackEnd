import { BadRequestException, Inject, Injectable } from "@nestjs/common";
import { IPagination } from "src/core/pagination";
import { CreateBrandsDto, FilterBrandsDto, UpdateBrandsDto } from "../dto/brands.dto";
import { IBrandsRepository, IBrandsRepositoryInterface } from "../repositories/interfaces/brands-repository.interface";

@Injectable()
export class BrandsService {
  constructor(@Inject(`${IBrandsRepositoryInterface}`) private readonly brandsRepository: IBrandsRepository) {}

  deleteOneById(id: number) {
    return this.brandsRepository.remove(id);
  }
  getOneById(id: number) {
    return this.brandsRepository.getOneById(id);
  }
  update(updateBrandsDto: UpdateBrandsDto, id: number) {
    return this.brandsRepository.update(id, updateBrandsDto);
  }
  async create(createBrandsDto: CreateBrandsDto) {
    return this.brandsRepository.save(createBrandsDto);
  }
  async findAll(filter: FilterBrandsDto, page: IPagination): Promise<[any, any] | PromiseLike<[any, any]>> {
    filter.limit ? delete filter.limit : null;
    filter.page ? delete filter.page : null;

    return await this.brandsRepository.getAll(filter, null, null, null, page).catch((err) => {
      throw new BadRequestException(err);
    });
  }
}
