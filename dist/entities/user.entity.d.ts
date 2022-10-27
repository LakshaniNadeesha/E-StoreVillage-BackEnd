import { Complain } from 'src/entities';
import { BaseEntity } from "./../core/repository/base.entity";
import { Item } from "./product/item.entity";
import { ItemReview } from "./product/item-review.entity";
import { UserPoint } from "./user-point.entity";
export declare class User extends BaseEntity {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    status: number;
    numFriends: string;
    socialLink: string;
    bio: string;
    role: string;
    phoneNumber: string;
    address: string;
    isPhoneNumberConfirmed: boolean;
    failed_login_attempt: number;
    Item: Item;
    ItemReview: ItemReview[];
    ParentUser: User;
    userPoint: UserPoint[];
    complain: Complain[];
}
