import { Injectable } from '@angular/core';
import { User } from '../user'; 

@Injectable()
export class SignupService {

  user: User[] = [];
  constructor() { }

  getUser(firstname, lastname, username, email, password) {
    console.log(this.user);
  }

}
