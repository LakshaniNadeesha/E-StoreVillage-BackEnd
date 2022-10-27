import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { Twilio } from "twilio";

@Injectable()
export default class SmsService {
  private twilioClient: Twilio;

  constructor(private readonly configService: ConfigService) {
    const accountSid = configService.get("TWILIO_ACCOUNT_SID");
    const authToken = configService.get("TWILIO_AUTH_TOKEN");

    this.twilioClient = new Twilio(accountSid, authToken);
  }

  initiatePhoneNumberVerification(phoneNumber: string) {
    const serviceSid = this.configService.get("TWILIO_VERIFICATION_SERVICE_SID");

    return this.twilioClient.verify.services(serviceSid).verifications.create({ to: phoneNumber, channel: "sms" });
  }

  async tokenVerify(phoneNumber: string, verificationCode: string) {
    console.log(phoneNumber);
    const serviceSid = this.configService.get("TWILIO_VERIFICATION_SERVICE_SID");
    const result = await this.twilioClient.verify
      .services(serviceSid)
      .verificationChecks.create({ to: phoneNumber, code: verificationCode });
    return result;
  }

  async sendSMS(to: string, from: string) {
    return await this.twilioClient.messages
      .create({
        body: from,
        from: "+94760620329",
        to: to,
      })
      .then((message) => console.log(message.sid));
  }
}
