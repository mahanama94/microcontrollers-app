import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

@Component({
  selector: 'page-remote',
  templateUrl: 'remote.html'
})
export class RemotePage {

  /*constructor(public navCtrl: NavController) {

  }*/
  title = "";
  buttons = [{name:"off",val:0},{name:"on",val:"1"},{name:"up",val:2},{name:"down",val:3},{name:"fuck",val:4}];

  constructor(public navCtrl: NavController, public navParams: NavParams){
    // userParams is an object we have in our nav-parameters
    this.title = navParams.get("title");

  }

  send(button: any){
    alert(button.val);
  }

}
