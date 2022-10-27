import { ISendMailOptions, MailerService } from "@nestjs-modules/mailer";
export declare class EmailService {
    private readonly mailService;
    constructor(mailService: MailerService);
    sendWelcomeMail(name: string, email: string): Promise<boolean>;
    sendInitialCredentials(email: string, password: string): Promise<boolean>;
    sendPasswordResetLink(email: string, link: string): Promise<boolean>;
    sendMail(sendMailOptions: ISendMailOptions): Promise<boolean>;
}
