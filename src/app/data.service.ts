import { Injectable, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map'
// import {LocalStorageService, SessionStorage } from 'ngx-webstorage';
import {  Router } from '@angular/router';
// import { LocalStorage } from 'ngx-webstorage';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs';
import { environment } from '../environments/environment';
import 'rxjs/add/operator/map'

export type Item = { id: number, name: string };


@Injectable()
export class DataService {
  navItems: any;
  items: Array<Item>;

  constructor(private http: Http) {
    this.getus();
  }


  getus() {
    // const headers = new Headers();
    // headers.append("email", this.email);
    // headers.append("access-token", this.access_token);

    this.http
      .get("/assets/pizza.json")
      .map(data => data.json() as Array<Item>)
      .subscribe(data => {
        this.items = data;
        console.log(data);
      });

    // return this.http.get(`./pizza_spec`)
    //   .map((res) => {
    //
    //
    //     // this.personal_details = res.json()['PersonalDetails'];
    //     // this.ratings = res.json()['Ratings'];
    //     // this.personal_details = res.json()['PersonalDetails'];
    //     // this.connections = res.json()['Connections'];
    //     // this.groups = res.json()['Groups'];
    //     // this.grp_size = res.json()['Groups']['0']['size'];
    //     // this.con_size = res.json()['Connections']['0']['size'];
    //     // this.fname = res.json()['PersonalDetails']['fname'];
    //     // this.lname = res.json()['PersonalDetails']['lname'];
    //     // this.image = res.json()['PersonalDetails']['image'];
    //     // this.post = res.json()['PersonalDetails']['post'];
    //     // this.email = res.json()['PersonalDetails']['email'];
    //     // this.score = res.json()['PersonalDetails']['score'];
    //     // this.userId = res.json()['PersonalDetails']['userId'];
    //     // this.OrganizatonName = res.json()['PersonalDetails']['OrganizationName'];
    //     //
    //     // this.ratings.splice(0,1);
    //     // this.connections.splice(0,1);
    //     res.json();
    //     // console.log(res.json());
    //     return res.json();
    //
    //   });

  }

}
