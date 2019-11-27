import { Component, OnInit } from '@angular/core';

import { TimersService } from '../timers.service';
import { Timer } from '../../types/timer';
import { SettingsService } from '../settings.service';

@Component({
  selector: 'app-timers',
  templateUrl: './timers.component.html',
  styleUrls: ['./timers.component.scss']
})
export class TimersComponent implements OnInit {
  timers:[{category:string, timers:Timer[]}];
  settings:{};
  deleteIcon:any;

  constructor(
    private _timers:TimersService,
    private _settings:SettingsService,
  ) { }

  ngOnInit() {
    this.getTimers();
    this.settings = this._settings.getSettings();
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
