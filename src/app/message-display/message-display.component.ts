import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

import { MessageServiceService } from '../message-service.service';

@Component({
  selector: 'app-message-display',
  templateUrl: './message-display.component.html',
  styleUrls: ['./message-display.component.scss']
})
export class MessageDisplayComponent implements OnInit {
  @Input() title:string;
  @Input() message:string;
  @Input() error:boolean;

  constructor(
    private _messages:MessageServiceService,
  ) { }

  ngOnInit() {
  }

  close(){
    this._messages.removeMessage(this.title, this.message, false);
  }
}
