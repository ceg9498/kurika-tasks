import { Injectable } from '@angular/core';

const MAX_MESSAGES:number = 5;
const ONE_MINUTE:number = 60000;

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages:{id:string, title:string, message:string, error:boolean}[] = [];
  timers: any[] = [];
  constructor() { }

  getMessages(){
    return this.messages;
  }

  addMessage(title:string, message:string, error:boolean, delay?:number){
    if(!delay){
      delay = ONE_MINUTE;
    }
    let id = generate();
    this.messages.push({
      id: id,
      title: title,
      message: message,
      error: error
    });
    this.timers[id] = setTimeout(()=> {
      this.removeMessage(id);
    }, delay);
    if(this.messages.length > MAX_MESSAGES) {
      clearTimeout(this.timers[this.messages[0].id]);
      this.messages.shift();
    }
  }
  addNotice(title:string, message:string, delay?:number){
    this.addMessage(title, message, false, delay);
  }
  addError(title:string, message:string, delay?:number){
    this.addMessage(title, message, true, delay);
  }

  removeMessage(id:string){
    for(let [index, msg] of this.messages.entries()){
      if(msg.id === id){
          clearTimeout(this.timers[this.messages[index].id]);
          this.messages.splice(index, 1);
          break;
        }
    }
  }
}

// ID generator
function partial() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(36);
}

function generate() {
  let id = '';
  for(let i=0;i<6;i++){
    id += partial();
  }
  return id;
}