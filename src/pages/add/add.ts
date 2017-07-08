import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'add.html'
})
export class AddPage {

  name: String;

  constructor(public navCtrl: NavController) {}

  save(){
    alert("Saving remote");
  }
}
