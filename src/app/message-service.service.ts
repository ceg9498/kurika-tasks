import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageServiceService {
  messages:{title:string, message:string, error:boolean}[] = [];
  constructor() { }

  getMessages(){
    return this.messages;
  }

  addMessage(title:string, message:string, error:boolean){
    this.messages.push({title:title, message:message, error:error});
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
