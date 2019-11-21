import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { TimersService } from '../timers.service';
//import { timer, Timer } from '../../types/timer';

@Component({
  selector: 'app-timer-form',
  templateUrl: './timer-form.component.html',
  styleUrls: ['./timer-form.component.scss']
})
export class TimerFormComponent implements OnInit {
  timerForm:FormGroup;

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
  }

  add(){
    let { title, required, isCompleted, description, category } = this.timerForm.value;
    let period:string = '';
    switch(this.timerForm.value.repeatType){
      case 'noRepeat':
        period += 'nr';
        break;
      case 'cdRepeat':
        period += 'i-';
        break;
      case 'scheduleRepeat':
        period += 'r-';
        break;
    }
    this._timerService.addTimer(title, required, isCompleted, period, description, category);
  }
}
