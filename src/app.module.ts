import { MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import configuration from "./core/config/configuration";
import { AuthModule } from "./modules/auth/auth.module";
import { RedisCacheModule } from "./modules/cache/redisCache.module";
import { UserModule } from "./modules/user/user.module";
import Joi from "joi";
import { RouteInfo } from "@nestjs/common/interfaces";
import { JsonBodyMiddleware } from "./core/middleware/json-body-parser.middleware";
import { RawBodyMiddleware } from "./core/middleware/row-body-parser.middleware";
import { UploaderModule } from "./modules/uploader/uploader.module";
import { EmailModule } from "./modules/email/email.module";
import { ProductModule } from "./modules/product/product.module";
import { OrderModule } from "./modules/order/order.module";
import { MarketingModule } from "./modules/marketing/marketing.module";
import { CountryStateCityModule } from "./modules/country-state-city/country-state-city.module";

const rawBodyParsingRoutes: Array<RouteInfo> = [
  {
    path: "*document/singed",
    method: RequestMethod.POST,
  },
];

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
      validationSchema: Joi.object({
        TWILIO_ACCOUNT_SID: Joi.string().required(),
        TWILIO_AUTH_TOKEN: Joi.string().required(),
        TWILIO_VERIFICATION_SERVICE_SID: Joi.string().required(),
      }),
    }),
    TypeOrmModule.forRoot({
      type: configuration().database.type as any,
      host: configuration().database.host,
      port: configuration().database.port,
      username: configuration().database.user,
      password: configuration().database.password,
      database: configuration().database.schema,
      charset: configuration().database.charset,
      entities: ["dist/**/*.entity{.ts,.js}"],
      synchronize: false,
      migrations: ["./migrations/*{.ts,.js}"],
      cli: {
        migrationsDir: "./migrations",
      },
      extra: {
        charset: configuration().database.charset,
      },
      logging: !configuration().app.isProd,
      legacySpatialSupport: false,
    }),
    AuthModule,
    UserModule,
    RedisCacheModule,
    UploaderModule,
    EmailModule,
    // CountryStateCityModule,
    ProductModule,
    OrderModule,
    MarketingModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): MiddlewareConsumer | void {
    consumer
      .apply(RawBodyMiddleware)
      .forRoutes(...rawBodyParsingRoutes)
      .apply(JsonBodyMiddleware)
      .exclude(...rawBodyParsingRoutes)
      .forRoutes("*");
  }
}
