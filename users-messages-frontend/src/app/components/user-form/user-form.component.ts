import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { User } from '../../models/user';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule, NgFor } from '@angular/common';
import { LocationDTO } from '../../models/location';
import { TypeOfExchangeDTO } from '../../models/typeOfExchangeDTO';
import { UserLanguageDTO } from '../../models/userLanguageDTO';
import { UserService } from '../../services/user.service';
import { LanguageDTO } from '../../models/languageDTO';
import { HobbyDTO } from '../../models/hobbyDTO';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [RouterModule, FormsModule, NgFor, CommonModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent implements OnInit{

  user: User;

  userNativeLanguages!: UserLanguageDTO[];

  userPracticeLanguages!: UserLanguageDTO[];

  userNativeErrors!:{[key:string]: string};

  submitted: boolean = false;

languages = [
  { isoCode: 'es', name: 'Spanish' },
  { isoCode: 'fr', name: 'French' },
  { isoCode: 'de', name: 'German' },
  { isoCode: 'pt', name: 'Portuguese' },
  { isoCode: 'ru', name: 'Russian' },
  { isoCode: 'ar', name: 'Arabic' },
  { isoCode: 'zh', name: 'Mandarin Chinese' },
  { isoCode: 'hi', name: 'Hindi' },
  { isoCode: 'ja', name: 'Japanese' },
  { isoCode: 'ko', name: 'Korean' },
  { isoCode: 'it', name: 'Italian' },
  { isoCode: 'nl', name: 'Dutch' },
  { isoCode: 'sw', name: 'Swahili' },
  { isoCode: 'pl', name: 'Polish' },
  { isoCode: 'vi', name: 'Vietnamese' },
  { isoCode: 'he', name: 'Hebrew' },
  { isoCode: 'th', name: 'Thai' },
  { isoCode: 'el', name: 'Greek' },
  { isoCode: 'tr', name: 'Turkish' },
  { isoCode: 'no', name: 'Norwegian' },
  { isoCode: 'fi', name: 'Finnish' },
  { isoCode: 'sv', name: 'Swedish' },
  { isoCode: 'da', name: 'Danish' },
  { isoCode: 'cs', name: 'Czech' },
  { isoCode: 'hu', name: 'Hungarian' },
  { isoCode: 'ro', name: 'Romanian' },
  { isoCode: 'uk', name: 'Ukrainian' },
  { isoCode: 'bn', name: 'Bengali' },
  { isoCode: 'ms', name: 'Malay' },
  { isoCode: 'id', name: 'Indonesian' },
  { isoCode: 'sk', name: 'Slovak' },
  { isoCode: 'sl', name: 'Slovenian' },
  { isoCode: 'hr', name: 'Croatian' },
  { isoCode: 'sr', name: 'Serbian' },
  { isoCode: 'bg', name: 'Bulgarian' },
  { isoCode: 'et', name: 'Estonian' },
  { isoCode: 'lv', name: 'Latvian' },
  { isoCode: 'lt', name: 'Lithuanian' },
  { isoCode: 'fa', name: 'Persian' },
  { isoCode: 'ur', name: 'Urdu' },
  { isoCode: 'ps', name: 'Pashto' },
  { isoCode: 'am', name: 'Amharic' },
  { isoCode: 'yo', name: 'Yoruba' },
  { isoCode: 'ig', name: 'Igbo' },
  { isoCode: 'zu', name: 'Zulu' },
  { isoCode: 'xh', name: 'Xhosa' },
  { isoCode: 'st', name: 'Sesotho' },
  { isoCode: 'ha', name: 'Hausa' },
  { isoCode: 'fil', name: 'Filipino' },
  { isoCode: 'tl', name: 'Tagalog' },
  { isoCode: 'jv', name: 'Javanese' },
  { isoCode: 'su', name: 'Sundanese' },
  { isoCode: 'my', name: 'Burmese' },
  { isoCode: 'km', name: 'Khmer' },
  { isoCode: 'lo', name: 'Lao' },
  { isoCode: 'mn', name: 'Mongolian' },
  { isoCode: 'ka', name: 'Georgian' },
  { isoCode: 'hy', name: 'Armenian' },
  { isoCode: 'az', name: 'Azerbaijani' },
  { isoCode: 'kk', name: 'Kazakh' },
  { isoCode: 'uz', name: 'Uzbek' },
  { isoCode: 'tg', name: 'Tajik' },
  { isoCode: 'ky', name: 'Kyrgyz' },
  { isoCode: 'tk', name: 'Turkmen' },
  { isoCode: 'ta', name: 'Tamil' },
  { isoCode: 'te', name: 'Telugu' },
  { isoCode: 'kn', name: 'Kannada' },
  { isoCode: 'ml', name: 'Malayalam' },
  { isoCode: 'mr', name: 'Marathi' },
  { isoCode: 'gu', name: 'Gujarati' },
  { isoCode: 'pa', name: 'Punjabi' },
  { isoCode: 'si', name: 'Sinhala' },
  { isoCode: 'ne', name: 'Nepali' },
  { isoCode: 'dz', name: 'Dzongkha' },
  { isoCode: 'bo', name: 'Tibetan' },
  { isoCode: 'mi', name: 'Maori' },
  { isoCode: 'sm', name: 'Samoan' },
  { isoCode: 'to', name: 'Tongan' },
  { isoCode: 'fj', name: 'Fijian' },
  { isoCode: 'haw', name: 'Hawaiian' },
  { isoCode: 'eu', name: 'Basque' },
  { isoCode: 'ca', name: 'Catalan' },
  { isoCode: 'gl', name: 'Galician' },
  { isoCode: 'cy', name: 'Welsh' },
  { isoCode: 'ga', name: 'Irish' },
  { isoCode: 'gd', name: 'Scottish Gaelic' },
  { isoCode: 'br', name: 'Breton' },
  { isoCode: 'co', name: 'Corsican' },
  { isoCode: 'oc', name: 'Occitan' },
  { isoCode: 'lb', name: 'Luxembourgish' },
  { isoCode: 'is', name: 'Icelandic' },
  { isoCode: 'kl', name: 'Greenlandic' },
  { isoCode: 'iu', name: 'Inuktitut' },
  { isoCode: 'qu', name: 'Quechua' },
  { isoCode: 'ay', name: 'Aymara' },
  { isoCode: 'gn', name: 'Guarani' },
  { isoCode: 'arn', name: 'Mapudungun' },
  { isoCode: 'nah', name: 'Nahuatl' },
  { isoCode: 'chr', name: 'Cherokee' }
];


proficiencies = [
'Beginner',
'Elementary',
'Preintermediate',
'Intermediate',
'Upperintermediate',
'Advanced',
'Proficiency'
];

chatSoftwares: string[] = [
  'WHATSAPP',
  'TELEGRAM',
  'SIGNAL',
  'FACEBOOK_MESSENGER',
  'INSTAGRAM',
  'SNAPCHAT',
  'WECHAT',
  'LINE',
  'VIBER',
  'DISCORD',
  'SKYPE',
  'MICROSOFT_TEAMS',
  'SLACK',
  'ZOOM_CHAT',
  'GOOGLE_CHAT',
  'THREEMA',
  'KIK',
  'ICQ',
  'TANGO',
  'IMO'
];

genders: string[] = ['Male', 'Female', 'Nonbinary', 'Other'];

hobbiesInput: string = '';



  errorMsg : string;

  errors: {[key: string]: string} = {};



  ngOnInit() {

    this.userNativeLanguages = [{language: new LanguageDTO(), proficiencyLevel:'Native'}]
    this.userPracticeLanguages = [{language: new LanguageDTO(), proficiencyLevel:''}]

  }


  constructor(private userService:UserService) {
    this.user = new User();
    this.user.location = new LocationDTO();
    this.user.typeOfExchange = new TypeOfExchangeDTO();
    this.errorMsg = '';

    this.userNativeErrors = {};
  }

  onSubmit(ngForm: NgForm) {

    this.submitted = true;

    //check errors

    let combined = [...this.userNativeLanguages, ...this.userPracticeLanguages];
    this.user.userLanguageDTOs = combined;
    console.log(this.user);

    this.userService.createUser(this.user).subscribe({
      next: (u) => {
        console.log(u);
        
      },
      error: (err) => {
        this.errors = err.error;
        console.log(this.errors);
      }
    });


    

  }

    addField() :void {

    if (this.userNativeLanguages.length >= 5) { // Example limit
      this.errorMsg = 'Maximum 5 fields allowed.';
    } else {
      let userLanguageDTO: UserLanguageDTO = new UserLanguageDTO();
      userLanguageDTO.proficiencyLevel = "Native";
      this.userNativeLanguages.push(userLanguageDTO);
      this.errorMsg = ''; // Clear error
    }

  }

  deleteField(index: number) : void {
    if(this.userNativeLanguages.length > 1) {
      this.userNativeLanguages.splice(index, 1);
      this.errorMsg = '';
    } else {
      this.errorMsg = 'There must be at least one language';
    }
  }




    addPracticeField() :void {

    if (this.userPracticeLanguages.length >= 5) { // Example limit
      this.errorMsg = 'Maximum 5 fields allowed.';
    } else {
      this.userPracticeLanguages.push(new UserLanguageDTO());
      this.errorMsg = ''; // Clear error
    }

  }

  deletePracticeField(index: number) : void {
    if(this.userPracticeLanguages.length > 1) {
      this.userPracticeLanguages.splice(index, 1);
      this.errorMsg = '';
    } else {
      this.errorMsg = 'There must be at least one language';
    }
  }

  formatChatSoftwareOption(value: string): string {
    if (value.includes('_')) {
      return value
        .toLowerCase()
        .split('_')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    } else {
        return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
    }
  }

  processHobbies() {
  this.user.hobbies = this.hobbiesInput
    .split(',')
    .map(h => h.trim())
    .filter(h => h.length > 0 && /^[a-zA-Z\s]+$/.test(h))
    .map(h => {
      var hobby: HobbyDTO = new HobbyDTO();
      hobby.name = h;
      return hobby;
    });
  }


  processNativeLanguageErrors() {

  }

  isObjectEmpty(obj: any):boolean {
    return !obj || Object.keys(obj).length === 0;
  }

  validateLanguageErrors() {
    let hasKeyword: boolean = Object.keys(this.errors).some(key => key.includes("userLanguageDTOs"));
    return !this.isObjectEmpty(this.errors) && hasKeyword;
  }






}
