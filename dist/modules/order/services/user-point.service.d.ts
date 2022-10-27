import SmsService from "src/core/services/sms.service";
import { UsersRepository } from "src/modules/user/repositories";
import { CreateUserPointDto } from "../dto/user-point.dto";
import { IUserPointRepository } from "../repositories/interfaces/user-point-repository.interface";
export declare class UserPointService {
    private readonly userPointRepository;
    private readonly userRepo;
    private readonly smsService;
    constructor(userPointRepository: IUserPointRepository, userRepo: UsersRepository, smsService: SmsService);
    create(createUserPointDto: CreateUserPointDto, user_id: number, levels: number): Promise<import("../../../entities/user-point.entity").UserPoint>;
}
