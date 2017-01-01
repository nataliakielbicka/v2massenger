import {Component, OnInit} from '@angular/core';
import {Message} from "./message.model";
import {MessageService} from "./message.service";

@Component({
  selector: 'message-list',
  templateUrl: './message-list.component.html'
})
export class MessageListComponent implements OnInit{
  constructor(private messageService: MessageService){}

  messages: Message[];

  ngOnInit(){
    this.messages = this.messageService.getMessages();
  }
}
