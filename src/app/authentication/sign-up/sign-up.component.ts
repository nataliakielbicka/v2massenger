import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { SignupService } from './signup.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  providers: [SignupService]
})
export class SignUpComponent implements OnInit {

  user:User[] = [];

  constructor(private signupService: SignupService) {
    this.user = new User[{
      firstname: 'Adam', 
      lastname: 'John',
      username: 'aaa',
      email: 'aaa@yaho.eu'
      password: 'abc123'
    }];
   }

  getUser():void {
    this.signupService.getUser(User.firstname, lastname, username, email, password);
  }

  ngOnInit() {
    this.getUser();
  }

}
