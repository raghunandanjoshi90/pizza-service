import { Component, OnInit } from '@angular/core';
import { Pizzavarib } from './pizza_varib.model';
import { Http } from '@angular/http';
import {MatDialog} from '@angular/material';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  pizza_types: Pizzavarib[];
  address: any;
  constructor(private http: Http, public dialog: MatDialog) {
  }

  openDialog() {
    const dialogRef = this.dialog.open(AppOrderComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit() {

    return this.http.get('./assets/pizza.json').map(data => data.json())
      .subscribe(data => {
        // this.items = data;
        this.pizza_types = data.pizzas;
        console.log(this.pizza_types);
        console.log(data);
        return data;
      });
  }

}


@Component({
  selector: 'app-order',
  templateUrl: 'app-order.html',
})
export class AppOrderComponent {
  add: any;
  localUser = {
    address: ''
  };
  constructor(public dialog: MatDialog) {
    // console.log(this.address);

  }

  onsubmitorder($event) {
    this.add = $event;
    const creds = 'address=' + $event.address;
    console.log(this.add);
    console.log($event);
  }


  openDialog() {
    const dialogRef = this.dialog.open(AppOrderComponent);
    console.log(dialogRef);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
