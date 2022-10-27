import { User } from "src/entities/user.entity";
import { IUser } from "../interface/user.interface";
export declare class ViewUserDto extends User {
    formatDataSet(data: IUser): {
        id: number;
        first_name: string;
        last_name: string;
        email: string;
        mobile_phone: string;
        work_phone: string;
        fax: string;
    };
}
