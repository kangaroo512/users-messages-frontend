import { TypeOfExchangeDTO } from "../typeOfExchangeDTO";
import { LanguageNativeSearchForm } from "./languageNativeSearchForm";
import { LanguagePracticeSearchForm} from "./languagePracticeSearchForm";
import { LocationSearchForm } from "./locationSearchForm";
import { TypeExchangeSearchForm } from "./typeExchangeSearchForm";

export class UserSearchForm {


    nickname!:string;
    gender!:string;
    fromAge!:number;
    toAge!:number;
    //hobbyNames!: string[];
    location!:LocationSearchForm;
    spokenLanguage!: LanguageNativeSearchForm;
    practiceLanguage!:LanguagePracticeSearchForm;
    contactMethod!:TypeExchangeSearchForm;


    
}