import { Component, OnInit } from '@angular/core';
import {PizzaService} from '../../services/pizza/pizza.service';
import {SizepizzaService} from '../../services/sizepizza/sizepizza.service';
import {AppComponent} from '../app.component';
import {PastryService} from '../../services/pastry/pastry.service';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.scss']
})
export class PizzaComponent implements OnInit {

  data: Array<any>;
  sizes: Array<any>;
  pastryies: Array<any>;


  constructor(private pizzaService: PizzaService, private sizeServise: SizepizzaService, private appComponent: AppComponent, private pastryService: PastryService) { }

  ngOnInit() {
    this.getAll();
    this.getAllSize();
    this.getAllPastry();
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
      }
    );
  }

  private getAllPastry() {
    this.pastryService.getAllPastry().subscribe(
      (res: any) => {
        this.pastryies = res;
      }
    );
  }

  public addToBasket(pizza, sizePizza, pastry) {
    const pizzaOut = {
      uuid: Date.now(),
      id: '',
      name: '',
      size: '',
      pastry: '',
      price: null
    };
    const itemSize = this.sizes.find(i => i.size === sizePizza);
    const itemPastry = this.pastryies.find(i => i.kind === pastry);
    pizzaOut.id = pizza.id;
    pizzaOut.name = pizza.name;
    pizzaOut.size = itemSize;
    pizzaOut.pastry = itemPastry;
    pizzaOut.price = ((pizza.price * itemSize.coefficient)+ (itemPastry.price*itemSize.coefficient));
    this.appComponent.addPizza(pizzaOut);
  }

  public calcCall(pizz, size, pastry) {
    const itemSize = this.sizes.find(i => i.size === size);
    const itemPastry = this.pastryies.find(i => i.kind === pastry);
    return ((pizz.caloricity * itemSize.coefficient)+(itemPastry.caloricity*itemSize.coefficient));
  }

  public calcPrice(pizz, size, pastry) {
    const itemSize = this.sizes.find(i => i.size === size);
    const itemPastry = this.pastryies.find(i => i.kind === pastry);
    return ((pizz.price * itemSize.coefficient)+ (itemPastry.price*itemSize.coefficient));
  }
}
