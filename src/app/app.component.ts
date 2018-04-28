import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  registrationFlag = false;

  public clicRegistration() {
    this.registrationFlag = !this.registrationFlag;
  }
}
