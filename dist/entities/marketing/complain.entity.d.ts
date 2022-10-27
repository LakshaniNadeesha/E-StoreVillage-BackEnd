import { BaseEntity } from "src/core/repository/base.entity";
import { User } from "../user.entity";
export declare class Complain extends BaseEntity {
    name: string;
    complain: string;
    userComplain: User;
}
