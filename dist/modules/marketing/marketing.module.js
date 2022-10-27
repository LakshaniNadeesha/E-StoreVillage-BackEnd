"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarketingModule = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const entities_1 = require("../../entities");
const banner_ads_controller_1 = require("./controller/banner-ads.controller");
const banner_ads_repository_interface_1 = require("./repositories/interfaces/banner-ads-repository.interface");
const banner_ads_repository_1 = require("./repositories/banner-ads.repository");
const banner_ads_service_1 = require("./services/banner-ads.service");
const Event_controller_1 = require("./controller/Event.controller");
const contact_us_controller_1 = require("./controller/contact-us.controller");
const Event_repository_interface_1 = require("./repositories/interfaces/Event-repository.interface");
const Event_service_1 = require("./services/Event.service");
const contact_us_service_1 = require("./services/contact-us.service");
const contact_us_repository_interface_1 = require("./repositories/interfaces/contact-us-repository.interface");
const Event_repository_1 = require("./repositories/Event.repository");
const contact_us_repository_1 = require("./repositories/contact-us.repository");
const complain_service_1 = require("./services/complain.service");
const complain_repository_interface_1 = require("./repositories/interfaces/complain-repository.interface");
const complain_repository_1 = require("./repositories/complain.repository");
const complain_controller_1 = require("./controller/complain.controller");
let MarketingModule = class MarketingModule {
};
MarketingModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([entities_1.Banner, entities_1.Event, entities_1.ContactUs, entities_1.NotifySubscribe, entities_1.Complain])],
        providers: [
            {
                provide: `${banner_ads_repository_interface_1.IBannerAdsRepositoryInterface}`,
                useClass: banner_ads_repository_1.BannerAdsRepository,
            },
            {
                provide: banner_ads_service_1.BannerAdsService.name,
                useClass: banner_ads_service_1.BannerAdsService,
            },
            {
                provide: `${Event_repository_interface_1.IEventRepositoryInterface}`,
                useClass: Event_repository_1.EventRepository,
            },
            {
                provide: Event_service_1.EventService.name,
                useClass: Event_service_1.EventService,
            },
            {
                provide: `${complain_repository_interface_1.IComplainRepositoryInterface}`,
                useClass: complain_repository_1.ComplainRepository,
            },
            {
                provide: complain_service_1.ComplainService.name,
                useClass: complain_service_1.ComplainService,
            },
            {
                provide: `${contact_us_repository_interface_1.IContactUsRepositoryInterface}`,
                useClass: contact_us_repository_1.ContactUsRepository,
            },
            {
                provide: contact_us_service_1.ContactUsService.name,
                useClass: contact_us_service_1.ContactUsService,
            },
        ],
        exports: [],
        controllers: [banner_ads_controller_1.BannerAdsController, Event_controller_1.EventController, contact_us_controller_1.ContactUsController, complain_controller_1.ComplainController],
    })
], MarketingModule);
exports.MarketingModule = MarketingModule;
//# sourceMappingURL=marketing.module.js.map