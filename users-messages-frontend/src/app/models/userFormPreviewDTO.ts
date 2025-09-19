import { HobbyFormPreviewDTO } from "./hobbies/hobbyFormPreviewDTO";
import { LanguageDTO } from "./languageDTO";
import { LocationDTO } from "./location";
import { TypeOfExchangeDTO } from "./typeOfExchangeDTO";
import { UserLanguageDTO } from "./userLanguageDTO";
import { UserLanguageFormPreviewDTO } from "./userLanguageFormPreviewDTO";

export class UserFormPreviewDTO {

    nickname!: string;
	gender!: string;
	birthdate!: Date;
	nativeLanguages!: UserLanguageFormPreviewDTO[]; // change in back
	practicingLanguages!: UserLanguageFormPreviewDTO[]; // change in back
	typeOfExchange!: TypeOfExchangeDTO;
	description!: string;
	hobbies!: HobbyFormPreviewDTO[];
	//private Date lastLogin;
	location!: LocationDTO;

}