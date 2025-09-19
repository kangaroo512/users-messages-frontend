import { LocationDTO } from "../location";
import { TypeOfExchangeDTO } from "../typeOfExchangeDTO";
import { UserLanguageDTO } from "../userLanguageDTO";

export class UserUpdateDTO {


	nickname!: string;

	
	gender!: string;


	location!: LocationDTO;


	birthDate!: Date;


	userLanguageDTOs!: UserLanguageDTO[];

	
	typeOfExchange!: TypeOfExchangeDTO;

	description!: string;

	hobbies!: string[];

}