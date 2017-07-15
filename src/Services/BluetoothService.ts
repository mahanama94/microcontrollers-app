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

  connect() : Observable<any> {
    return this.bluetoothSerial.connectInsecure("00:21:13:00:B3:0C");
  }

  write(data): Promise<any>{
    return this.bluetoothSerial.write(data);
  }

  subscribe(delimiter): Observable<any>{
    return this.bluetoothSerial.subscribe(delimiter);
  }
}
