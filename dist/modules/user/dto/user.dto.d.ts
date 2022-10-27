import { UserRole } from "../enum";
export declare class UserDto {
    first_name: string;
    last_name: string;
    email: string;
    phoneNumber?: string;
    role?: UserRole;
    password: string;
    r_password: string;
    numFriends?: string;
    bio?: string;
    socialLink: string;
}
