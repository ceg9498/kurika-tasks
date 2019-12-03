import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { TimersService } from '../timers.service';
import { interval, Interval } from '../../types/interval';
import { schedule, Schedule } from '../../types/schedule';
import { Timer } from 'src/types/timer';

@Component({
  selector: 'app-timer-form',
  templateUrl: './timer-form.component.html',
  styleUrls: ['./timer-form.component.scss']
})
export class TimerFormComponent implements OnInit {
  @Input() timer:Timer = null;
  isNew:boolean;
  timerForm:FormGroup;
  period:string;
  countdownValues:interval;
  scheduleValues:schedule;

  constructor(
    private _timerService: TimersService,
  ) { }

  ngOnInit() {
    if(this.timer === null){
      this.isNew = true;
      this.timer = new Timer({
        title:'',
        category:'',
        description:'',
        required:false,
        isCompleted:false,
        completed:[],
        period:'nr'});
    } else {
      this.isNew = false;
    }
    let repeatType:string;
    switch(this.timer.period[0]){
      case 'n':
        repeatType = 'noRepeat';
        break;
      case 'r':
        repeatType = 'scheduleRepeat';
        break;
      case 'i':
        repeatType = 'cdRepeat';
        break;
    }
    this.timerForm = new FormGroup({
      title: new FormControl(this.timer.title || ''),
      category: new FormControl(this.timer.category || ''),
      description: new FormControl(this.timer.description || ''),
      required: new FormControl(this.timer.required || false),
      isCompleted: new FormControl(this.timer.isCompleted || false),
      repeatType: new FormControl(repeatType)
    });
    this.period = this.timer.period || 'nr';
  
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
    if(this.isNew){
      this._timerService.addTimer({
        title: title, 
        required: required, 
        isCompleted: isCompleted || false, 
        period: this.period, 
        description: description, 
        category: category,
        completed: []
      }, false);
    } else {
      this._timerService.addTimer({
        id: this.timer.id,
        title: title, 
        required: required, 
        isCompleted: isCompleted || false, 
        period: this.period, 
        description: description, 
        category: category,
        completed: []
      }, true);
    }
  }
}