import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/auth/interfaces/user';
import { map, Observable } from 'rxjs';
//import { UserResponse } from 'src/app/reviews/interfaces/responses';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private readonly http: HttpClient) {}

  /*getMyUser(): Observable<User> {
    return this.http
    .get<UserResponse>('users/me')
    .pipe(map((r) => r.user));
  }*/

  nameEdit(name:string, email:string): Observable<User>{
    return this.http.put<User>(`users/me`, ({name,email}));
  }

  passwdEdit(password:string): Observable<User>{
    return this.http.put<User>(`users/me/password`, ({password}));
  }

  avatarEdit(avatar:string): Observable<User>{
    return this.http.put<User>(`users/me/avatar`, ({avatar}));
  }
}
