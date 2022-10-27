import { IBaseRepository } from "src/core/repository/interface/base-repository.interface";
import { UserPoint } from "src/entities/user-point.entity";

export const IUserPointRepositoryInterface = "IUserPointRepository";
export type IUserPointRepository = IBaseRepository<UserPoint>;
