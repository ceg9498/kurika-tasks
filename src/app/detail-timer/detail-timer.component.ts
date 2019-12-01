import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

import { TimersService } from '../timers.service';
import { Timer } from '../../types/timer';

@Component({
  selector: 'app-detail-timer',
  templateUrl: './detail-timer.component.html',
  styleUrls: ['./detail-timer.component.scss']
})
export class DetailTimerComponent implements OnInit {
  @Input() timer:Timer;

  constructor(
    private _timers:TimersService,
  ) { }

  ngOnInit() {
  }

  toggleCompleted(id:string){
    this._timers.toggleCompleted(id);
  }

  deleteTimer(id:string){
    this._timers.deleteTimer(id);
  }
}
