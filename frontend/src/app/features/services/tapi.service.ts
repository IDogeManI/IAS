import { Injectable } from '@angular/core';
import {
    HubConnection,
    HubConnectionBuilder,
    RetryContext,
} from '@microsoft/signalr';

@Injectable({
    providedIn: 'root',
})
export class TapiService {
    private hubConnection: HubConnection;

    constructor() {
        this.hubConnection = new HubConnectionBuilder()
            .withUrl('http://localhost:5000/tapi')
            .withStatefulReconnect()
            .withAutomaticReconnect({
                nextRetryDelayInMilliseconds(
                    retryContext: RetryContext,
                ): number | null {
                    return 1000;
                },
            })
            .build();
        this.connect();
    }

    private connect() {
        this.hubConnection
            .start()
            .then(() => console.log('Connection started'))
            .catch((err) => {
                console.log('Error while starting connection: ' + err);
                setTimeout(() => {
                    this.connect();
                }, 1000);
            });
    }

    addReceiveMessageListener(callback: (object: any) => void): void {
        this.hubConnection.on('ReceiveMessage', callback);
    }

    sendMessage(object: any): void {
        this.hubConnection
            .invoke('SendMessage', object)
            .catch((err) => console.error(err));
    }
}
