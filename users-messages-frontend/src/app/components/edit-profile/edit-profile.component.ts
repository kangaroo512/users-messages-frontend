import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { UserFormPreviewDTO } from '../../models/userFormPreviewDTO';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { UserLanguageDTO } from '../../models/userLanguageDTO';
import { HobbyDTO } from '../../models/hobbyDTO';
import { HobbyFormPreviewDTO } from '../../models/hobbies/hobbyFormPreviewDTO';
import { UserLanguageFormPreviewDTO } from '../../models/userLanguageFormPreviewDTO';
import { LanguageFormPreviewDTO } from '../../models/languageFormPreviewDTO';
import { LocationDTO } from '../../models/location';
import { TypeOfExchangeDTO } from '../../models/typeOfExchangeDTO';
import { UserUpdateDTO } from '../../models/updateModel/userUpdateDTO';

@Component({
  selector: 'edit-profile',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule, CommonModule],
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.css'
})
export class EditProfileComponent implements OnInit {

  user!: UserFormPreviewDTO;

  errors: {[key: string]: string} = {};

  //move to a seaparate class
  genders: string[] = ['Male', 'Female', 'Nonbinary', 'Other'];

  //move to separate class
  countries: string[] = [
  'AFGHANISTAN', 'ALBANIA', 'ALGERIA', 'ANDORRA', 'ANGOLA',
  'ANTIGUA_AND_BARBUDA', 'ARGENTINA', 'ARMENIA', 'AUSTRALIA', 'AUSTRIA',
  'AZERBAIJAN', 'BAHAMAS', 'BAHRAIN', 'BANGLADESH', 'BARBADOS',
  'BELARUS', 'BELGIUM', 'BELIZE', 'BENIN', 'BHUTAN',
  'BOLIVIA', 'BOSNIA_AND_HERZEGOVINA', 'BOTSWANA', 'BRAZIL', 'BRUNEI',
  'BULGARIA', 'BURKINA_FASO', 'BURUNDI', 'CABO_VERDE', 'CAMBODIA',
  'CAMEROON', 'CANADA', 'CENTRAL_AFRICAN_REPUBLIC', 'CHAD', 'CHILE',
  'CHINA', 'COLOMBIA', 'COMOROS', 'CONGO_DEMOCRATIC_REPUBLIC', 'CONGO_REPUBLIC',
  'COSTA_RICA', 'COTE_DIVOIRE', 'CROATIA', 'CUBA', 'CYPRUS',
  'CZECHIA', 'DENMARK', 'DJIBOUTI', 'DOMINICA', 'DOMINICAN_REPUBLIC',
  'ECUADOR', 'EGYPT', 'EL_SALVADOR', 'EQUATORIAL_GUINEA', 'ERITREA',
  'ESTONIA', 'ESWATINI', 'ETHIOPIA', 'FIJI', 'FINLAND',
  'FRANCE', 'GABON', 'GAMBIA', 'GEORGIA', 'GERMANY',
  'GHANA', 'GREECE', 'GRENADA', 'GUATEMALA', 'GUINEA',
  'GUINEA_BISSAU', 'GUYANA', 'HAITI', 'HONDURAS', 'HUNGARY',
  'ICELAND', 'INDIA', 'INDONESIA', 'IRAN', 'IRAQ',
  'IRELAND', 'ISRAEL', 'ITALY', 'JAMAICA', 'JAPAN',
  'JORDAN', 'KAZAKHSTAN', 'KENYA', 'KIRIBATI', 'KOREA_NORTH',
  'KOREA_SOUTH', 'KOSOVO', 'KUWAIT', 'KYRGYZSTAN', 'LAOS',
  'LATVIA', 'LEBANON', 'LESOTHO', 'LIBERIA', 'LIBYA',
  'LIECHTENSTEIN', 'LITHUANIA', 'LUXEMBOURG', 'MADAGASCAR', 'MALAWI',
  'MALAYSIA', 'MALDIVES', 'MALI', 'MALTA', 'MARSHALL_ISLANDS',
  'MAURITANIA', 'MAURITIUS', 'MEXICO', 'MICRONESIA', 'MOLDOVA',
  'MONACO', 'MONGOLIA', 'MONTENEGRO', 'MOROCCO', 'MOZAMBIQUE',
  'MYANMAR', 'NAMIBIA', 'NAURU', 'NEPAL', 'NETHERLANDS',
  'NEW_ZEALAND', 'NICARAGUA', 'NIGER', 'NIGERIA', 'NORTH_MACEDONIA',
  'NORWAY', 'OMAN', 'PAKISTAN', 'PALAU', 'PALESTINE',
  'PANAMA', 'PAPUA_NEW_GUINEA', 'PARAGUAY', 'PERU', 'PHILIPPINES',
  'POLAND', 'PORTUGAL', 'QATAR', 'ROMANIA', 'RUSSIA',
  'RWANDA', 'SAINT_KITTS_AND_NEVIS', 'SAINT_LUCIA', 'SAINT_VINCENT_AND_THE_GRENADINES', 'SAMOA',
  'SAN_MARINO', 'SAO_TOME_AND_PRINCIPE', 'SAUDI_ARABIA', 'SENEGAL', 'SERBIA',
  'SEYCHELLES', 'SIERRA_LEONE', 'SINGAPORE', 'SLOVAKIA', 'SLOVENIA',
  'SOLOMON_ISLANDS', 'SOMALIA', 'SOUTH_AFRICA', 'SOUTH_SUDAN', 'SPAIN',
  'SRI_LANKA', 'SUDAN', 'SURINAME', 'SWEDEN', 'SWITZERLAND',
  'SYRIA', 'TAIWAN', 'TAJIKISTAN', 'TANZANIA', 'THAILAND',
  'TIMOR_LESTE', 'TOGO', 'TONGA', 'TRINIDAD_AND_TOBAGO', 'TUNISIA',
  'TURKEY', 'TURKMENISTAN', 'TUVALU', 'UGANDA', 'UKRAINE',
  'UNITED_ARAB_EMIRATES', 'UNITED_KINGDOM', 'UNITED_STATES', 'URUGUAY', 'UZBEKISTAN',
  'VANUATU', 'VATICAN_CITY', 'VENEZUELA', 'VIETNAM', 'YEMEN',
  'ZAMBIA', 'ZIMBABWE'
];


