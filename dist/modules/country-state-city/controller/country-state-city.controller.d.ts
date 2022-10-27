export declare class CountryStateCityController {
    findAll(): Promise<import("country-state-city/dist/lib/interface").ICountry[]>;
    getStatesOfCountry(countryCode: string): Promise<import("country-state-city/dist/lib/interface").IState[]>;
    getCitiesOfState(countryCode: string, stateCode: string): Promise<import("country-state-city/dist/lib/interface").ICity[]>;
}
