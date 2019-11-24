import { Injectable } from '@angular/core';

import { IndexedDbService } from './indexed-db.service';
import { timer, Timer } from '../types/timer';

@Injectable({
  providedIn: 'root'
})
export class TimersService {
  categories:[{category:string, timers:timer[]}];

  constructor(
    private _idb:IndexedDbService,
  ) { }

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
  }

  setTimer(timer:timer){
    if(timer.category === undefined || timer.category === ''){
      timer.category = "No Category";
    }
    let i = this.categories.findIndex((category)=> category.category === timer.category);
    if(i === -1){
      this.categories.push({
        category: timer.category,
        timers: [timer]
      });
    } else {
      this.categories[i].timers.push(timer);
    }
  }

  cleanCategories(){
    this.categories.forEach((category, i)=>{
      if(category.timers.length === 0){
        this.categories.splice(i, 1);
      }
    })
  }

  addTimer(title:string, required:boolean, isCompleted:boolean, period:string, description?:string, category?:string) {
    let nTimer = new Timer(title, required, isCompleted, period, description, category);
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

  getTimers(){
    return this.categories;
  }

  toggleCompleted(id:string){
    this.categories.forEach((item, i)=>{
      item.timers.forEach((timer, j)=>{
        if(timer.id === id){
          this.categories[i].timers[j].isCompleted = !this.categories[i].timers[j].isCompleted;
          if(this.categories[i].timers[j].isCompleted){
            this.categories[i].timers[j].completed.push(new Date());
          } else {
            this.categories[i].timers[j].completed.shift();
          }
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
        }
      });
    });
  }
}
