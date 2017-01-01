import {Message} from "./message.model";
/**
 * Created by Admin on 01-01-2017.
 */
export class MessageService{
  messages: Message[] = []; //Central messages array will be used to store and manage messages in this application

  addMessage(message){
    this.messages.push(message);
    console.log(this.messages);
  }

  getMessages(){
    return this.messages;
  }

  deleteMessage(message){
    this.messages.splice(this.messages.indexOf(message), 1);
  }
}
