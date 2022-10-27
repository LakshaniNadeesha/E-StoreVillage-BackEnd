export declare class UpdateUserDto {
    first_name: string;
    last_name: string;
    phoneNumber?: string;
    numFriends?: string;
    bio?: string;
    status?: number;
    socialLink: string;
}
export declare class UpdateUserPasswordDto {
    current_password: string;
    new_password: string;
}
