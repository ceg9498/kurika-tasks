import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-countdown-type-form',
  templateUrl: './countdown-type-form.component.html',
  styleUrls: ['./countdown-type-form.component.scss']
})
export class CountdownTypeFormComponent implements OnInit {
  @Input() period = null;
  isNew:boolean = true;
  countdown:FormGroup;
  @Output() timerData = new EventEmitter();
  units:string[];

  constructor() { }

  ngOnInit() {
    if(this.period){
      this.isNew = false;
    } else {
      this.isNew = true;
    }
    let values = this.parsePeriod();
    this.countdown = new FormGroup({
      amount: new FormControl(values.amount),
      unit: new FormControl(values.unit)
    });
    this.units = ["days","hours","minutes"];
    this.emit("amount");
    this.emit("unit");
  }

  parsePeriod():{amount:number, unit:string}{
    if(this.period){
      let split = this.period.split('-');
      if(split[0] === 'i'){
        return {amount: parseInt(split[1]), unit: split[2]};
      }
    }
    return {amount: 1, unit: 'hours'};
  }

  emit(property:string){
    this.timerData.emit({property:property, value:this.countdown.value[property]});
  }

}
