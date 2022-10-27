import { Response } from "express";
import { RedisCacheService } from "../cache/redis-cache.service";
import { ForgotPasswordDto, LoginDto } from "./dto";
import { IRequestWithUser, ITokenUser } from "./interfaces";
import { AuthService } from "./services/auth.service";
export declare class AuthController {
    private readonly authService;
    private readonly cacheService;
    constructor(authService: AuthService, cacheService: RedisCacheService);
    login(login: LoginDto, req: IRequestWithUser, response: Response): Promise<Response<any, Record<string, any>>>;
    logout(req: any, response: Response, user: ITokenUser): Promise<Response<any, Record<string, any>>>;
    forgotPasswordGetToken(email: string): Promise<boolean>;
    resetPassword(data: ForgotPasswordDto): Promise<boolean>;
}
