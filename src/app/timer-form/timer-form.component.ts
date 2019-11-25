import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { TimersService } from '../timers.service';
import { interval, Interval } from '../../types/interval';
import { schedule, Schedule } from '../../types/schedule';

@Component({
  selector: 'app-timer-form',
  templateUrl: './timer-form.component.html',
  styleUrls: ['./timer-form.component.scss']
})
export class TimerFormComponent implements OnInit {
  timerForm:FormGroup;
  period:string;
  countdownValues:interval;
  scheduleValues:schedule;

  constructor(
    private _timerService: TimersService,
  ) { }

  ngOnInit() {
    this.timerForm = new FormGroup({
      title: new FormControl(''),
      category: new FormControl(''),
      description: new FormControl(''),
      required: new FormControl(false),
      isCompleted: new FormControl(false),
      repeatType: new FormControl('noRepeat')
    });
    this.period = 'nr';
    this.countdownValues = new Interval();
    this.scheduleValues = new Schedule();
  }

  setPeriod(){
    switch(this.timerForm.value.repeatType){
      case 'noRepeat':
        this.period = 'nr';
        break;
      case 'cdRepeat':
        this.period = 'i-';
        this.period += this.countdownValues.amount + '-' + this.countdownValues.unit;
        break;
      case 'scheduleRepeat':
        let useUTC = this.scheduleValues.useUTC;
        this.period = 'r-';
        this.period += useUTC ? 'g' : 'l';
        this.period += '-' + "yyyy-mm-dd-"

        // validate/format hours & minutes
        let hours:number;
        if(typeof this.scheduleValues.hour === "string"){
          hours = parseInt(this.scheduleValues.hour);
        } else {
          hours = this.scheduleValues.hour;
        }
        if(this.scheduleValues.ampm === "pm"){
          hours += 12;
        }
        let minutes:number;
        if(typeof this.scheduleValues.minute === "string"){
          if(this.scheduleValues.minute === ''){
            minutes = 0;
          } else {
            minutes = parseInt(this.scheduleValues.minute);
          }
        } else {
          minutes = this.scheduleValues.minute;
        }

        if(useUTC){
          let offsetTotal = (new Date()).getTimezoneOffset();
          let offsetHours = Math.floor(offsetTotal/60);
          let offsetMinutes = offsetTotal-(offsetHours*60);
          this.period += (hours+offsetHours) + '-';
          this.period += (minutes+offsetMinutes) + '-';
        } else {
          // local time
          this.period += hours + '-';
          this.period += minutes + '-';
        }

        this.period += this.scheduleValues.dayOfWeek;
        break;
    }
  }

  setIntervalPeriod(event:{property:string, value:string|number}){
    this.countdownValues[event.property] = event.value;
  }

  setSchedulePeriod(event:{property:string, value:string|number|boolean}){
    this.scheduleValues[event.property] = event.value;
  }

  add(){
    this.setPeriod();
    
    let { title, required, isCompleted, description, category } = this.timerForm.value;
    this._timerService.addTimer({
      title: title, 
      required: required, 
      isCompleted: isCompleted || false, 
      period: this.period, 
      description: description, 
      category: category,
      completed: []
    });
  }
}