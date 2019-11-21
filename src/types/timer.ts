export type timer = {
  id: number|string,
  title: string,
  resetTime: Date,
  required: boolean,
  completed: Date[],
  isCompleted: boolean,
  period: string,
  description?:string,
  category?:string,
  countdown?:string
}
/*
  period shoud be set to:

  i-XX-unit:
    interval XX weeks / interval XX hours
  r-x-yyyy-mm-dd-hh-mm-#dow: 
    regular-(local/global)-year-month-day-hour-minute-# day of week
    where x is 'l' or 'g'
  nr
    no repeat

  these strings will be parsed out for dynamic resets
  year/month are not planned to be used right now, but there in case I do decide to use them
  day might be used, undecided (set to 0)
  hours used, as in: 15 UTC for daily/8 UTC for weekly
  # day of week: useful for "do on specific days" such as weekly reset, fashion report, etc.
*/

export class Timer {
  id: number|string;
  title: string;
  resetTime: Date;
  required: boolean;
  completed: Date[];
  isCompleted: boolean;
  period: string;
  description?:string;
  category?:string;
  countdown?:string;
  
  constructor(
    title:string,
    required:boolean, 
    isCompleted:boolean, 
    period:string, 
    description?:string,
    category?:string
  ){
    this.id = generate();
    this.title = title;
    this.required = required;
    this.category = category;
    this.description = description;
    this.isCompleted = isCompleted;

    if(this.isCompleted){
      this.completed = [new Date()];
    } else {
      this.completed = [];
    }

    this.period = period;
    
    this.resetTime = null;
    this.countdown = null;
  }

  toggleComplete(){
    this.isCompleted = !this.isCompleted;
    if(this.isCompleted){
      this.completed.push(new Date());
      if(this.completed.length > 7){
        this.completed.shift();
      }
      this.setReset();
      // generate a countdown
    }
  }
  
  checkReset(){
    let now = new Date();
    // if `now` is MORE than `resetTime`, reset
    if(now.valueOf() > this.resetTime.valueOf()){
      this.isCompleted = false;
      this.resetTime = null;
      this.countdown = null;
    }
  }

  private setReset(){
    let reset = this.period.split('-');
    this.resetTime = new Date();
    
    switch(reset[0]){
      case 'nr':
        // no reset: nothing happens!
        return;
      case 'i':
        // reset after reset[1] amount of reset[2] units
        let amount = parseInt(reset[1]);
        switch(reset[2]){
          case "minutes":
            this.resetTime.setMinutes(this.resetTime.getMinutes() + amount);
            break;
          case "hours":
            this.resetTime.setHours(this.resetTime.getHours() + amount);
            break;
          case "days":
            this.resetTime.setDate(this.resetTime.getDate() + amount);
            break;
          default:
            console.error(`ERROR: interval unit ${reset[2]} not recognized.`);
        }
        break;
      case 'r':
        /* 
          0: 'r(g/l)'
          1: global/local
          2: year // currently unused
          3: month // currently unused
          4: day of month // currently unused
          5: hours
          6: minutes
          7: days of week
        */
        
        let useUTC = false;
        if(reset[1] === 'g'){
          useUTC = true;
        }
        // reset[2] (unused)
        // reset[3] (unused)
        // reset[4] (unused)
        let hours = parseInt(reset[5]);
        let minutes = parseInt(reset[6]);
        let daysofweek = reset[7].split('').map(str=>{
          return parseInt(str);
        });

        // calculate & set the date
        this.resetTime.setDate(this.resetTime.getDate() + this.distance(daysofweek, hours, useUTC));

        if(useUTC){
          this.resetTime.setUTCHours(hours);
          this.resetTime.setUTCMinutes(minutes);
        } else {
          this.resetTime.setHours(hours);
          this.resetTime.setMinutes(minutes);
        }
        this.resetTime.setSeconds(0);
        this.resetTime.setMilliseconds(0);
        break;
      default:
        console.error("Errors were made in setReset()'s switch block!",reset[0])
    }
  }

  private distance(daysofweek:number[], hours:number, isUTC:boolean){
    const DAYS_IN_WEEK = 7;
  
    // this logic block is specifically for Days of Week
    let index:number;
    let distance:number;
  
    // if today is a reset day
    if(daysofweek.indexOf(this.resetTime.getDay()) > -1){
      // get the index of the day of week
      index = daysofweek.indexOf(this.resetTime.getDay());
  
      // if the target hours are later than current hour:
      // make sure to check against UTC if the timer is Global
      let currentHours:number;
      if(isUTC){
        currentHours = this.resetTime.getUTCHours();
      } else {
        currentHours = this.resetTime.getHours()
      }
      if(currentHours >= hours) {
        if(daysofweek.length === 1){
          // when there's only one day, set this.resetTime to the next occurance
          distance = 7;
        } else {
          // set the reset to the next day
          index++;
          distance = (DAYS_IN_WEEK + daysofweek[index] - this.resetTime.getDay()) % 7;
        }
      } else {
        // when the hours haven't passed, it's the same day.
        distance = 0;
      }
    } else {
      // get the next day of week from today, and use it as the index
      for(let day of daysofweek){
        if(day > this.resetTime.getDay()){
          distance = (DAYS_IN_WEEK + day - this.resetTime.getDay()) % 7;
          break;
        }
      }
      // for loop will fail to set day if the next occurance has already passed
      if(distance === undefined){
        distance = (DAYS_IN_WEEK + daysofweek[0] - this.resetTime.getDay()) % 7;
      }
    }
  
    return distance;
  }
}

// ID generator
function partial() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(36);
}

function generate() {
  let id = '';
  for(let i=0;i<6;i++){
    id += this.partial();
  }
  return id;
}