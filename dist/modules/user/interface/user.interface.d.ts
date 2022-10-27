export interface IUser {
    id?: number;
    first_name?: string;
    last_name?: string;
    email?: string;
    password?: string;
    status?: number;
    role?: string;
    phoneNumber?: string;
    work_phone?: string;
    fax?: string;
    failed_login_attempt?: number;
    numFriends?: string;
    socialLink?: string;
    bio?: string;
}
