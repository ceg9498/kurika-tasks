import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

import { TimersService } from '../timers.service';
import { Timer } from '../../types/timer';

@Component({
  selector: 'app-slim-timer',
  templateUrl: './slim-timer.component.html',
  styleUrls: ['./slim-timer.component.scss']
})
export class SlimTimerComponent implements OnInit {
  @Input() timer:Timer;
  @Input() hideCompleted:boolean;

  constructor(
    private _timers:TimersService,
  ) { }

  ngOnInit() {
  }

  showInfo(id:string|number) {
    console.log("Show info for timer:",id)
  }

  toggleCompleted(id:string){
    this._timers.toggleCompleted(id);
  }
}
