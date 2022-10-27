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
exports.ComplainService = void 0;
const common_1 = require("@nestjs/common");
const entities_1 = require("../../../entities");
const mailer_1 = require("@nestjs-modules/mailer");
const complain_repository_interface_1 = require("../repositories/interfaces/complain-repository.interface");
let ComplainService = class ComplainService {
    constructor(complainRepository, mailService) {
        this.complainRepository = complainRepository;
        this.mailService = mailService;
    }
    async createReply(createComplainDto) {
        const reply = createComplainDto.complain_reply;
        return await this.mailService
            .sendMail({
            to: createComplainDto.user,
            subject: "Complain Reply",
            template: "account-welcome",
            context: { reply },
        })
            .then(() => true)
            .catch((e) => {
            console.log(e);
            throw new common_1.InternalServerErrorException();
        });
    }
    deleteOneById(id) {
        return this.complainRepository.remove(id);
    }
    getOneById(id) {
        return this.complainRepository.getOneById(id, null, ['userComplain']);
    }
    update(updatecomplainDto, id) {
        return this.complainRepository.update(id, updatecomplainDto);
    }
    async create(createcomplainDto) {
        const newCOmplain = new entities_1.Complain();
        newCOmplain.complain = createcomplainDto.complain;
        newCOmplain.name = createcomplainDto.name;
        const newComp = this.complainRepository.create(newCOmplain);
        const compUser = new entities_1.User();
        compUser.id = createcomplainDto.user;
        newComp.userComplain = compUser;
        return this.complainRepository.save(newCOmplain);
    }
    async findAll(filter, page) {
        filter.limit ? delete filter.limit : null;
        filter.page ? delete filter.page : null;
        return await this.complainRepository.getAll(filter, null, ['userComplain'], null, page).catch((err) => {
            throw new common_1.BadRequestException(err);
        });
    }
};
ComplainService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(`${complain_repository_interface_1.IComplainRepositoryInterface}`)),
    __metadata("design:paramtypes", [Object, mailer_1.MailerService])
], ComplainService);
exports.ComplainService = ComplainService;
//# sourceMappingURL=complain.service.js.map