import { HttpClient } from '@angular/common/http';
//import { SERVER } from "../constants";            por ahora, no, habra que buscar los arturobers
import { TokenResponse,UserResponse, UsersResponse} from "../../reviews/interfaces/responses";
import { UserLogin , User} from '../interfaces/user';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

    constructor(private readonly http: HttpClient) { }

    register(user: User): Observable<UserResponse> {
        return this.http.post<UserResponse>('users', user);
    }

    login(user: UserLogin): Observable<TokenResponse> {
        return this.http.post<TokenResponse>('users/login', user);
    }
}
