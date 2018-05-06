import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user/user.service';

@Component({
  selector: 'app-enter',
  templateUrl: './enter.component.html',
  styleUrls: ['./enter.component.scss']
})
export class EnterComponent implements OnInit {

  passwordOne:'';
  passwordTwo:'';

  user={
    login:'',
    password:'',
    name:'',
    surname:'',
    phone:'',
    email:'',
  };

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  public registration(){
    if(this.passwordOne === this.passwordTwo){
      this.userService.registration(this.user).subscribe();
    }
    else {
      alert("Пароли не совпадают");
    }
  }
}
