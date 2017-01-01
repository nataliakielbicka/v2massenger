import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import {MessageComponent} from "./messages/message.component";
import {MessageListComponent} from "./messages/message-list.component";
import {MessageInputComponent} from "./messages/message-input.component";
import {MessageService} from "./messages/message.service";
import {MessagesComponent} from "./messages/messages.component";
import {AuthComponent} from "./authentication/auth.component";
import {NavbarComponent} from "./navbar.component";
import {routing} from "./app.routing";
=======
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
>>>>>>> 36a71a4e10c5abfb2bf00bbcaca501e6f4d1e7f3

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    MessageComponent,
    MessageListComponent,
    MessageInputComponent,
    MessagesComponent,
    AuthComponent,
    NavbarComponent
=======
    SignInComponent,
    SignUpComponent
>>>>>>> 36a71a4e10c5abfb2bf00bbcaca501e6f4d1e7f3
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
