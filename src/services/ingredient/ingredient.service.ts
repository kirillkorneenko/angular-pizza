import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class IngredientService {

  constructor(private http: HttpClient) { }

  addIngredient(ingredient): Observable<any>{
    return this.http.post('http://localhost:8080/ingredient', ingredient);
  }

  getAllIngredient(): Observable<any> {
    return this.http.get('http://localhost:8080/ingredient');
  }

}
