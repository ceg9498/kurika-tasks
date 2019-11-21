import { Component } from '@angular/core';

import { TimersService } from './timers.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Kurika Tasks';

  constructor(private _timers:TimersService){}

  ngOnInit(){
    this._timers.init();
  }
}
