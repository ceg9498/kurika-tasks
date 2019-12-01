import { Injectable, OnDestroy } from '@angular/core';

import { IndexedDbService } from './indexed-db.service';
import { timer, Timer } from '../types/timer';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class TimersService implements OnDestroy {
  categories:[{category:string, timers:Timer[]}];
  dashCategories:[{category:string, timers:Timer[]}];
  interval:any;

  constructor(
    private _idb:IndexedDbService,
    private _messages:MessageService,
  ) { }

  ngOnDestroy(){
    clearInterval(this.interval);
  }

  init(){
    this.categories = [{
      category: "No Category",
      timers: []
    }];
    this.dashCategories = [{
      category: "No Category",
      timers: []
    }];
    this._idb.getData("kurika","timers").subscribe(
      (res) => {
        this.setTimer(res);
      },
      (err) => {
        console.error("Error retrieving timer data:",err);
        this._messages.addError("Error", "An error was encountered when attempting to retrieve your data. Please see the logs.");
      },
      () => {
        this._messages.addNotice("Success", "Timers retrieval complete.");
        this.cleanCategories();
      }
    )
    this.interval = setInterval(()=>this.tick(), 10000);
  }

  tick(){
    this.categories.forEach((item)=>{
      item.timers.forEach((timer)=>{
        if(timer.isCompleted){
          timer.tickCountdown(10000);
        }
      });
    });
  }

  setTimer(timer:timer){
    let n = new Timer(timer);
    if(timer.category === undefined || timer.category === ''){
      timer.category = "No Category";
    }
    let i = this.categories.findIndex((category)=> category.category === timer.category);
    if(i === -1){
      this.categories.push({
        category: timer.category,
        timers: [n]
      });
    } else {
      this.categories[i].timers.push(n);
    }

    // add to dash array (maybe)
    if(!timer.isCompleted && timer.required){
      i = this.dashCategories.findIndex((category)=> category.category === timer.category);
      if(i === -1){
        this.dashCategories.push({
          category: timer.category,
          timers: [n]
        });
      } else {
        this.categories[i].timers.push(n);
      }
    }
  }

  cleanCategories(){
    let toRemove:number[] = [];

    this.categories.forEach((category, i)=>{
      if(category.timers.length === 0){
        toRemove.push(i);
      }
    });
    toRemove.reverse().forEach((i)=>{
      this.categories.splice(i, 1);
    });

    // reset to clean dashCategories
    toRemove = [];
  
    this.dashCategories.forEach((category, i)=>{
      if(category.timers.length === 0){
        toRemove.push(i);
      }
    });
    toRemove.reverse().forEach((i)=>{
      this.dashCategories.splice(i, 1);
    });
  }

  addTimer(n:timer) {
    let nTimer = new Timer(n);
    console.log(nTimer);
    this.setTimer(nTimer);
    this._idb.addOrUpdateOne("kurika", "timers", nTimer).subscribe(
      () => {
        this._messages.addNotice("Success", "Your new timer has been saved!");
      },
      (err) => {
        console.error("Error saving timer:",err);
        this._messages.addError("Error", "Your new timer has not been saved. Please see the logs.");
      },
    );
  }

  deleteTimer(id:string){
    this.categories.forEach((item, i)=>{
      item.timers.forEach((timer, j)=>{
        if(timer.id === id){
          this.categories[i].timers.splice(j,1);
          this.cleanCategories();
        }
      });
    });
    this._idb.deleteOne("kurika", "timers", id).subscribe(
      () => {
        console.log("deleted timer")
        this._messages.addNotice("Success", "Your timer has been deleted.");
      },
      (err) => {
        console.error("Error deleting timer:",err);
        this._messages.addError("Error", "There was an error deleting your timer. Please see the logs.");
      }, () =>{
        console.log("deleted timer: complete")
      }
    );
  }

  getTimers(restrictions?:string[]){
    if(restrictions && restrictions.includes("hideCompleted") && restrictions.includes("important")){
      return this.dashCategories;
    }
    return this.categories;
  }

  toggleCompleted(id:string){
    this.categories.forEach((item, i)=>{
      item.timers.forEach((timer, j)=>{
        if(timer.id === id){
          this.categories[i].timers[j].toggleComplete();
          this._idb.addOrUpdateOne("kurika", "timers", this.categories[i].timers[j]).subscribe(
            ()=>{
              this._messages.addNotice("Success", "Timer status has been updated");
            },
            (err)=>{
              console.log("Update error:",err);
              this._messages.addError("Error", "Error updating timer status");
            },
          )
        }
      });
    });
  }
}
