import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  registration(user): Observable<any> {
    return this.http.post('http://localhost:8080/registration', user);
  }

  authorization(user): Observable<any>{
    return this.http.post('http://localhost:8080/authorization', user);
  }

  getUser(login): Observable<any>{
    return this.http.get('http://localhost:8080/user'+login);
  }
}
