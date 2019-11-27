import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { SettingsService } from '../settings.service';
import { IndexedDbService } from '../indexed-db.service';
import { settings as settingsList } from '../../assets/data/settings';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  settings:{};
  settingsList;

  constructor(
    private _settingsServ: SettingsService,
    private _idbServ: IndexedDbService,
  ) { }

  ngOnInit() {
    this.settingsList = [...settingsList];
    this.settings = this._settingsServ.getSettings();
    settingsList.forEach((setting)=>{
      this.settings[setting.name].control = new FormControl(this.settings[setting.name].value);
    });
  }

  updateSetting(item:string) {
    this._settingsServ.updateSetting(
      item, 
      this.settings[item].control.value
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
