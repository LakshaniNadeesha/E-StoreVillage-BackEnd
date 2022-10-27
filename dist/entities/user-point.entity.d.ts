import { BaseEntity } from "./../core/repository/base.entity";
import { User } from "./user.entity";
export declare class UserPoint extends BaseEntity {
    point_type: string;
    point: string;
    pointOwner: User;
}
