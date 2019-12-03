import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

import { MessageService } from '../message.service';

@Component({
  selector: 'app-message-display',
  templateUrl: './message-display.component.html',
  styleUrls: ['./message-display.component.scss']
})
export class MessageDisplayComponent implements OnInit {
  @Input() id:string;
  @Input() title:string;
  @Input() message:string;
  @Input() error:boolean;

  constructor(
    private _messages:MessageService,
  ) { }

  ngOnInit() {
  }

  close(){
    this._messages.removeMessage(this.id);
  }
}
