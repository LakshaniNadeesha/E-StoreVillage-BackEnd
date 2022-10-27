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
exports.OrderModule = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const entities_1 = require("../../entities");
const order_service_1 = require("./services/order.service");
const order_repository_1 = require("./repositories/order.repository");
const order_repository_interface_1 = require("./repositories/interfaces/order-repository.interface");
const order_controller_1 = require("./controller/order.controller");
const user_point_entity_1 = require("../../entities/user-point.entity");
const user_point_repository_1 = require("./repositories/user-point.repository");
const user_point_repository_interface_1 = require("./repositories/interfaces/user-point-repository.interface");
const user_point_service_1 = require("./services/user-point.service");
const repositories_1 = require("../user/repositories");
const item_repository_interface_1 = require("../product/repositories/interfaces/item-repository.interface");
const item_repository_1 = require("../product/repositories/item.repository");
const sms_service_1 = __importDefault(require("../../core/services/sms.service"));
let OrderModule = class OrderModule {
};
OrderModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([entities_1.Order, user_point_entity_1.UserPoint, entities_1.User, entities_1.Item])],
        providers: [
            {
                provide: `${order_repository_interface_1.IOrderRepositoryInterface}`,
                useClass: order_repository_1.OrderRepository,
            },
            {
                provide: order_service_1.OrderService.name,
                useClass: order_service_1.OrderService,
            },
            {
                provide: `${user_point_repository_interface_1.IUserPointRepositoryInterface}`,
                useClass: user_point_repository_1.UserPointRepository,
            },
            {
                provide: user_point_service_1.UserPointService.name,
                useClass: user_point_service_1.UserPointService,
            },
            {
                provide: `${item_repository_interface_1.IItemRepositoryInterface}`,
                useClass: item_repository_1.ItemRepository,
            },
            repositories_1.UsersRepository,
            sms_service_1.default,
        ],
        exports: [],
        controllers: [order_controller_1.OrderController],
    })
], OrderModule);
exports.OrderModule = OrderModule;
//# sourceMappingURL=order.module.js.map