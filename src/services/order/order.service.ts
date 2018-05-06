import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class OrderService {

  constructor(private http: HttpClient) { }

    checkout(order): Observable<any> {
        return this.http.post('http://localhost:8080/order', order);
    }

     getAll(): Observable<any> {
         return this.http.get('http://localhost:8080/orders');
    }

    confirmedOrder(order):Observable<any> {
      return this.http.put('http://localhost:8080/confirmedOrder', order);
    }

  paidForOrder(order):Observable<any> {
    return this.http.put('http://localhost:8080/paidForOrder', order);
  }

}
