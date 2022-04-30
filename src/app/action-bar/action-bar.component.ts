import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.scss'],
})
export class ActionBarComponent implements OnInit {
  counter: number = 0;
  constructor() {}

  ngOnInit(): void {}

  decrease() {
    if (this.counter - 1 <= 0) return;
    this.counter--;
  }
  increase() {
    if (this.counter + 1 > 100) return;
    this.counter++;
  }
}
