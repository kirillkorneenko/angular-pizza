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

  private isOrder = true;

  private addressList: Array<any>;

  order = {
    phone : '',
    name: '',
    surname : '',
    address: null,
    comment: '',
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
    if(localStorage.getItem("user")){
      const user = JSON.parse(localStorage.getItem("user"));
      this.order.name =  user.name;
      this.order.phone =  user.phone;
      this.order.surname =  user.surname;
    }
    this.order.pizzaList = this.appComponent.pizzaList;
    this.order.drinksList = this.appComponent.drinksList;
    this.order.sauceList = this.appComponent.sauceList;
    this.order.totalCost = this.appComponent.getTotalCost();
    this.orderService.checkout(this.order).subscribe();
    this.appComponent.clearBasket();
    this.clickOrder();
  }

  private getAllAddress() {
    this.contactsService.getContacts().subscribe(
      (res: any) => {
        this.addressList = res;
      }
    );
  }

  public clickOrder(){
    this.isOrder= !this.isOrder;
  }

  public isAut(){
    if(localStorage.getItem("user")){
      return true;
    }
  }
}
