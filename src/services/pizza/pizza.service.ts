import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class PizzaService {

  constructor(private http: HttpClient) { }

  getAllPizza(): Observable<any> {
    return this.http.get('http://localhost:8080/pizzas');
  }

  deletePizza(id): Observable<any>{
    return this.http.delete('http://localhost:8080/pizza'+id);
  }

  addPizza(pizza): Observable<any>{
    return this.http.post('http://localhost:8080/pizza', pizza);
  }
}
