import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TUser } from '../interface/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  API_URL: string = 'http://localhost:3000';

  Register = (userdata: any) => {
    return this.http.post(this.API_URL + '/register', userdata);
  };
  Login = (userdata: any) => {
    return this.http.post(this.API_URL + '/login', userdata);
  };
}
