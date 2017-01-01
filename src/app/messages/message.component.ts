import {Component, Input, Output, EventEmitter} from "@angular/core";
import {Message} from "./message.model";
import {MessageService} from "./message.service";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {
  constructor(private messageService: MessageService){

  }

  @Input() message: Message;
  @Output() editClicked = new EventEmitter<string>();

  color = '#e6fff7';
  editMessage(){
    this.editClicked.emit('A new value');
  }

  deleteMessage(){
    this.messageService.deleteMessage(this.message);
  }
}
