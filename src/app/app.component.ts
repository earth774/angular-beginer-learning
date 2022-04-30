import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  testClick() {
    console.log(`test binding`);
  }

  testNumberChange(value: number) {
    console.log(`test number chnage : ${value}`);
  }
}
