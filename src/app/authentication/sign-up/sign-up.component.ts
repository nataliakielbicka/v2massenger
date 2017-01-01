import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  providers: [AuthService]
})
export class SignUpComponent implements OnInit {

  user:User;

  constructor(private authService: AuthService) {
    this.user = new User('Adam', 'John', 'aaa', 'aaa@yaho.eu', 'abc123');
   }

  getUser():void {
    this.authService.getUser()
  }

  ngOnInit() {
    this.getUser();
  }

}
