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
exports.UpdateComplainDto = exports.FilterComplainDto = exports.CreateComplainReplyDto = exports.CreateComplainDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const pagination_1 = require("../../../core/pagination");
class CreateComplainDto {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CreateComplainDto.prototype, "user", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateComplainDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateComplainDto.prototype, "complain", void 0);
exports.CreateComplainDto = CreateComplainDto;
class CreateComplainReplyDto {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateComplainReplyDto.prototype, "user", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateComplainReplyDto.prototype, "complain_reply", void 0);
exports.CreateComplainReplyDto = CreateComplainReplyDto;
class FilterComplainDto extends pagination_1.PageRequest {
}
exports.FilterComplainDto = FilterComplainDto;
class UpdateComplainDto {
}
exports.UpdateComplainDto = UpdateComplainDto;
//# sourceMappingURL=complain.dto.js.map