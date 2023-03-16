import { Component } from '@angular/core';
import { PageSettingsModel } from '@syncfusion/ej2-angular-grids/src';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-ejs';
  pageSettings: PageSettingsModel = { pageSize: 5 };
  data = [
    {
      prodId: 1,
      productName: 'Iphone 12',
      price: 90000
    },
    {
      prodId: 2,
      productName: 'Iphone 6',
      price: 9000
    },
    {
      prodId: 1,
      productName: 'Iphone 14',
      price: 900000
    },
    {
      prodId: 1,
      productName: 'Iphone 10',
      price: 60000
    },
    {
      prodId: 1,
      productName: 'Iphone 12',
      price: 90000
    },
    {
      prodId: 2,
      productName: 'Iphone 6',
      price: 9000
    },
    {
      prodId: 1,
      productName: 'Iphone 14',
      price: 900000
    },
    {
      prodId: 1,
      productName: 'Iphone 10',
      price: 60000
    },
    {
      prodId: 2,
      productName: 'Iphone 6',
      price: 9000
    },
    {
      prodId: 1,
      productName: 'Iphone 14',
      price: 900000
    },
    {
      prodId: 1,
      productName: 'Iphone 10',
      price: 60000
    }
  ]
}
