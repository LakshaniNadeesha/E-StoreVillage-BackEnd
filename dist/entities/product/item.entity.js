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
exports.Item = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("../../core/repository/base.entity");
const item_review_entity_1 = require("./item-review.entity");
const user_entity_1 = require("../user.entity");
const category_entity_1 = require("./category.entity");
let Item = class Item extends base_entity_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], Item.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], Item.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], Item.prototype, "image", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Item.prototype, "point", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", Number)
], Item.prototype, "price_sale", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", Number)
], Item.prototype, "price_discount", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", Number)
], Item.prototype, "discount_rate", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", Number)
], Item.prototype, "qty", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => item_review_entity_1.ItemReview, (ItemReview) => ItemReview.Item),
    __metadata("design:type", Array)
], Item.prototype, "ItemReview", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (User) => User.Item),
    __metadata("design:type", user_entity_1.User)
], Item.prototype, "CreatedBy", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => category_entity_1.Category, (Category) => Category.Item),
    __metadata("design:type", category_entity_1.Category)
], Item.prototype, "Category", void 0);
Item = __decorate([
    (0, typeorm_1.Entity)()
], Item);
exports.Item = Item;
//# sourceMappingURL=item.entity.js.map