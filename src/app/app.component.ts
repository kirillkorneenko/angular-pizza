import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  pizzaList = [];
  sauceList = new Array<any> ();
  drinksList = new Array<any> ();

  constructor() {}

  public addPizza(pizza) {
    this.pizzaList.push(pizza);
  }

  public addSauce(sauce) {
    this.sauceList.push(sauce);
  }
  public addDrinks(drinks) {
    this.drinksList.push(drinks);
  }

  public deletePizza(pizzaDelete) {
    this.pizzaList = this.pizzaList.filter(obj => obj !== pizzaDelete);
  }
  public deleteDrinks(drinks) {
    this.drinksList = this.drinksList.filter(obj => obj !== drinks);
  }
  public deleteSauce(sauce) {
    this.sauceList = this.sauceList.filter(obj => obj !== sauce);
  }


}
