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
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const configuration_1 = __importDefault(require("./core/config/configuration"));
const auth_module_1 = require("./modules/auth/auth.module");
const redisCache_module_1 = require("./modules/cache/redisCache.module");
const user_module_1 = require("./modules/user/user.module");
const joi_1 = __importDefault(require("joi"));
const json_body_parser_middleware_1 = require("./core/middleware/json-body-parser.middleware");
const row_body_parser_middleware_1 = require("./core/middleware/row-body-parser.middleware");
const uploader_module_1 = require("./modules/uploader/uploader.module");
const email_module_1 = require("./modules/email/email.module");
const product_module_1 = require("./modules/product/product.module");
const order_module_1 = require("./modules/order/order.module");
const marketing_module_1 = require("./modules/marketing/marketing.module");
const rawBodyParsingRoutes = [
    {
        path: "*document/singed",
        method: common_1.RequestMethod.POST,
    },
];
let AppModule = class AppModule {
    configure(consumer) {
        consumer
            .apply(row_body_parser_middleware_1.RawBodyMiddleware)
            .forRoutes(...rawBodyParsingRoutes)
            .apply(json_body_parser_middleware_1.JsonBodyMiddleware)
            .exclude(...rawBodyParsingRoutes)
            .forRoutes("*");
    }
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                load: [configuration_1.default],
                isGlobal: true,
                validationSchema: joi_1.default.object({
                    TWILIO_ACCOUNT_SID: joi_1.default.string().required(),
                    TWILIO_AUTH_TOKEN: joi_1.default.string().required(),
                    TWILIO_VERIFICATION_SERVICE_SID: joi_1.default.string().required(),
                }),
            }),
            typeorm_1.TypeOrmModule.forRoot({
                type: (0, configuration_1.default)().database.type,
                host: (0, configuration_1.default)().database.host,
                port: (0, configuration_1.default)().database.port,
                username: (0, configuration_1.default)().database.user,
                password: (0, configuration_1.default)().database.password,
                database: (0, configuration_1.default)().database.schema,
                charset: (0, configuration_1.default)().database.charset,
                entities: ["dist/**/*.entity{.ts,.js}"],
                synchronize: false,
                migrations: ["./migrations/*{.ts,.js}"],
                cli: {
                    migrationsDir: "./migrations",
                },
                extra: {
                    charset: (0, configuration_1.default)().database.charset,
                },
                logging: !(0, configuration_1.default)().app.isProd,
                legacySpatialSupport: false,
            }),
            auth_module_1.AuthModule,
            user_module_1.UserModule,
            redisCache_module_1.RedisCacheModule,
            uploader_module_1.UploaderModule,
            email_module_1.EmailModule,
            product_module_1.ProductModule,
            order_module_1.OrderModule,
            marketing_module_1.MarketingModule,
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map