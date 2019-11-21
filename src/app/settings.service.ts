import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

import { settings } from '../assets/data/settings';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  settings:{name:string, text:string, value:boolean}[];

  constructor(
    private _cookies: CookieService,
  ) {}

  init(){
    this.settings = [];
    settings.forEach((item)=>{
      this.settings.push({
        name: item.name,
        text: item.text,
        value: (this._cookies.get(item.name)==='true')
      });
    });
  }

  getSettings(){
    if(this.settings === undefined){
      this.init();
    }
    return this.settings;
  }

  updateSetting(name:string, value:boolean){
    let i = this.settings.findIndex(setting => setting.name = name);
    if(i != -1){
      this.settings[i].value = value;
      this._cookies.set(name, value.toString());
    }
  }
}
