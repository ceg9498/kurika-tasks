import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

import { TimersService } from '../timers.service';
import { Timer } from '../../types/timer';
import { SettingsService } from '../settings.service';

@Component({
  selector: 'app-timers',
  templateUrl: './timers.component.html',
  styleUrls: ['./timers.component.scss']
})
export class TimersComponent implements OnInit {
  @Input() restrictions:string[];
  timers:[{category:string, timers:Timer[]}];
  settings:any;
  deleteIcon:any;
  dialogIsOpen:boolean = false;
  dialogData:Timer = null;

  constructor(
    private _timers:TimersService,
    private _settings:SettingsService,
  ) { }

  ngOnInit() {
    this.getTimers();
    this.settings = this._settings.getSettings();
  }

  getTimers(){
    this.timers = this._timers.getTimers(this.restrictions);
  }

  showCategory(category:string){
    if(this.settings.hideCompleted.value === false) return true;
    let res:boolean = false;
    let categoryIndex = this.timers.findIndex((categories)=>categories.category === category);

    this.timers[categoryIndex].timers.forEach((timer)=>{
      if(!timer.isCompleted){
        res = true;
      }
    });
    return res;
  }

  deleteTimer(id:string|number){
    this._timers.deleteTimer(id);
    if(this.dialogIsOpen && this.dialogData.id === id){
      this.closeDialog();
    }
  }

  toggleCompleted(id:string){
    this._timers.toggleCompleted(id);
  }

  openDialog(id:string){
    console.log("Open dialog for ID:",id);
    this.dialogIsOpen = true;
    for(let inTimers of this.timers){
      for(let timer of inTimers.timers){
        if(timer.id === id){
          this.dialogData = timer;
        }
      }
    }
  }

  closeDialog(){
    this.dialogIsOpen = false;
    this.dialogData = null;
  }
}
