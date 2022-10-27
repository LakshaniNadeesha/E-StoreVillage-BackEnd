import { Controller, Get, Param } from "@nestjs/common";
import { ApiCreatedResponse, ApiTags } from "@nestjs/swagger";
import { Country, State, City } from "country-state-city";

@Controller("country-state-city")
@ApiTags("Country State City")
export class CountryStateCityController {
  @Get("contries")
  @ApiCreatedResponse({ description: "Get Company By Id" })
  async findAll() {
    return Country.getAllCountries();
  }

  @Get("states/:countryCode")
  @ApiCreatedResponse({ description: "Get Company By Id" })
  async getStatesOfCountry(@Param("countryCode") countryCode: string) {
    return State.getStatesOfCountry(countryCode);
  }

  @Get("city/:countryCode/:stateCode")
  @ApiCreatedResponse({ description: "Get Company By Id" })
  async getCitiesOfState(@Param("countryCode") countryCode: string, @Param("stateCode") stateCode: string) {
    return City.getCitiesOfState(countryCode, stateCode);
  }
}
