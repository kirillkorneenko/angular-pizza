import { Component, OnInit } from '@angular/core';
import {SaucesService} from '../../services/sauce/sauces.service';

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

  constructor(private saucesService: SaucesService) { }

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
}
