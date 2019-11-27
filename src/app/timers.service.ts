import { Injectable, OnDestroy } from '@angular/core';

import { IndexedDbService } from './indexed-db.service';
import { timer, Timer } from '../types/timer';

@Injectable({
  providedIn: 'root'
})
export class TimersService implements OnDestroy {
  categories:[{category:string, timers:Timer[]}];
  interval:any;

  constructor(
    private _idb:IndexedDbService,
  ) { }

  ngOnDestroy(){
    clearInterval(this.interval);
  }

  init(){
    this.categories = [{
      category: "No Category",
      timers: []
    }];
    this._idb.getData("kurika","timers").subscribe(
      (res) => {
        this.setTimer(res);
      },
      (err) => {
        console.error("Error retrieving timer data!",err);
      },
      () => {
        console.log("Timers retrieval complete.");
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
  }

  cleanCategories(){
    this.categories.forEach((category, i)=>{
      if(category.timers.length === 0){
        this.categories.splice(i, 1);
      }
    })
  }

  addTimer(n:timer) {
    let nTimer = new Timer(n);
    console.log(nTimer);
    this.setTimer(nTimer);
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
    this.categories.forEach((item, i)=>{
      item.timers.forEach((timer, j)=>{
        if(timer.id === id){
          this.categories[i].timers.splice(j,1);
          this.cleanCategories();
        }
      });
    });
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

  getTimers(restrictions?:string[]){
    if(restrictions !== undefined){
      let result:[{category:string, timers:Timer[]}] = [{category:"No Category",timers:[]}];
      if(restrictions.includes("hideCompleted") && restrictions.includes("important")){
        this.categories.forEach((category)=>{
          result.push({
            category: category.category, 
            timers: category.timers.filter((timer)=>!timer.isCompleted && timer.required)
          });
        });
      }

      let toRemove:number[] = [];
      result.forEach((item,i)=>{
        if(item.timers.length === 0){
          toRemove.push(i);
        }
      });
      toRemove.reverse().forEach((i)=>{
        result.splice(i,1);
      });

      return result;
    }
    return this.categories;
  }

  toggleCompleted(id:string){
    this.categories.forEach((item, i)=>{
      item.timers.forEach((timer, j)=>{
        if(timer.id === id){
          this.categories[i].timers[j].toggleComplete();
          this._idb.addOrUpdateOne("kurika", "timers", this.categories[i].timers[j]).subscribe(
            (res)=>{
              console.log("Update result:",res);
            },
            (err)=>{
              console.log("Update error:",err);
            },
            () => {
              console.log("Update complete");
            }
          )
          // create & assign a countdown (?)
        }
      });
    });
  }
}
