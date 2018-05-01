import { Component, OnInit } from '@angular/core';
import {SaucesService} from '../../services/sauce/sauces.service';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-sauces',
  templateUrl: './sauces.component.html',
  styleUrls: ['./sauces.component.scss']
})
export class SaucesComponent implements OnInit {

  data: Array<any>;

//   sauce = {
//     id: null,
//     name: null,
//   description: null,
//   urlImg : null,
//   price: null
// };

  constructor(private saucesService: SaucesService,  private appComponent: AppComponent) { }

  ngOnInit() {
    this.getAll();
  }

  private getAll() {
    this.saucesService.getAllSauce().subscribe(
      (res: any) => {
      this.data = res;
    }
    );
  }

  public addToBasket(sauce) {
    const sauceOut = {
      uuid: Date.now(),
      id: '',
      name: '',
      price: ''
    };
    sauceOut.id = sauce.id;
    sauceOut.name = sauce.name;
    sauceOut.price = sauce.price;
    this.appComponent.addSauce(sauceOut);
  }
}
