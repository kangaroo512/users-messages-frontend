import { Routes } from '@angular/router';
import { UserFormComponent } from './components/user-form/user-form.component';
import { SearchComponent } from './components/search/search.component';
import { MessageBoxComponent } from './components/message-box/message-box.component';
import { ReadConversationComponent } from './components/read-conversation/read-conversation.component';
import { ProfileComponent } from './components/profile/profile.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';

export const routes: Routes = [
    {path:"create-user", component: UserFormComponent},
    {path:"search", component: SearchComponent},
    {path:"messages", component: MessageBoxComponent},
    {path:"readConversation", component:ReadConversationComponent},
    {path:"profile/:nickname", component:ProfileComponent},
    {path:"edit-profile/:nickname", component: EditProfileComponent},
];
