import { BadRequestException, Inject, Injectable } from "@nestjs/common";
import { IPagination } from "src/core/pagination";
import {
  CreateNotifySubscribeDto,
  FilterNotifySubscribeDto,
  UpdateNotifySubscribeDto,
} from "../dto/notify-subscribe.dto";
import {
  INotifySubscribeRepository,
  INotifySubscribeRepositoryInterface,
} from "../repositories/interfaces/notify-subscribe-repository.interface";
@Injectable()
export class NotifySubscribeService {
  constructor(
    @Inject(`${INotifySubscribeRepositoryInterface}`)
    private readonly notifySubscribeRepository: INotifySubscribeRepository
  ) {}

  deleteOneById(id: number) {
    return this.notifySubscribeRepository.remove(id);
  }
  getOneById(id: number) {
    return this.notifySubscribeRepository.getOneById(id);
  }
  update(updatenotifySubscribeDto: UpdateNotifySubscribeDto, id: number) {
    return this.notifySubscribeRepository.update(id, updatenotifySubscribeDto);
  }
  async create(createnotifySubscribeDto: CreateNotifySubscribeDto) {
    return this.notifySubscribeRepository.save(createnotifySubscribeDto);
  }
  async findAll(filter: FilterNotifySubscribeDto, page: IPagination): Promise<[any, any] | PromiseLike<[any, any]>> {
    filter.limit ? delete filter.limit : null;
    filter.page ? delete filter.page : null;

    return await this.notifySubscribeRepository.getAll(filter, null, null, null, page).catch((err) => {
      throw new BadRequestException(err);
    });
  }
}
