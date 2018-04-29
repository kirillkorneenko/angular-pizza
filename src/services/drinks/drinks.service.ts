import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class DrinksService {

  constructor(private http: HttpClient) { }


  getAllDrinks(): Observable<any> {
  return this.http.get('http://localhost:8080/drinks');
}
}
