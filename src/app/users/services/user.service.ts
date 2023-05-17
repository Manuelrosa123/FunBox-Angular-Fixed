import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/auth/interfaces/user';
import { map, Observable } from 'rxjs';
import { UserResponse } from 'src/app/reviews/interfaces/responses';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private readonly http: HttpClient) {}

  getUserId(_id:string):Observable<User>{
    return this.http
      .get<UserResponse>(`users/${_id}`)
      .pipe(map((u) => u.user));
  }

  nameEdit(name:string, _id:string): Observable<User>{
    return this.http.put<User>(`users/${_id}/name`, ({name}));
  }

  emailEdit(email:string, _id:string): Observable<User>{
    return this.http.put<User>(`users/${_id}/email`, ({email}));
  }

  passwdEdit(password:string, _id:string): Observable<User>{
    return this.http.put<User>(`users/${_id}/password`, ({password}));
  }

  avatarEdit(avatar:string, _id:string): Observable<User>{
    return this.http.put<User>(`users/${_id}/avatar`, ({avatar}));
  }
}
