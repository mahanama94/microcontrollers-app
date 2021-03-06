import {Component, OnInit} from '@angular/core';
import {NavController, LoadingController, Events} from 'ionic-angular';
import {RemoteService} from "../../Services/RemoteService";
import {BluetoothSerial} from "@ionic-native/bluetooth-serial";
import {BluetoothService} from "../../Services/BluetoothService";
import {RemotePage} from "../remote/remote";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{

  items : Array<String> = ["itema", "item2"];

  ngOnInit(): void {
      let loader = this.loadingController.create({
        content : "Loading... Please wait.."
      });
      //loader.present();
      this.remoteService.getRemotes()
        .then((data : Array<String>) =>{
          this.items = data;
          loader.dismissAll();
      }).catch((error) => {
        //alert(JSON.stringify(error));
        loader.dismissAll()
      });
  }

  constructor(public navCtrl: NavController, private remoteService: RemoteService, private loadingController: LoadingController, public events: Events, private bluetoothSerial: BluetoothSerial,private bluetoothService: BluetoothService ) {
    this.events.subscribe('HomeSelect', () => {this.ngOnInit() })
  }

  select(remote : String){
    alert("Operning page");
    this.navCtrl.push(RemotePage, {remote : remote});
  }


}
