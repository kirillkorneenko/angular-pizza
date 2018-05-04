import { Component, OnInit } from '@angular/core';
import {ContactsService} from '../../services/contacts/contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  private _data: Array<any>;

  constructor(private contactsService: ContactsService) { }

  ngOnInit() {
    this.getAll();
  }

  private getAll() {
    this.contactsService.getContacts().subscribe(
      (res: any) => {
        this._data = res;
      }
    );
  }
}
