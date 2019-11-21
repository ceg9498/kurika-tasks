import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { SettingsService } from '../settings.service';
import { IndexedDbService } from '../indexed-db.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  settings:{name:string, text:string, control:FormControl}[] = [];

  constructor(
    private _settingsServ: SettingsService,
    private _idbServ: IndexedDbService,
  ) { }

  ngOnInit() {
    let temp = this._settingsServ.getSettings();
    temp.forEach((setting)=>{
      this.settings.push({
        name: setting.name,
        text: setting.text,
        control: new FormControl(setting.value)
      });
    });
  }

  updateSetting(item:string) {
    this._settingsServ.updateSetting(
      item, 
      this.settings.filter((setting)=>setting.name === item)[0].control.value
    );
  }

  deleteAllData(){
    this._idbServ.deleteAll("kurikia","timers").subscribe(
      (res) => {
        console.log("Delete All Result:",res);
      },
      (err) => {
        console.error("Delete All Error:",err);
      },
      () => {
        console.log("Delete All Complete");
      }
    )
  }
}
