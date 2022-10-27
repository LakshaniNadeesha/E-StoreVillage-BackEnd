"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailService = void 0;
const mailer_1 = require("@nestjs-modules/mailer");
const common_1 = require("@nestjs/common");
let EmailService = class EmailService {
    constructor(mailService) {
        this.mailService = mailService;
    }
    async sendWelcomeMail(name, email) {
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
            throw new common_1.InternalServerErrorException();
        });
    }
    async sendInitialCredentials(email, password) {
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
            throw new common_1.InternalServerErrorException();
        });
    }
    async sendPasswordResetLink(email, link) {
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
            throw new common_1.InternalServerErrorException("Cannot send the email");
        });
    }
    async sendMail(sendMailOptions) {
        return await this.mailService
            .sendMail(sendMailOptions)
            .then(() => {
            return true;
        })
            .catch((er) => {
            console.log(er);
            throw new common_1.InternalServerErrorException("Cannot send the email");
        });
    }
};
EmailService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [mailer_1.MailerService])
], EmailService);
exports.EmailService = EmailService;
//# sourceMappingURL=email.service.js.map