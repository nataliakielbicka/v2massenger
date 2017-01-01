import { Injectable } from '@angular/core';
import {User} from "./user.model";

@Injectable()
export class AuthService {

  user: User;
  constructor() { }

  getUser() {
    console.log(this.user);
  }

  addUser(){
    console.log('sth');
  }

}
