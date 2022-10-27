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
exports.CountryStateCityController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const country_state_city_1 = require("country-state-city");
let CountryStateCityController = class CountryStateCityController {
    async findAll() {
        return country_state_city_1.Country.getAllCountries();
    }
    async getStatesOfCountry(countryCode) {
        return country_state_city_1.State.getStatesOfCountry(countryCode);
    }
    async getCitiesOfState(countryCode, stateCode) {
        return country_state_city_1.City.getCitiesOfState(countryCode, stateCode);
    }
};
__decorate([
    (0, common_1.Get)("contries"),
    (0, swagger_1.ApiCreatedResponse)({ description: "Get Company By Id" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CountryStateCityController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)("states/:countryCode"),
    (0, swagger_1.ApiCreatedResponse)({ description: "Get Company By Id" }),
    __param(0, (0, common_1.Param)("countryCode")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CountryStateCityController.prototype, "getStatesOfCountry", null);
__decorate([
    (0, common_1.Get)("city/:countryCode/:stateCode"),
    (0, swagger_1.ApiCreatedResponse)({ description: "Get Company By Id" }),
    __param(0, (0, common_1.Param)("countryCode")),
    __param(1, (0, common_1.Param)("stateCode")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], CountryStateCityController.prototype, "getCitiesOfState", null);
CountryStateCityController = __decorate([
    (0, common_1.Controller)("country-state-city"),
    (0, swagger_1.ApiTags)("Country State City")
], CountryStateCityController);
exports.CountryStateCityController = CountryStateCityController;
//# sourceMappingURL=country-state-city.controller.js.map