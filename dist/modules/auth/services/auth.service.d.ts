import { JwtService } from "@nestjs/jwt";
import { User } from "src/entities";
import { RedisCacheService } from "src/modules/cache/redis-cache.service";
import { UsersRepository } from "src/modules/user/repositories";
import { ForgotPasswordDto } from "../dto";
import { ITokenResponse, ITokenUser } from "../interfaces";
import { PasswordResetRepository } from "./../repositories/passwordReset.repository";
export declare class AuthService {
    private readonly jwtService;
    private readonly userRepo;
    private readonly cacheService;
    private readonly passwordResetTokenRepo;
    constructor(jwtService: JwtService, userRepo: UsersRepository, cacheService: RedisCacheService, passwordResetTokenRepo: PasswordResetRepository);
    private verifyPassword;
    getAuthenticatedUser(email: string, password: string): Promise<User>;
    getGeneratedAccessToken(user: User, _isTwoFactor?: boolean): Promise<ITokenResponse>;
    getTokenUser(id: number, _payload?: ITokenUser): Promise<ITokenUser>;
    getUserByRefreshToken(userId: number): Promise<User>;
    forgotPasswordGetToken(email: string): Promise<boolean>;
    resetPassword(data: ForgotPasswordDto): Promise<boolean>;
    createForgotPasswordLink(code: any, email: any): string;
}
