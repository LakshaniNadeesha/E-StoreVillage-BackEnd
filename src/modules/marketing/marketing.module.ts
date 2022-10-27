import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";
import { Banner, Event, Brands, Category, Complain, ContactUs, Item, ItemReview, NotifySubscribe } from "src/entities";
import { BannerAdsController } from "./controller/banner-ads.controller";
import { IBannerAdsRepositoryInterface } from "./repositories/interfaces/banner-ads-repository.interface";
import { BannerAdsRepository } from "./repositories/banner-ads.repository";
import { BannerAdsService } from "./services/banner-ads.service";
import { EventController } from "./controller/Event.controller";
import { ContactUsController } from "./controller/contact-us.controller";
import { IEventRepositoryInterface } from "./repositories/interfaces/Event-repository.interface";
import { EventService } from "./services/Event.service";
import { ContactUsService } from "./services/contact-us.service";
import { IContactUsRepositoryInterface } from "./repositories/interfaces/contact-us-repository.interface";
import { EventRepository } from "./repositories/Event.repository";
import { ContactUsRepository } from "./repositories/contact-us.repository";
import { ComplainService } from "./services/complain.service";
import { IComplainRepositoryInterface } from "./repositories/interfaces/complain-repository.interface";
import { ComplainRepository } from "./repositories/complain.repository";
import { ComplainController } from "./controller/complain.controller";

@Module({
  imports: [TypeOrmModule.forFeature([Banner, Event, ContactUs, NotifySubscribe, Complain])],
  providers: [
    {
      provide: `${IBannerAdsRepositoryInterface}`,
      useClass: BannerAdsRepository,
    },
    {
      provide: BannerAdsService.name,
      useClass: BannerAdsService,
    },
    {
      provide: `${IEventRepositoryInterface}`,
      useClass: EventRepository,
    },
    {
      provide: EventService.name,
      useClass: EventService,
    },
    {
      provide: `${IComplainRepositoryInterface}`,
      useClass: ComplainRepository,
    },
    {
      provide: ComplainService.name,
      useClass: ComplainService,
    },
    {
      provide: `${IContactUsRepositoryInterface}`,
      useClass: ContactUsRepository,
    },
    {
      provide: ContactUsService.name,
      useClass: ContactUsService,
    },

  ],
  exports: [],
  controllers: [BannerAdsController, EventController, ContactUsController, ComplainController],
})
export class MarketingModule { }
