import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class SizepizzaService {

  constructor(private http: HttpClient) { }

  getAllSize(): Observable<any> {
    return this.http.get('http://localhost:8080/sizepizza');
  }
}
