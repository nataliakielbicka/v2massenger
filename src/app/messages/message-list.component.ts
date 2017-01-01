import {Component, OnInit} from '@angular/core';
import {Message} from "./message.model";
import {MessageService} from "./message.service";

@Component({
  selector: 'message-list',
  template: `<app-message
        [message]="message"
        (editClicked)="message.content = $event"
        *ngFor="let message of messages">
      </app-message>`
})
export class MessageListComponent implements OnInit{
  constructor(private messageService: MessageService){}

  messages: Message[];

  ngOnInit(){
    this.messages = this.messageService.getMessages();
  }
}
