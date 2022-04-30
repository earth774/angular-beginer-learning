import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.scss'],
})
export class ActionBarComponent implements OnInit {
  @Input() counter: number = 0;
  @Input() step: number = 1;
  @Output() counterChange = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  decrease() {
    if (this.counter - this.step < 0) return;
    this.counter -= this.step;
    this.counterChange.emit(this.counter);
  }
  increase() {
    if (this.counter + this.step > 100) return;
    this.counter += this.step;
    this.counterChange.emit(this.counter);
  }
}
