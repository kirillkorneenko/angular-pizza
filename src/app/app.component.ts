import { Component } from '@angular/core';
import {OrderComponent} from './order/order.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  private _pizzaList = new Array<any> ();
  private _sauceList = new Array<any> ();
  private _drinksList = new Array<any> ();
  constructor() {}

  public addPizza(pizza) {
    this._pizzaList.push(pizza);
  }

  public addSauce(sauce) {
    this._sauceList.push(sauce);
  }
  public addDrinks(drinks) {
    this._drinksList.push(drinks);
  }

  public deletePizza(pizzaDelete) {
    this._pizzaList = this._pizzaList.filter(obj => obj !== pizzaDelete);
  }
  public deleteDrinks(drinks) {
    this._drinksList = this._drinksList.filter(obj => obj !== drinks);
  }
  public deleteSauce(sauce) {
    this._sauceList = this._sauceList.filter(obj => obj !== sauce);
  }

  public getTotalCost() {

    var totalCost = 0;

    this._pizzaList.forEach(function(item) {
      totalCost += item.price;
    });
    this._sauceList.forEach(function(item) {
      totalCost += item.price;
    });
    this._drinksList.forEach(function(item) {
      totalCost += item.price;
    });

    return totalCost;
  }

  public clearBasket(){
    this._pizzaList = new Array<any> ();
  this._sauceList = new Array<any> ();
   this._drinksList = new Array<any> ();
  }


  get pizzaList(): any[] {
    return this._pizzaList;
  }

  get sauceList(): any[] {
    return this._sauceList;
  }

  get drinksList(): any[] {
    return this._drinksList;
  }
}
