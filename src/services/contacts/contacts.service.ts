import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ContactsService {

  constructor(private http: HttpClient) { }


  getContacts(): Observable<any> {
    return this.http.get('http://localhost:8080/contacts');
  }
}
