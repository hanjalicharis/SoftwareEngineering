import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class RegisterService {

    constructor(private http: HttpClient) { }

    rootURL = 'http://localhost:3000/api';

    registerUser(user: any) {
        return this.http.post(this.rootURL + '/users/register', user, { observe: 'response' });
    }

}