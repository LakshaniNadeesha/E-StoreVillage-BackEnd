import { BaseRepository } from "src/core/repository";
import { User } from "src/entities";
import { Repository } from "typeorm";
export declare class UsersRepository extends BaseRepository<User> {
    private userRepo;
    constructor(userRepo: Repository<User>);
    getByEmail(email: string): Promise<User>;
    tokenUserGetById(id: number): Promise<User>;
    updatePassword(id: number, password: string): Promise<boolean>;
}
