import { Component, OnInit } from '@angular/core';
import {PizzaService} from '../../services/pizza/pizza.service';
import {SaucesService} from '../../services/sauce/sauces.service';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.scss']
})
export class PizzaComponent implements OnInit {

  data: Array<any>;

  constructor(private pizzaService: PizzaService) { }


  ngOnInit() {
    this.getAll();
  }

  private getAll() {
    this.pizzaService.getAllPizza().subscribe(
      (res: any) => {
        this.data = res;
      }
    );
  }
}
