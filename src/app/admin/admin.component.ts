import { Component, OnInit } from '@angular/core';
import {OrderService} from '../../services/order/order.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  data: Array<any>;

  constructor(private orderService:OrderService) { }

  ngOnInit() {
  this.getAll();
  }

  private getAll() {
    this.orderService.getAll().subscribe(
      (res: any) => {
        this.data = res;
      }
    );
  }

  public confirmedOrder(order){
    this.orderService.confirmedOrder(order).subscribe(
      success=>{
        this.getAll();
      }
    );
  }

  public paidForOrder(order){
    this.orderService.paidForOrder(order).subscribe(
      success=>{
        this.getAll();
      }
    );
  }
}
