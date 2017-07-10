import {Injectable} from "@angular/core";
import {BluetoothSerial} from "@ionic-native/bluetooth-serial";
import {Observable} from "rxjs";
/**
 * Created by bhanuka on 7/10/17.
 */

@Injectable()
export class BluetoothService{

  constructor(public bluetoothSerial: BluetoothSerial){}

  subscribeRawdata() : Observable<any>{
    return this.bluetoothSerial.subscribeRawData();
  }

  connect(macAddress_uuid) : Observable<any> {
    return this.bluetoothSerial.connect(macAddress_uuid);
  }
}
