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
var User_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const entities_1 = require("./");
const base_entity_1 = require("./../core/repository/base.entity");
const typeorm_1 = require("typeorm");
const class_transformer_1 = require("class-transformer");
const item_entity_1 = require("./product/item.entity");
const item_review_entity_1 = require("./product/item-review.entity");
const user_point_entity_1 = require("./user-point.entity");
let User = User_1 = class User extends base_entity_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "first_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "last_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, unique: true }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 1, type: "int" }),
    __metadata("design:type", Number)
], User.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "numFriends", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "socialLink", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "bio", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], User.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "phoneNumber", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], User.prototype, "isPhoneNumberConfirmed", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", Number)
], User.prototype, "failed_login_attempt", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => item_entity_1.Item, (Item) => Item.CreatedBy),
    __metadata("design:type", item_entity_1.Item)
], User.prototype, "Item", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => item_review_entity_1.ItemReview, (ItemReview) => ItemReview.ItemReviewBy),
    __metadata("design:type", Array)
], User.prototype, "ItemReview", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => User_1, (User) => User.id),
    __metadata("design:type", User)
], User.prototype, "ParentUser", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => user_point_entity_1.UserPoint, (userPoint) => userPoint.pointOwner),
    __metadata("design:type", Array)
], User.prototype, "userPoint", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => entities_1.Complain, (complain) => complain.userComplain),
    __metadata("design:type", Array)
], User.prototype, "complain", void 0);
User = User_1 = __decorate([
    (0, typeorm_1.Entity)()
], User);
exports.User = User;
//# sourceMappingURL=user.entity.js.map