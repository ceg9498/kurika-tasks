import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-schedule-type-form',
  templateUrl: './schedule-type-form.component.html',
  styleUrls: ['./schedule-type-form.component.scss']
})
export class ScheduleTypeFormComponent implements OnInit {
  schedule:FormGroup;
  @Output() timerData = new EventEmitter();
  daysOfWeek:string;

  constructor() { }

  ngOnInit() {
    this.schedule = new FormGroup({
      useUTC: new FormControl(true),
      hour: new FormControl(''),
      minute: new FormControl(''),
      ampm: new FormControl('am'),
      dayOfWeek: new FormGroup({
        sunday: new FormControl(false),
        monday: new FormControl(false),
        tuesday: new FormControl(false),
        wednesday: new FormControl(false),
        thursday: new FormControl(false),
        friday: new FormControl(false),
        saturday: new FormControl(false),
      })
    });
    this.emit('useUTC');
    this.emit('hour');
    this.emit('minute');
    this.emit('dayOfWeek');
  }

  emit(property:string){
    if(property === 'dayOfWeek'){
      this.setDayOfWeekString();
      this.timerData.emit({property: property, value: this.daysOfWeek});
    } else {
      this.timerData.emit({property: property, value: this.schedule.value[property]});
    }
  }

  setDayOfWeekString(){
    let dow = this.schedule.value.dayOfWeek;
    this.daysOfWeek = '';
    this.daysOfWeek += dow.sunday ? '0' : '';
    this.daysOfWeek += dow.monday ? '1' : '';
    this.daysOfWeek += dow.tuesday ? '2' : '';
    this.daysOfWeek += dow.wednesday ? '3' : '';
    this.daysOfWeek += dow.thursday ? '4' : '';
    this.daysOfWeek += dow.friday ? '5' : '';
    this.daysOfWeek += dow.saturday ? '6' : '';
  }
}
