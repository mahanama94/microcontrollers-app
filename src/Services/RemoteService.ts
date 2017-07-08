import {Injectable} from "@angular/core";
import { NativeStorage } from '@ionic-native/native-storage';

/**
 * Created by bhanuka on 7/8/17.
 */

@Injectable()
export class RemoteService{

  constructor(private nativeStorage:NativeStorage){}

  public getRemotes() : Promise<Array<String>>{

    return new Promise<Array<String>>((resolve, reject) => {
      this.nativeStorage.keys()
        .then(data => { resolve(data)})
        .catch((error) => {reject(error)});
    })
  }

  public getRemote(name : string): Promise<any>{
    return this.nativeStorage.getItem(name);
  }

  public addRemote(name: string, remote: any): Promise<any>{
    return this.nativeStorage.setItem(name, remote);
  }

}
