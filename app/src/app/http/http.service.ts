import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user/user.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {}

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:3000/users');
  }

  public login(email: string, password: string) {
    return this.http.post('http://localhost:3000/login', {email: email, password: password});
  }

  public register(username: string, email: string, password: string) {
    return this.http.post('http://localhost:3000/register', {username: username, email: email, password: password});
  }
}
