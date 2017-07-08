import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {RemoteService} from "../../Services/RemoteService";

@Component({
  selector: 'page-contact',
  templateUrl: 'add.html',
})
export class AddPage {

  name: string;

  constructor(public navCtrl: NavController, private remoteService: RemoteService) {}

  save(){
    alert(this.name);
    this.remoteService.addRemote(this.name, "Something")
      .then(data => {"remote" + name + "added"})
      .catch((error) => alert(JSON.stringify(error)));

  }
}
