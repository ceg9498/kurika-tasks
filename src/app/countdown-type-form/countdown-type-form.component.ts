import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-countdown-type-form',
  templateUrl: './countdown-type-form.component.html',
  styleUrls: ['./countdown-type-form.component.scss']
})
export class CountdownTypeFormComponent implements OnInit {
  countdown:FormGroup;
  @Output() timerData = new EventEmitter();
  units:string[];

  constructor() { }

  ngOnInit() {
    this.countdown = new FormGroup({
      amount: new FormControl(1),
      unit: new FormControl('hours')
    });
    this.units = ["days","hours","minutes"];
    this.emit("amount");
    this.emit("unit");
  }

  emit(property:string){
    this.timerData.emit({property:property, value:this.countdown.value[property]});
  }

}
