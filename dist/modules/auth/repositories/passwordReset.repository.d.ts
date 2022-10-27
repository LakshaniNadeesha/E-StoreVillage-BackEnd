import { BaseRepository } from "src/core/repository";
import { PasswordResetToken } from "src/entities";
import { Repository } from "typeorm";
export declare class PasswordResetRepository extends BaseRepository<PasswordResetToken> {
    private passwordResetRepo;
    constructor(passwordResetRepo: Repository<PasswordResetToken>);
}
