import { Component, OnInit } from '@angular/core';
import {DrinksService} from '../../services/drinks/drinks.service';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.scss']
})
export class DrinksComponent implements OnInit {

  data: Array<any>;

  constructor(private drinksService: DrinksService,  private appComponent: AppComponent) { }

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

  public addToBasket(drink) {
    const drinkOut = {
      uuid: Date.now(),
      id: '',
      name: '',
      price: ''
    };
    drinkOut.id = drink.id;
    drinkOut.name = drink.name;
    drinkOut.price = drink.price;
    this.appComponent.addDrinks(drinkOut);
  }


  public deleteDrinkOnServer(id){
    this.drinksService.deleteDrink(id).subscribe(
      success=>{
        this.getAll();
      }
    );

  }
}
