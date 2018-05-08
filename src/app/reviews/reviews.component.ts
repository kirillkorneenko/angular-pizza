import { Component, OnInit } from '@angular/core';
import {ReviewsService} from '../../services/reviews/reviews.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {

  data: Array<any>;
  reviews ={
    text:'Мы будем рады, если вы оставите здесь свой комментарий о нашей пиццерии.'
  };


  constructor(private reviewsService:ReviewsService) { }


  ngOnInit() {
    this.getAll();
  }

  private getAll() {
    this.reviewsService.getAll().subscribe(
      (res: any) => {
        this.data = res;
      }
    );
  }

  public addReviews(){
    this.reviewsService.addReviews(this.reviews).subscribe(
      success=>{
        this.getAll();
      }
    );
    this.reviews.text='Спасибо!';
}

public deleteReviews(item){
  this.reviewsService.deleteSauce(item.id).subscribe(
    success=>{
      this.getAll();
    }
  );
}
}
