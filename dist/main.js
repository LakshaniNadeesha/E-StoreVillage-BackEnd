"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const helmet_1 = __importDefault(require("helmet"));
const app_module_1 = require("./app.module");
const configuration_1 = __importDefault(require("./core/config/configuration"));
const validation_1 = require("./core/validation");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        bodyParser: false,
    });
    app.setGlobalPrefix(`${(0, configuration_1.default)().app.version}`);
    app.use((0, helmet_1.default)());
    app.use(helmet_1.default.contentSecurityPolicy({
        directives: {
            defaultSrc: ["'self'"],
        },
    }));
    app.use(helmet_1.default.permittedCrossDomainPolicies({
        permittedPolicies: "none",
    }));
    app.use((0, express_rate_limit_1.default)({
        windowMs: 2 * 60 * 1000,
        max: 500,
    }));
    const whitelist = (0, configuration_1.default)().app.corsWhiteList.split(", ");
    app.enableCors({
        origin: (origin, callback) => {
            if (!origin || whitelist.indexOf(origin) !== -1) {
                callback(null, true);
            }
            else {
                callback(new common_1.UnauthorizedException("Blocked by CORS policy"));
            }
        },
        credentials: true,
    });
    app.use((0, cookie_parser_1.default)());
    app.useGlobalFilters(new validation_1.ValidationFilter());
    app.useGlobalPipes(new common_1.ValidationPipe({ exceptionFactory: validation_1.customExceptionFactory }));
    const options = new swagger_1.DocumentBuilder()
        .setTitle("EStore API")
        .setDescription("API Documentation")
        .setVersion("1.0.0")
        .addCookieAuth("Authentication")
        .build();
    const doc = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup(`${(0, configuration_1.default)().app.version}/docs`, app, doc, {
        explorer: true,
        swaggerOptions: {
            docExpansion: "none",
            filter: true,
            showRequestDuration: true,
        },
    });
    await app.listen((0, configuration_1.default)().app.port);
}
bootstrap();
//# sourceMappingURL=main.js.map