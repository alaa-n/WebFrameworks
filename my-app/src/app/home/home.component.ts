import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  clickCounter: number = 0;
  name: string = '';

  countClick() {
    this.clickCounter += 1;
  }
}
