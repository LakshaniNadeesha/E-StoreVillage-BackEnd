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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderService = void 0;
const common_1 = require("@nestjs/common");
const entities_1 = require("../../../entities");
const item_repository_interface_1 = require("../../product/repositories/interfaces/item-repository.interface");
const order_repository_interface_1 = require("../repositories/interfaces/order-repository.interface");
const user_point_service_1 = require("./user-point.service");
let OrderService = class OrderService {
    constructor(OrderRepository, userPointService, itemRepository) {
        this.OrderRepository = OrderRepository;
        this.userPointService = userPointService;
        this.itemRepository = itemRepository;
    }
    delete(id) {
        return this.OrderRepository.remove(id);
    }
    getOneById(id) {
        return this.OrderRepository.getOneById(id);
    }
    async update(id, updateOrderDto) {
        const newOder = new entities_1.Order();
        updateOrderDto.items.forEach(async (key) => {
            const newItem = new entities_1.Item();
            newItem.id = updateOrderDto.items[key];
        });
        const orderSaved = await this.OrderRepository.save(newOder);
        return this.OrderRepository.getOneById(orderSaved.id, null);
    }
    async create(createOrderDto, user) {
        return await this.OrderRepository.save(createOrderDto);
    }
    async findAll(filter, page) {
        filter.limit ? delete filter.limit : null;
        filter.page ? delete filter.page : null;
        return await this.OrderRepository.getAll(filter, null, null, null, page).catch((err) => {
            throw new common_1.BadRequestException(err);
        });
    }
};
OrderService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(`${order_repository_interface_1.IOrderRepositoryInterface}`)),
    __param(1, (0, common_1.Inject)(user_point_service_1.UserPointService.name)),
    __param(2, (0, common_1.Inject)(`${item_repository_interface_1.IItemRepositoryInterface}`)),
    __metadata("design:paramtypes", [Object, user_point_service_1.UserPointService, Object])
], OrderService);
exports.OrderService = OrderService;
//# sourceMappingURL=order.service.js.map