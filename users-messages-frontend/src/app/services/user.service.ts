import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { UserPreviewDTO } from '../models/userPreviewDTO';
import { UserFormPreviewDTO } from '../models/userFormPreviewDTO';
import { UserUpdateDTO } from '../models/updateModel/userUpdateDTO';
import { UserSearchForm } from '../models/search/userSearchForm';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url: string = 'http://localhost:8080/api/v1/user/';

  constructor(private http: HttpClient) { }

  createUser(user: User) : Observable<User> {
    return this.http.post<User>(this.url, user);
  }

  readUsser(nickname: string) : Observable<UserPreviewDTO> {
    return this.http.get<UserPreviewDTO>(`${this.url}profile/${nickname}`);
  }

  getUserFormPreview(nickname: string) : Observable<UserFormPreviewDTO> {
    return this.http.get<UserFormPreviewDTO>(`${this.url}edit-profile-view/${nickname}`);
  }

  updateUser(user: UserUpdateDTO) : Observable<UserFormPreviewDTO> {
    return this.http.put<any>(`${this.url}`, user);
  }

  searchUsers(searchUser: UserSearchForm) : Observable<any> {
    return this.http.post<any>(`${this.url}search-user/${0}`, searchUser);
  }



  

  
}
