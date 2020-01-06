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
    this.createFormGroup();
  
    this.countdownValues = new Interval();
    this.scheduleValues = new Schedule();
  }

  createFormGroup(){
    let repeatTypeMap = new Map([
      ['n', 'noRepeat'],
      ['r', 'scheduleRepeat'],
      ['i', 'cdRepeat']
    ]);
    this.timerForm = new FormGroup({
      title: new FormControl(this.timer.title || ''),
      category: new FormControl(this.timer.category || ''),
      description: new FormControl(this.timer.description || ''),
      required: new FormControl(this.timer.required || false),
      isCompleted: new FormControl(this.timer.isCompleted || false),
      repeatType: new FormControl(repeatTypeMap.get(this.timer.period[0]))
    });
  }

  setPeriod(){
    let setPeriodMap = new Map([
      ['noRepeat', ()=>{
        return 'nr';
      }],
      ['cdRepeat', ()=>{
        return 'i-' + this.countdownValues.amount + '-' + this.countdownValues.unit;
      }],
      ['scheduleRepeat', ()=>this.setScheduleRepeat()]
    ]);
    return setPeriodMap.get(this.timerForm.value.repeatType)();
  }

  setScheduleRepeat(){
    let useUTC = this.scheduleValues.useUTC;
    let period = 'r-';
    period += useUTC ? 'g' : 'l';
    period += '-' + "yyyy-mm-dd-"

    // validate/format hours & minutes
    let hours = this.validateHours();
    let minutes = this.validateMinutes();

    if(useUTC){
      period += this.offsetAdjustment(hours, minutes);
    } else {
      // local time
      period += hours + '-' + minutes + '-';
    }

    period += this.scheduleValues.dayOfWeek;
    
    return period;
  }

  validateHours(){
    let hours:number;
    if(typeof this.scheduleValues.hour === "string"){
      hours = parseInt(this.scheduleValues.hour);
    } else {
      hours = this.scheduleValues.hour;
    }
    if(this.scheduleValues.ampm === "pm"){
      hours += 12;
    }
    return hours;
  }
  validateMinutes(){
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
    return minutes;
  }
  offsetAdjustment(hours:number, minutes:number){
    let offsetTotal = (new Date()).getTimezoneOffset();
    let offsetHours = Math.floor(offsetTotal/60);
    let offsetMinutes = offsetTotal-(offsetHours*60);
    return (hours+offsetHours) + '-' + (minutes+offsetMinutes) + '-';
  }

  setIntervalPeriod(event:{property:string, value:string|number}){
    this.countdownValues[event.property] = event.value;
  }

  setSchedulePeriod(event:{property:string, value:string|number|boolean}){
    this.scheduleValues[event.property] = event.value;
  }

  add(){
    let { title, required, isCompleted, description, category } = this.timerForm.value;
    if(this.isNew){
      this._timerService.addTimer({
        title: title, 
        required: required, 
        isCompleted: isCompleted || false, 
        period: this.setPeriod(), 
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
        period: this.setPeriod(), 
        description: description, 
        category: category,
        completed: []
      }, true);
    }
  }
}