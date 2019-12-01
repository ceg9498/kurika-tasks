import { Injectable } from '@angular/core';

const MAX_MESSAGES:number = 5;

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages:{title:string, message:string, error:boolean}[] = [];
  constructor() { }

  getMessages(){
    return this.messages;
  }

  addMessage(title:string, message:string, error:boolean){
    this.messages.push({title:title, message:message, error:error});
    if(this.messages.length > MAX_MESSAGES) {
      this.messages.shift();
    }
  }
  addNotice(title:string, message:string){
    this.addMessage(title, message, false);
  }
  addError(title:string, message:string){
    this.addMessage(title, message, true);
  }

  removeMessage(title:string, message:string, error:boolean){
    for(let [index, msg] of this.messages.entries()){
      if(msg.title === title &&
        msg.message === message &&
        msg.error === error){
          this.messages.splice(index, 1);
          break;
        }
    }
  }
}
