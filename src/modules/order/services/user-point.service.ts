import { Inject, Injectable } from "@nestjs/common";
import SmsService from "src/core/services/sms.service";
import { Order, User } from "src/entities";
import { UsersRepository } from "src/modules/user/repositories";
import { CreateUserPointDto } from "../dto/user-point.dto";
import {
  IUserPointRepository,
  IUserPointRepositoryInterface,
} from "../repositories/interfaces/user-point-repository.interface";

@Injectable()
export class UserPointService {
  constructor(
    @Inject(`${IUserPointRepositoryInterface}`) private readonly userPointRepository: IUserPointRepository,
    private readonly userRepo: UsersRepository,
    private readonly smsService: SmsService
  ) {}

  async create(createUserPointDto: CreateUserPointDto, user_id: number, levels: number) {
    let is_user_id = true;
    if (is_user_id) {
      for (let i = 0; i < levels; i++) {
        const newPoint = this.userPointRepository.create(createUserPointDto);

        newPoint.point = String(createUserPointDto.point_order * (pointRate[i] / 100));

        const user = new User();
        user.id = user_id;
        newPoint.pointOwner = user;

        const order = new Order();
        order.id = createUserPointDto.orderId;
        

        const getParentUser = await this.userRepo.getOneById(user_id, null, ["ParentUser"]);
        if (getParentUser) {
          user_id = getParentUser?.ParentUser?.id;
        } else {
          is_user_id = false;
        }

        return this.userPointRepository.save(newPoint).then((res) => {
          if (i == 1) {
            this.smsService.sendSMS(getParentUser.phoneNumber, `You eran point ${newPoint}`);
          } else {
            this.smsService.sendSMS(getParentUser.phoneNumber, `You eran point ${newPoint}`);
          }
          return res;
        });
      }
    }
  }
}
