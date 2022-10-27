import { ISendMailOptions, MailerService } from "@nestjs-modules/mailer";
import { Injectable, InternalServerErrorException } from "@nestjs/common";

@Injectable()
export class EmailService {
  constructor(private readonly mailService: MailerService) {}

  async sendWelcomeMail(name: string, email: string) {
    return await this.mailService
      .sendMail({
        to: email,
        subject: "Welcome Helm Closer",
        template: "account-welcome",
        context: { name },
      })
      .then(() => true)
      .catch((e) => {
        console.log(e);
        throw new InternalServerErrorException();
      });
  }

  /***
   * Send initial credentials to user
   */
  async sendInitialCredentials(email: string, password: string) {
    return await this.mailService
      .sendMail({
        to: email,
        subject: "Helm Closer Account Credentials",
        template: "account-credentials",
        context: { password },
      })
      .then(() => true)
      .catch((e) => {
        console.log(e);
        throw new InternalServerErrorException();
      });
  } // sendInitialCredentials

  async sendPasswordResetLink(email: string, link: string) {
    return await this.mailService
      .sendMail({
        to: email,
        subject: "Reset Password",
        template: "password-reset",
        context: { link },
      })
      .then(() => {
        return true;
      })
      .catch((er) => {
        console.log(er);
        throw new InternalServerErrorException("Cannot send the email");
      });
  } // sendPasswordResetLink

  async sendMail(sendMailOptions: ISendMailOptions) {
    return await this.mailService
      .sendMail(sendMailOptions)
      .then(() => {
        return true;
      })
      .catch((er) => {
        console.log(er);
        throw new InternalServerErrorException("Cannot send the email");
      });
  } // sendMail

}
