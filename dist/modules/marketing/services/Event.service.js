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
exports.EventService = void 0;
const common_1 = require("@nestjs/common");
const Event_repository_interface_1 = require("../repositories/interfaces/Event-repository.interface");
let EventService = class EventService {
    constructor(EventRepository) {
        this.EventRepository = EventRepository;
    }
    deleteOneById(id) {
        return this.EventRepository.remove(id);
    }
    getOneById(id) {
        return this.EventRepository.getOneById(id);
    }
    update(updateEventDto, id) {
        return this.EventRepository.update(id, updateEventDto);
    }
    async create(createEventDto) {
        return this.EventRepository.save(createEventDto);
    }
    async findAll(filter, page) {
        filter.limit ? delete filter.limit : null;
        filter.page ? delete filter.page : null;
        return await this.EventRepository.getAll(filter, null, null, null, page).catch((err) => {
            throw new common_1.BadRequestException(err);
        });
    }
};
EventService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(`${Event_repository_interface_1.IEventRepositoryInterface}`)),
    __metadata("design:paramtypes", [Object])
], EventService);
exports.EventService = EventService;
//# sourceMappingURL=Event.service.js.map