  userNativeLanguages: UserLanguageFormPreviewDTO[] = [];

  userPracticeLanguages: UserLanguageFormPreviewDTO[] = [];

  errorMsg!: string;

  //move to a separate class
  languages : LanguageFormPreviewDTO[] = [
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

  submitted: boolean = false;

  //move to a seaparate class
proficiencies = [
'Beginner',
'Elementary',
'Preintermediate',
'Intermediate',
'Upperintermediate',
'Advanced',
'Proficiency'
];

//move to a separate class
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

hobbiesInput: string = '';


  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {
    this.user = new UserFormPreviewDTO();
    this.user.location = new LocationDTO();
    this.user.typeOfExchange = new TypeOfExchangeDTO();
    
    
    
  }

  ngOnInit(): void {
      this.route.paramMap.subscribe(
        params => {
          const nickname = params.get("nickname")!;
          this.userService.getUserFormPreview(nickname).subscribe({
            next : (userReceived) => {
              setTimeout(() => this.user = userReceived, 5);
              setTimeout(() => console.log(this.user), 10);
              setTimeout(() => {

                //languages

                //1) format the proficiency level of the user language objects
                userReceived.nativeLanguages.forEach(p => p.proficiencyLevel = this.stringToPascalCase(p.proficiencyLevel));
                userReceived.practicingLanguages.forEach(p => p.proficiencyLevel = this.stringToPascalCase(p.proficiencyLevel));

                this.userNativeLanguages = userReceived.nativeLanguages;
                console.log(this.userNativeLanguages);
                this.userPracticeLanguages = userReceived.practicingLanguages;

                //hobbies
                this.hobbiesInput = userReceived.hobbies.map(p => p.name).join(',');
              }, 10);
            },
            error: () => {

            }
          });
        }
      );
  }

  onSubmit(ngForm: NgForm) {
    console.log("THIS IS THE USER THAT I'M SENDING");
    console.log(this.user);
    let userUpdate: UserUpdateDTO = new UserUpdateDTO();
    userUpdate.birthDate = new Date(this.user.birthdate);
    userUpdate.description = this.user.description;
    userUpdate.gender = this.user.gender;
    userUpdate.hobbies = this.user.hobbies.map(p => p.name);
    userUpdate.location = this.user.location;
    userUpdate.nickname = this.user.nickname;
    userUpdate.typeOfExchange = this.user.typeOfExchange;
    userUpdate.userLanguageDTOs = [... this.user.nativeLanguages, ...this.user.practicingLanguages];
    console.log("THIS IS THE FIXED USER");
    console.log(userUpdate);


    // test the update
    this.userService.updateUser(userUpdate).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }  


  validateLanguageErrors() {
    let hasKeyword: boolean = Object.keys(this.errors).some(key => key.includes("userLanguageDTOs"));
    return !this.isObjectEmpty(this.errors) && hasKeyword;
  }

  isObjectEmpty(obj: any):boolean {
    return !obj || Object.keys(obj).length === 0;
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

  getFilteredLanguagePracticeList(idx: any) {
    return this.proficiencies.filter(p => {

      
      return !this.userPracticeLanguages.some((lang, i) => 
        {
          
          const formatted = lang.proficiencyLevel.charAt(0) + 
          lang.proficiencyLevel.slice(1).toLowerCase();
          return (formatted === p);
        });
        
    });
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


  stringToPascalCase(word: string) {
      const formatted = word.charAt(0) + word.slice(1).toLowerCase();
      return formatted;
  }


}
