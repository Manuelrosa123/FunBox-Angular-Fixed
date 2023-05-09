import { HttpClient } from '@angular/common/http';
//import { SERVER } from "../constants";            por ahora, no, habra que buscar los arturobers
//import { TokenResponse,UserResponse, UsersResponse} from "../../reviews/interfaces/responses";
import { UserLogin , User} from '../interfaces/user';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
    isLogged() {
      throw new Error('Method not implemented.');
    }

    constructor(private readonly http: HttpClient) { }



    // getReviews() {
    //     const resp = this.http.get<UsersResponse>(`${SERVER}/users`);
    //     return resp.users;
    // }

    /*post(user: User): Observable<UserResponse> {
        return this.http.post<UserResponse>(`auth/register`, user);
    }

    postLogin(user: UserLogin): Observable<TokenResponse> {
        return this.http.post<TokenResponse>(`auth/login`, user);
    }*/
}
