import { HobbyDTO } from "./hobbyDTO";
import { LanguageDTO } from "./languageDTO";
import { LocationDTO } from "./location";
import { TypeOfExchangeDTO } from "./typeOfExchangeDTO";
import { UserLanguageDTO } from "./userLanguageDTO";

export class User {
    nickname!: string;
    gender!: string; // enum
    location!: LocationDTO; // create LocationDTO;
    birthDate!: Date; // LocalDate
    userLanguageDTOs!: UserLanguageDTO[]; //
    typeOfExchange!: TypeOfExchangeDTO;
    hobbies!: HobbyDTO[];
    description!: string;
    email!: string;
    password!: string;
}