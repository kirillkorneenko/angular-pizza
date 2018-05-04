import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class PastryService {

  constructor(private http: HttpClient) { }

  getAllPastry(): Observable<any> {
    return this.http.get('http://localhost:8080/pastry');
  }

}
