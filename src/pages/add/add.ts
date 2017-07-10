import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {RemoteService} from "../../Services/RemoteService";
import {BluetoothService} from "../../Services/BluetoothService";
import {BluetoothSerial} from "@ionic-native/bluetooth-serial";

@Component({
  selector: 'page-contact',
  templateUrl: 'add.html',
})
export class AddPage {

  name: string = "New Device";

  buttons: Array<{name : String}> = [];

  buttonName : String = "";

  constructor(public navCtrl: NavController, private remoteService: RemoteService, public bluetoothService: BluetoothService, public bluetoothSerial: BluetoothSerial) {}

  save(){
    alert(this.name);
    this.remoteService.addRemote(this.name, "Something")
      .then(data => {"remote" + name + "added"})
      .catch((error) => alert(JSON.stringify(error)));

  }

  add(){
    console.log(this.buttons);
    this.buttons.push({name : this.buttonName});
    this.buttonName = "";
    console.log(this.buttons);
  }

  capture(){
    alert("capturing from bluetooth");
    this.add();
  }
}
