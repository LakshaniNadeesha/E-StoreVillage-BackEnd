import { ITokenUser } from "src/core/interface";
import { CreateUserPointDto } from "../dto/user-point.dto";
import { UserPointService } from "../services/user-point.service";
export declare class OrderController {
    private readonly userPointsService;
    constructor(userPointsService: UserPointService);
    create(createUserPointDto: CreateUserPointDto, user: ITokenUser): Promise<import("../../../entities/user-point.entity").UserPoint>;
}
