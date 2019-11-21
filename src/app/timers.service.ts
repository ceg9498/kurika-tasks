import { Injectable } from '@angular/core';

import { IndexedDbService } from './indexed-db.service';
import { timer, Timer } from '../types/timer';

@Injectable({
  providedIn: 'root'
})
export class TimersService {
  timerList:timer[];

  constructor(
    private _idb:IndexedDbService,
  ) { }

  init(){
    this.timerList = [];
    this._idb.getData("kurika","timers").subscribe(
      (res) => {
        this.timerList.push(
          new Timer(
            res.title, 
            res.required, 
            res.isCompleted, 
            res.period, 
            res.description, 
            res.category
          )
        );
      },
      (err) => {
        console.error("Error retrieving timer data!",err);
      },
      () => {
        console.log("Timers retrieval complete.")
      }
    )
  }

  addTimer(title:string, required:boolean, isCompleted:boolean, period:string, description?:string, category?:string) {
    let nTimer = new Timer(title, required, isCompleted, period, description, category);
    console.log(nTimer);
    this.timerList.push(nTimer);
    this._idb.addOrUpdateOne("kurika", "timers", nTimer).subscribe(
      (res) => {
        console.log("Saved timer result:",res);
      },
      (err) => {
        console.error("Error saving timer:",err);
      },
      () => {
        console.log("Saving timer completed.");
      }
    );
  }

  deleteTimer(id:string){
    this._idb.deleteOne("kurika", "timers", id).subscribe(
      (res) => {
        console.log("Delete timer result:",res);
      },
      (err) => {
        console.error("Error deleting timer:",err);
      },
      () => {
        console.log("Delete timer completed.");
      }
    );
  }
}
