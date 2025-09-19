import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ReferenceInfo } from '../../models/references/referenceInfo';
import { UserSearchForm } from '../../models/search/userSearchForm';
import { LanguagePracticeSearchForm} from '../../models/search/languagePracticeSearchForm';
import { TypeExchangeSearchForm } from '../../models/search/typeExchangeSearchForm';
import { LocationSearchForm } from '../../models/search/locationSearchForm';
import { UserService } from '../../services/user.service';
import { LanguageNativeSearchForm } from '../../models/search/languageNativeSearchForm';

@Component({
  selector: 'search',
  standalone: true,
  imports: [RouterModule, NgIf, FormsModule, NgFor],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  activeTab : string = 'search';

  referenceInfo : ReferenceInfo = new ReferenceInfo();

  user!:UserSearchForm;

  chatFlag: boolean = false;

  selectTab(tab: string) {
    this.activeTab = tab;
  }

  constructor(private userService: UserService) {
    this.user = new UserSearchForm();


    this.user.location = {
      country:'',
      city:'',
      state:''
    };
    this.user.practiceLanguage = {
      fromLevel:'',
      toLevel:'',
      languageName:''
    };
    this.user.spokenLanguage = {
      name:'',
      proficiencyLevel:'NATIVE'
    };
    this.user.contactMethod = {
      chatSoftware:'ANY',
      isCorrespondencePenPal:false,
      isFaceToFaceConversation:false
    };
    this.user.gender = '';
    this.user.nickname = '';
    this.user.fromAge = 0;
    this.user.toAge = 99;
    this.user.gender = '';
    

  }

  onSearchSubmit() {
    console.log(this.user);
    //AFTER CALLING METHOD
    this.userService.searchUsers(this.user).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (err) => {
        console.log(err);
      }
    });
    
  }


  stringToPascalCase(word: string) {
      const formatted = word.charAt(0) + word.slice(1).toLowerCase();
      return formatted;
  }

  chatSoftFlag() {
    if(this.chatFlag) {
      this.chatFlag = false;
    } else {
      this.chatFlag = true;
    }
  }

  onAgeInput(event: any) {
    const value = event.target.value;
    if(value > 99) {
      event.target.value = 99;
    }
    if(value < 0) {
      event.target.value= 0;
    }
  }

  

}
