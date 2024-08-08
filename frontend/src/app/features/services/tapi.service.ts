import {Injectable} from '@angular/core';
import {HubConnection, HubConnectionBuilder} from "@microsoft/signalr";

@Injectable({
  providedIn: 'root'
})
export class TapiService {
  private hubConnection: HubConnection;

  constructor() {
    this.hubConnection = new HubConnectionBuilder()
      .withUrl('http://localhost:5000/tapi')
      .build();

    this.hubConnection.start()
      .then(() => console.log('Connection started'))
      .catch(err => console.log('Error while starting connection: ' + err));
  }

  public addReceiveMessageListener(callback: (object: any) => void): void {
    this.hubConnection.on('ReceiveMessage', callback);
  }

  public sendMessage(object: any): void {
    this.hubConnection.invoke('SendMessage', object)
      .catch(err => console.error(err));
  }
}
