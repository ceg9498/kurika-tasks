import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TimersService } from '../timers.service';
import { Timer } from 'src/types/timer';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-edit-timer',
  templateUrl: './edit-timer.component.html',
  styleUrls: ['./edit-timer.component.scss']
})
export class EditTimerComponent implements OnInit {
  id:string;
  timer:Timer;

  constructor(
    private _route: ActivatedRoute,
    private _timers: TimersService,
    private _messages: MessageService,
  ) { }

  ngOnInit() {
    this._route.paramMap.subscribe( (params) => {
      this.id = params.get('id');
      this._timers.getById(this.id).subscribe(
        (res) => {
          console.log("Result:",res)
          this.timer = new Timer(res);
          this._messages.addNotice("Success",`Timer ID ${this.id} has been loaded.`);
        },
        (err) => {
          console.error("Error:",err);
          this._messages.addError("Error","Error encountered when retrieving a specified timer. Please see logs for details.");
        }
      );
    });
  }

}
