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
exports.ContactUsService = void 0;
const common_1 = require("@nestjs/common");
const contact_us_repository_interface_1 = require("../repositories/interfaces/contact-us-repository.interface");
let ContactUsService = class ContactUsService {
    constructor(contactUsRepository) {
        this.contactUsRepository = contactUsRepository;
    }
    deleteOneById(id) {
        return this.contactUsRepository.remove(id);
    }
    getOneById(id) {
        return this.contactUsRepository.getOneById(id);
    }
    update(updatecontactUsDto, id) {
        return this.contactUsRepository.update(id, updatecontactUsDto);
    }
    async create(createcontactUsDto) {
        return this.contactUsRepository.save(createcontactUsDto);
    }
    async findAll(filter, page) {
        filter.limit ? delete filter.limit : null;
        filter.page ? delete filter.page : null;
        return await this.contactUsRepository.getAll(filter, null, null, null, page).catch((err) => {
            throw new common_1.BadRequestException(err);
        });
    }
};
ContactUsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(`${contact_us_repository_interface_1.IContactUsRepositoryInterface}`)),
    __metadata("design:paramtypes", [Object])
], ContactUsService);
exports.ContactUsService = ContactUsService;
//# sourceMappingURL=contact-us.service.js.map