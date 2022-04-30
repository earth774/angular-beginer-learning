import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  sqaureWidth = 250;
  sqaureHeight = 100;
  testClick() {
    console.log(`test binding`);
  }

  testNumberChange(value: number) {
    console.log(`test number chnage : ${value}`);
  }

  doAppMinChange(value: number) {
    console.log(`test minChange : ${value}`);
  }

  doAppMaxChange(value: number) {
    console.log(`test maxChange : ${value}`);
  }
}
