import { Component, OnInit } from '@angular/core';

import { TimersService } from '../timers.service';
import { timer, Timer } from '../../types/timer';

@Component({
  selector: 'app-timers',
  templateUrl: './timers.component.html',
  styleUrls: ['./timers.component.scss']
})
export class TimersComponent implements OnInit {
  timers:[{category:string, timers:Timer[]}]

  constructor(
    private _timers:TimersService,
  ) { }

  ngOnInit() {
    this.getTimers();
  }

  getTimers(){
    this.timers = this._timers.getTimers();
  }

  deleteTimer(id:string){
    this._timers.deleteTimer(id);
  }

  toggleCompleted(id:string){
    this._timers.toggleCompleted(id);
  }
}
