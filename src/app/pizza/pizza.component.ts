import { Component, OnInit } from '@angular/core';
import {PizzaService} from '../../services/pizza/pizza.service';
import {SaucesService} from '../../services/sauce/sauces.service';
import {SizepizzaService} from '../../services/sizepizza/sizepizza.service';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.scss']
})
export class PizzaComponent implements OnInit {

  data: Array<any>;
  sizes: Array<any>;
  sizePizza = null;

  constructor(private pizzaService: PizzaService, private sizeServise: SizepizzaService, private appComponent: AppComponent) { }

  ngOnInit() {
    this.getAll();
    this.getAllSize();
  }

  private getAll() {
    this.pizzaService.getAllPizza().subscribe(
      (res: any) => {
        this.data = res;
      }
    );
  }

  private getAllSize() {
    this.sizeServise.getAllSize().subscribe(
      (res: any) => {
        this.sizes = res;
        this.sizePizza = this.sizes[this.sizes.length - 1];
      }
    );
  }

  public addToBasket(pizza, sizePizza) {
    const pizzaOut = {
      uuid: Date.now(),
      id: '',
      name: '',
      size: '',
      price: ''
    };
    pizzaOut.id = pizza.id;
    pizzaOut.name = pizza.name;
    pizzaOut.size = sizePizza;
    pizzaOut.price = pizza.price;
    this.appComponent.addPizza(pizzaOut);
  }
}
