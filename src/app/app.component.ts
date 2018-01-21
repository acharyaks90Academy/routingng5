import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent   {
  title = 'app';
  boolShowSales = false;

  showHide (type) {
   if ( type === 'sales') {
     this.boolShowSales = true;
   }else {
     this.boolShowSales = false;
   }
  }

}
