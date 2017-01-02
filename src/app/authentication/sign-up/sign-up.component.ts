import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import {AuthService} from "../auth.service";
import {NgForm} from "@angular/forms";
import { EqualValidator } from '../pass-validator.directive';

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
    this.user = {
      firstname: '',
      lastname: '',
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
      }
    this.getUser();
  }  
    onSubmit(model: User, isValid: boolean) {
      // call API to save user
      console.log(model, isValid);
      const newUser = new User(this.user.firstname, this.user.lastname, this.user.username, this.user.email, this.user.password, this.user.confirmPassword);
      
      this.authService.addUser(newUser);
      console.log(newUser);
    }
  // onSubmit(form: NgForm){
  //   const newUser = new User(form.value.firstname, form.value.lastname, form.value.username, form.value.email, form.value.password, form.value.confirmPassword);
  //   console.log(newUser);
  //   this.authService.addUser(newUser);
  //   form.resetForm();
  // }

}
