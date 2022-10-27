import { EmailService } from "./services/email.service";
import { MailerModule } from "@nestjs-modules/mailer";
import { HandlebarsAdapter } from "@nestjs-modules/mailer/dist/adapters/handlebars.adapter";
import { Module } from "@nestjs/common";
import { join } from "path";
import configuration from "../../core/config/configuration";

@Module({
  imports: [
    MailerModule.forRootAsync({
      useFactory: () => ({
        transport: {
          host: configuration().mail.host,
          port: configuration().mail.port,
          ignoreTLS: configuration().mail.ignoreTLS,
          secure: configuration().mail.secure,
          auth: {
            user: configuration().mail.auth.user,
            pass: configuration().mail.auth.pass,
          },
        },
        defaults: {
          from: configuration().mail.defaultFrom,
        },
        preview: false,
        template: {
          dir: join(__dirname, "templates/pages"),
          adapter: new HandlebarsAdapter(), // or new PugAdapter() or new EjsAdapter()
          options: {
            strict: true,
          },
        },
        options: {
          partials: {
            dir: join(__dirname, "templates/partials"),
            options: {
              strict: true,
            },
          },
        },
      }),
    }),
  ],
  providers: [EmailService],
  exports: [EmailService],
})
export class EmailModule {}
