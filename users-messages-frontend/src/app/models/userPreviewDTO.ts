import { LocationDTO } from "./location";
import { TypeOfExchangeDTO } from "./typeOfExchangeDTO";

export class UserPreviewDTO {
    nickname!:string;
    gender!: string;
    age!: any;
    nativeLanguages!: string[];
    practicingLanguages!: string[]; // change to userLanguageObject with a proficiency level to display proficiency bar
    typeOfExchange!: TypeOfExchangeDTO; // change to userLanguageObject with a proficiency level to display proficiency bar
    description!: string;
    hobbies!: string[]; // change to DTO
    profileDate!: Date;
    location!: LocationDTO;

}
