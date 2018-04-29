import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class PizzaService {

  constructor(private http: HttpClient) { }

  getAllPizza(): Observable<any> {
    return this.http.get('http://localhost:8080/pizzas');
  }

}
