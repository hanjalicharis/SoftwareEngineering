import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    constructor(private http: HttpClient) { }

    rootURL = 'http://localhost:3000/api';

    loginUser(user: any) {
        return this.http.post(this.rootURL + '/users/login', user, { observe: 'response' });
    }

}