import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

const SELECT_ALL = "Select All Days";
const DESELECT_ALL = "Deselect All Days";

@Component({
  selector: 'app-schedule-type-form',
  templateUrl: './schedule-type-form.component.html',
  styleUrls: ['./schedule-type-form.component.scss']
})
export class ScheduleTypeFormComponent implements OnInit {
  @Input() period:string;
  isNew:boolean = false;
  schedule:FormGroup;
  @Output() timerData = new EventEmitter();
  daysOfWeek:string;
  daysToggleLabel:string;

  constructor() { }

  ngOnInit() {
    if(this.period){
      this.isNew = false;
    } else {
      this.isNew = true;
    }
    let data = this.parsePeriod();
    this.daysToggleLabel = SELECT_ALL;
    this.schedule = new FormGroup({
      useUTC: new FormControl(data.useUTC),
      hour: new FormControl(data.hour),
      minute: new FormControl(data.minute),
      ampm: new FormControl(data.ampm),
      dayOfWeek: new FormGroup({
        sunday: new FormControl(data.dayOfWeek.sunday),
        monday: new FormControl(data.dayOfWeek.monday),
        tuesday: new FormControl(data.dayOfWeek.tuesday),
        wednesday: new FormControl(data.dayOfWeek.wednesday),
        thursday: new FormControl(data.dayOfWeek.thursday),
        friday: new FormControl(data.dayOfWeek.friday),
        saturday: new FormControl(data.dayOfWeek.saturday),
      })
    });
    this.emit('useUTC');
    this.emit('hour');
    this.emit('minute');
    this.emit('dayOfWeek');
  }

  parsePeriod(){
    if(this.period){
      let split = this.period.split('-');
      let result = {
        // period strings are in 24h, use 'am'
        ampm: 'am',
        useUTC: split[1] === 'g' ? true : false,
        // 2: year // unused
        // 3: Months // unused
        // 4: Day of Month // unused
        // 5: Hours
        hour: split[5],
        // 6: Minutes
        minute: split[6],
        // 7: Days of Week
        dayOfWeek: {
          sunday: split[7].includes('0') ? true : false,
          monday: split[7].includes('1') ? true : false,
          tuesday: split[7].includes('2') ? true : false,
          wednesday: split[7].includes('3') ? true : false,
          thursday: split[7].includes('4') ? true : false,
          friday: split[7].includes('5') ? true : false,
          saturday: split[7].includes('6') ? true : false,
        }
      };
      return result;
    }
    return {
      useUTC: true,
      hour: '',
      minute: '',
      ampm: 'am',
      dayOfWeek: {
        sunday: false,
        monday: false,
        tuesday: false,
        wednesday: false,
        thursday: false,
        friday: false,
        saturday: false
      }
    };
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
    if(this.daysOfWeek === ''){
      this.daysToggleLabel = SELECT_ALL;
    } else {
      this.daysToggleLabel = DESELECT_ALL;
    }
  }

  toggleDays(){
    if(this.daysToggleLabel === SELECT_ALL){
      this.schedule.patchValue({
        dayOfWeek: {
          sunday: true,
          monday: true,
          tuesday: true,
          wednesday: true,
          thursday: true,
          friday: true,
          saturday: true,
        }
      });

      this.daysToggleLabel = DESELECT_ALL;
    } else {
      this.schedule.patchValue({
        dayOfWeek: {
          sunday: false,
          monday: false,
          tuesday: false,
          wednesday: false,
          thursday: false,
          friday: false,
          saturday: false,
        }
      });

      this.daysToggleLabel = SELECT_ALL;
    }
    this.emit("dayOfWeek");
  }
}
