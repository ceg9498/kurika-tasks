import { Component, OnInit } from '@angular/core';

import { MessageServiceService } from '../message-service.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  messages:{title:string, message:string, error:boolean}[];

  constructor(
    private _messages:MessageServiceService
  ) { }

  ngOnInit() {
    this.messages = this._messages.getMessages();
  }

}
