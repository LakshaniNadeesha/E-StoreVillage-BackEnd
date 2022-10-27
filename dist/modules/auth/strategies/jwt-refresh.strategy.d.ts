import { Strategy } from "passport-jwt";
import { ITokenUser } from "../interfaces";
import { Request } from "express";
import { AuthService } from "../services/auth.service";
declare const JwtRefreshTokenStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtRefreshTokenStrategy extends JwtRefreshTokenStrategy_base {
    private readonly authService;
    constructor(authService: AuthService);
    validate(payload: ITokenUser): Promise<false | import("../../../entities").User>;
    extractHeaderToken(request: Request): any;
}
export {};
