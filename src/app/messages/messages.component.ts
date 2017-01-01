import { Component } from '@angular/core';
import {MessageService} from "./message.service";

@Component({
  selector: 'messages',
  templateUrl: './messages.component.html',
  providers: [MessageService]
})
export class MessagesComponent {

}
