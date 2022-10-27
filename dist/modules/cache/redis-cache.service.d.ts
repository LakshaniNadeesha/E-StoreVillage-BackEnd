import { Cache } from "cache-manager";
import { User } from "src/entities";
export declare class RedisCacheService {
    private readonly cache;
    private key_user;
    private logged;
    constructor(cache: Cache);
    private get;
    private set;
    getUser(id: any): Promise<User>;
    setUser(user: User): Promise<void>;
    setLoggedTokens(user: User, token: string): Promise<void>;
    getLoggedTokens(userId: number): Promise<string[]>;
    clearLoggedTokens(userId: number): Promise<void>;
}
