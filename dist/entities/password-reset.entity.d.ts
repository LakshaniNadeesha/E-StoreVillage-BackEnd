export declare class PasswordResetToken {
    id: number;
    email: string;
    token: string;
    expiration: Date;
    created_at: Date;
    generateActivationCode(): Promise<void>;
    setExpireDate(): Promise<void>;
}
