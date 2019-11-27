import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-detail-timer',
  templateUrl: './detail-timer.component.html',
  styleUrls: ['./detail-timer.component.scss']
})
export class DetailTimerComponent implements OnInit {
  @Input() timers;
  @Input() hideCompleted:boolean;

  constructor() { }

  ngOnInit() {
  }

}
