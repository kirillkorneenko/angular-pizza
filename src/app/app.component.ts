import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public windowOpen() {
    document.getElementById('modal-shadow').style.display = 'block';
    document.getElementById('modal-window').style.display = 'block';
  }

  public windowClose() {
    document.getElementById('modal-shadow').style.display = 'none';
    document.getElementById('modal-window').style.display = 'none';
  }


}
