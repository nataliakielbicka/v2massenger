import { Component } from '@angular/core';
import {MessageService} from "./message.service";
import {Message} from "./message.model";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'message-input',
  templateUrl: './message-input.component.html'
})
export class MessageInputComponent {
  constructor(private messageService: MessageService){}

  onSubmit(form: NgForm){
    const msg = new Message(form.value.content, "Siddharth Sogani");
    this.messageService.addMessage(msg);
    form.resetForm();
  }
}
