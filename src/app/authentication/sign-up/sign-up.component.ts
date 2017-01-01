import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import {AuthService} from "../auth.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  providers: [AuthService]
})
export class SignUpComponent implements OnInit {

  user:User;

  constructor(private authService: AuthService) {

  }

  getUser(){
    this.authService.getUser()
  }

  ngOnInit() {
    this.getUser();
  }

  onSubmit(form: NgForm){
    const newUser = new User(form.value.firstname, form.value.lastname, form.value.username, form.value.email, form.value.password);
    console.log(newUser);
    this.authService.addUser(newUser);
    form.resetForm();
  }

}
