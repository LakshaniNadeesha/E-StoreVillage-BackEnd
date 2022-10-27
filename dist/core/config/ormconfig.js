"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const configuration_1 = __importDefault(require("./configuration"));
exports.config = {
    type: (0, configuration_1.default)().database.type,
    host: (0, configuration_1.default)().database.host,
    port: (0, configuration_1.default)().database.port,
    username: (0, configuration_1.default)().database.user,
    password: (0, configuration_1.default)().database.password,
    database: (0, configuration_1.default)().database.schema,
    charset: "utf8mb4",
    entities: ["src/**/*.entity{.ts,.js}"],
    migrations: ["src/migrations/*{.ts,.js}"],
    cli: {
        migrationsDir: "src/migrations",
    },
    extra: {
        charset: "utf8mb4",
    },
    synchronize: false,
    legacySpatialSupport: false,
    logging: !(0, configuration_1.default)().app.isProd,
};
//# sourceMappingURL=ormconfig.js.map