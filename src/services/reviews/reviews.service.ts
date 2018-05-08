import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ReviewsService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get('http://localhost:8080/reviews');
  }

  addReviews(reviews): Observable<any>{
    return this.http.post('http://localhost:8080/reviews', reviews);
  }

  deleteSauce(id): Observable<any> {
    return this.http.delete('http://localhost:8080/reviews'+id);
  }
}
