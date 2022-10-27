import { Module } from "@nestjs/common";
import { CountryStateCityController } from "./controller/country-state-city.controller";

@Module({
  controllers: [CountryStateCityController],
})
export class CountryStateCityModule {}
