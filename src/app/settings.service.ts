import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

import { settings } from '../assets/data/settings';
import { MessageServiceService } from './message-service.service';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  settings:{};

  constructor(
    private _cookies: CookieService,
    private _messages: MessageServiceService,
  ) {}

  init(){
    this.settings = {};
    settings.forEach((item)=>{
      this.settings[item.name] = {
        text: item.text,
        value: (this._cookies.get(item.name)==='true')
      };
    });
  }

  getSettings(){
    if(this.settings === undefined){
      this.init();
    }
    return this.settings;
  }

  updateSetting(name:string, value:boolean){
    if(this.settings[name]){
      this.settings[name].value = value;
      this._cookies.set(name, value.toString());
      this._messages.addNotice("Success", "Settings updated.");
    }
  }
}
