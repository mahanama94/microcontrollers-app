import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items = ["itema", "item2"];

  constructor(public navCtrl: NavController) {

  }

  open(item: any){
    alert("Selected ");
  }
}
