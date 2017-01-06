import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {User} from "../user.model";
import {AuthService} from "../auth.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
  providers: [AuthService]
})
export class SignInComponent implements OnInit {

  user:User;
  returnUrl: string;
  loading = false;

  constructor(private authService: AuthService, private route: ActivatedRoute,
        private router: Router) {
      this.authService.getUser();
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

  login() {
      this.loading = true;
        this.authService.login(this.user.username, this.user.password)
            .subscribe(
                data => {
                  this.login
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.loading = false;
                });
    }

}
