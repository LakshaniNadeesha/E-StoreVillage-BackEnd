import { ConfigService } from "@nestjs/config";
export default class SmsService {
    private readonly configService;
    private twilioClient;
    constructor(configService: ConfigService);
    initiatePhoneNumberVerification(phoneNumber: string): Promise<import("twilio/lib/rest/verify/v2/service/verification").VerificationInstance>;
    tokenVerify(phoneNumber: string, verificationCode: string): Promise<import("twilio/lib/rest/verify/v2/service/verificationCheck").VerificationCheckInstance>;
    sendSMS(to: string, from: string): Promise<void>;
}
