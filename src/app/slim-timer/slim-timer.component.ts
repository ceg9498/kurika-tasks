import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-slim-timer',
  templateUrl: './slim-timer.component.html',
  styleUrls: ['./slim-timer.component.scss']
})
export class SlimTimerComponent implements OnInit {
  @Input() timers;
  @Input() hideCompleted:boolean;

  constructor() { }

  ngOnInit() {
  }

}
