import { Component, OnInit } from '@angular/core';
import {DrinksService} from '../../services/drinks/drinks.service';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.scss']
})
export class DrinksComponent implements OnInit {

  data: Array<any>;

  constructor(private drinksService: DrinksService) { }

  ngOnInit() {
    this.getAll();
  }

  private getAll() {
    this.drinksService.getAllDrinks().subscribe(
      (res: any) => {
        this.data = res;
      }
    );
  }

}
