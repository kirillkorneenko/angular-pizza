import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class SaucesService {


  constructor(private http: HttpClient) { }

  getAllSauce(): Observable<any> {
    return this.http.get('http://localhost:8080/sauces');
  }

  deleteSauce(id): Observable<any> {
    return this.http.delete('http://localhost:8080/sauce'+id);
  }

  addSauce(sauce): Observable<any>{
    return this.http.post('http://localhost:8080/sauce', sauce);
  }
}
