import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user/user.service';
import {HasRoleDirective} from '../../directive/has-role.directive';

@Component({
  selector: 'app-enter',
  templateUrl: './enter.component.html',
  styleUrls: ['./enter.component.scss']
})
export class EnterComponent implements OnInit {

  isAut = false;
  isRegist = false;

  passwordOne:'';
  passwordTwo:'';
  private flag = true;
  user={
    login:'',
    password:'',
    name:'',
    surname:'',
    phone:'',
    email:'',
  };

  userAuthorization = {
    login:'',
    password:''
}

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  public registration(){
    if(this.passwordOne == this.passwordTwo){
      this.user.password= this.passwordOne;
      this.userService.registration(this.user).subscribe();

      this.userService.getUser(this.user.login).subscribe(
        user=> {
          if(user.confirmation == "true"){
          localStorage.setItem("user", JSON.stringify(user));}
          if(user.confirmation == "false") {
            alert("Пройдите подтвержение по email");
          }
        });

      this.user.login ='';
      this.user.password ='';
      this.user.name ='';
      this.user.surname ='';
      this.user.phone ='';
      this.user.email ='';
      this.isRegist=!this.isRegist;
    }
    else {
      alert("Пароли не совпадают");
    }
  }

  public authorization(){
    this.userService.authorization(this.userAuthorization).subscribe(
      user=> {
        if (user != null) {
        if(user.confirmation == "true"){

          localStorage.setItem("user", JSON.stringify(user));
          this.isAut =! this.isAut;
        }
          if(user.confirmation == "false") {
            alert("Пройдите подтвержение по email");
          }
        }

      },
      error=>{
        this.userAuthorization.login = '';
        this.userAuthorization.password = '';
        this.flag = !this.flag;
        // alert("Ошибка авторизации");
      }
    )
  }
}
