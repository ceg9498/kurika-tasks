import { Component, OnInit } from '@angular/core';
import { Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

import { TimersService } from '../timers.service';
import { Timer } from '../../types/timer';

@Component({
  selector: 'app-slim-timer',
  templateUrl: './slim-timer.component.html',
  styleUrls: ['./slim-timer.component.scss']
})
export class SlimTimerComponent implements OnInit {
  @Input() timer:Timer;
  @Output() info = new EventEmitter();

  constructor(
    private _timers:TimersService,
  ) { }

  ngOnInit() {
  }

  showInfo(){
    this.info.emit(this.timer.id);
  }

  toggleCompleted(id:string|number){
    this._timers.toggleCompleted(id);
  }
}
