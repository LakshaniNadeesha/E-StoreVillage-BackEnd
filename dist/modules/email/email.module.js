"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailModule = void 0;
const email_service_1 = require("./services/email.service");
const mailer_1 = require("@nestjs-modules/mailer");
const handlebars_adapter_1 = require("@nestjs-modules/mailer/dist/adapters/handlebars.adapter");
const common_1 = require("@nestjs/common");
const path_1 = require("path");
const configuration_1 = __importDefault(require("../../core/config/configuration"));
let EmailModule = class EmailModule {
};
EmailModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mailer_1.MailerModule.forRootAsync({
                useFactory: () => ({
                    transport: {
                        host: (0, configuration_1.default)().mail.host,
                        port: (0, configuration_1.default)().mail.port,
                        ignoreTLS: (0, configuration_1.default)().mail.ignoreTLS,
                        secure: (0, configuration_1.default)().mail.secure,
                        auth: {
                            user: (0, configuration_1.default)().mail.auth.user,
                            pass: (0, configuration_1.default)().mail.auth.pass,
                        },
                    },
                    defaults: {
                        from: (0, configuration_1.default)().mail.defaultFrom,
                    },
                    preview: false,
                    template: {
                        dir: (0, path_1.join)(__dirname, "templates/pages"),
                        adapter: new handlebars_adapter_1.HandlebarsAdapter(),
                        options: {
                            strict: true,
                        },
                    },
                    options: {
                        partials: {
                            dir: (0, path_1.join)(__dirname, "templates/partials"),
                            options: {
                                strict: true,
                            },
                        },
                    },
                }),
            }),
        ],
        providers: [email_service_1.EmailService],
        exports: [email_service_1.EmailService],
    })
], EmailModule);
exports.EmailModule = EmailModule;
//# sourceMappingURL=email.module.js.map