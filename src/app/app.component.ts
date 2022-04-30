import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // First
  // title = 'angular-beginer-learning';
  // ninjaName = 'natuto';

  // ninjaConsole(){
  //   console.log(`console ninjaName : ${this.ninjaName}`);
  // }

  // changeNinjaName(name:string){
  //   this.ninjaName = name;
  // }

  // Project Buffet
  value = 0;

  calcBuffet(value:string){
    const price = Number(value);
    this.value = (price*3/4);
  }
}
