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

  buttons: Array<{name : String, signal :String}> = [];

  buttonName : String = "";

  constructor(public navCtrl: NavController, private remoteService: RemoteService, public bluetoothService: BluetoothService, public bluetoothSerial: BluetoothSerial) {}

  save(){
    alert(this.name);
    this.remoteService.addRemote(this.name, this.buttons)
      .then(data => {alert("remote" + name + "added"); alert(JSON.stringify(data))})
      .catch((error) => alert(JSON.stringify(error)));
  }


  capture(){
    this.bluetoothService.connect().subscribe((data) =>{

      this.bluetoothService.write("A").then((data) => {
        alert("Press the button continuously until feedback LED is on");
        let count = 1;
        let inData = {};
        this.bluetoothService.subscribe("\n")
          .subscribe((data) => {
            data = data.replace("\n", "");
            count = count + 1;
            if(!inData.hasOwnProperty(data)){
              inData[data] = 1;
            }
            else{
              inData[data] = inData[data] + 1;
            }
            if(count == 10){
              this.addButton(inData);
            }
          });
      });
    });
  }

  remove(button){
    this.buttons.splice(this.buttons.indexOf(button), 1);
  }

  addButton(sampledData : Object){
    let maxValue ="";
    let maxFrequency = 0;
    for(let key of  Object.keys(sampledData)){
      if(sampledData[key] > maxFrequency){
        maxFrequency = sampledData[key];
        maxValue = key;
      }
    }
    this.buttons.push({name : this.buttonName, signal :maxValue});
    this.buttonName = "";
  }
}
