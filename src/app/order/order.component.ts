import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../app.component';
import {OrderService} from '../../services/order/order.service';
import {ContactsComponent} from '../contacts/contacts.component';
import {ContactsService} from '../../services/contacts/contacts.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {


  private address: Array<any>;

  order = {
    phone : '',
    name: '',
    surname : '',
    address: '',
    comment: '',
    cookingTime: '',
    totalCost: null,
    pizzaList : [],
    sauceList: [],
    drinksList: []
};

  constructor(private appComponent: AppComponent, private orderService: OrderService, private contactsService:ContactsService) { }

  ngOnInit() {
    this.getAllAddress();
  }

  public checkout() {
    this.order.pizzaList = this.appComponent.pizzaList;
    this.order.drinksList = this.appComponent.drinksList;
    this.order.sauceList = this.appComponent.sauceList;
    this.order.totalCost = this.appComponent.getTotalCost();
    this.orderService.checkout(this.order).subscribe();
  }

  private getAllAddress() {
    this.contactsService.getContacts().subscribe(
      (res: any) => {
        this.address = res;
      }
    );
  }

}
