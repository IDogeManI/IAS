import {Component, OnInit} from '@angular/core';
import {TapiService} from "../services/tapi.service";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss'
})
export class NewsComponent implements OnInit {
  constructor(private readonly tapiService: TapiService) {
  }

  ngOnInit(): void {
    this.tapiService.addReceiveMessageListener((object:any) => {
      console.log(`${Object.values(object)}`);
    });
  }

  sendMessage(): void {
    this.tapiService.sendMessage({a: 1, b: 2, c: 3});
  }
}
