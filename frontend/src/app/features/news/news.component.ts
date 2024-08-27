import { Component, inject, OnInit } from '@angular/core';
import { TapiService } from '../services/tapi.service';

@Component({
    selector: 'app-news',
    templateUrl: './news.component.html',
    styleUrl: './news.component.scss',
})
export class NewsComponent implements OnInit {
    private readonly tapiService = inject(TapiService);

    ngOnInit() {
        this.tapiService.addReceiveMessageListener((object: any) => {
            console.log(`${Object.values(object)}`);
        });
    }

    sendMessage() {
        this.tapiService.sendMessage({ a: 1, b: 2, c: 3 });
    }
}
