import {Component, OnInit} from '@angular/core';
import {NavController, NavParams, LoadingController} from 'ionic-angular';
import {RemoteService} from "../../Services/RemoteService";
import {BluetoothService} from "../../Services/BluetoothService";

@Component({
  selector: 'page-remote',
  templateUrl: 'remote.html'
})
export class RemotePage implements OnInit{

  title = "";

  buttons = [];

  ngOnInit(): void {
    this.title = this.navParams.get("remote");
    let loader = this.loadingController.create({
      content : "Loading... Please wait.."
    });
    this.remoteService.getRemote(this.title)
      .then((data) => {
          this.buttons = data;
          loader.dismissAll()})
      .catch((error) => {
          console.log(error);
          alert("Unable to read data");
          this.navCtrl.canGoBack()
    });
  }


  constructor(public navCtrl: NavController, public navParams: NavParams, public remoteService: RemoteService, public loadingController: LoadingController, private bluetoothService : BluetoothService){
  }

  send(button: any){
    alert(button.value);
  }

}
