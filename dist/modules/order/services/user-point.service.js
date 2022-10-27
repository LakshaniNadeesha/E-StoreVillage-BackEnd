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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserPointService = void 0;
const common_1 = require("@nestjs/common");
const sms_service_1 = __importDefault(require("../../../core/services/sms.service"));
const entities_1 = require("../../../entities");
const repositories_1 = require("../../user/repositories");
const user_point_repository_interface_1 = require("../repositories/interfaces/user-point-repository.interface");
let UserPointService = class UserPointService {
    constructor(userPointRepository, userRepo, smsService) {
        this.userPointRepository = userPointRepository;
        this.userRepo = userRepo;
        this.smsService = smsService;
    }
    async create(createUserPointDto, user_id, levels) {
        var _a;
        let is_user_id = true;
        if (is_user_id) {
            for (let i = 0; i < levels; i++) {
                const newPoint = this.userPointRepository.create(createUserPointDto);
                newPoint.point = String(createUserPointDto.point_order * (pointRate[i] / 100));
                const user = new entities_1.User();
                user.id = user_id;
                newPoint.pointOwner = user;
                const order = new entities_1.Order();
                order.id = createUserPointDto.orderId;
                const getParentUser = await this.userRepo.getOneById(user_id, null, ["ParentUser"]);
                if (getParentUser) {
                    user_id = (_a = getParentUser === null || getParentUser === void 0 ? void 0 : getParentUser.ParentUser) === null || _a === void 0 ? void 0 : _a.id;
                }
                else {
                    is_user_id = false;
                }
                return this.userPointRepository.save(newPoint).then((res) => {
                    if (i == 1) {
                        this.smsService.sendSMS(getParentUser.phoneNumber, `You eran point ${newPoint}`);
                    }
                    else {
                        this.smsService.sendSMS(getParentUser.phoneNumber, `You eran point ${newPoint}`);
                    }
                    return res;
                });
            }
        }
    }
};
UserPointService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(`${user_point_repository_interface_1.IUserPointRepositoryInterface}`)),
    __metadata("design:paramtypes", [Object, repositories_1.UsersRepository,
        sms_service_1.default])
], UserPointService);
exports.UserPointService = UserPointService;
//# sourceMappingURL=user-point.service.js.map