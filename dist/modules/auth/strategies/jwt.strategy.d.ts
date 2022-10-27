import { Strategy } from "passport-jwt";
import { ITokenUser } from "../interfaces";
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    constructor();
    validate(payload: ITokenUser): Promise<ITokenUser>;
}
export {};
