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
exports.UserPoint = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("./../core/repository/base.entity");
const user_entity_1 = require("./user.entity");
let UserPoint = class UserPoint extends base_entity_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], UserPoint.prototype, "point_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], UserPoint.prototype, "point", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.userPoint),
    __metadata("design:type", user_entity_1.User)
], UserPoint.prototype, "pointOwner", void 0);
UserPoint = __decorate([
    (0, typeorm_1.Entity)()
], UserPoint);
exports.UserPoint = UserPoint;
//# sourceMappingURL=user-point.entity.js.map