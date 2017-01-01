/**
 * Created by Siddharth Sogani on 01-01-2017.
 */

import {Routes, RouterModule} from "@angular/router";
import {SignUpComponent} from "./sign-up/sign-up.component";
import {SignInComponent} from "./sign-in/sign-in.component";
/**
 * Created by Admin on 01-01-2017.
 */

export const AUTH_ROUTES: Routes = [
  { path: '', redirectTo: 'sign-up', pathMatch: 'full'},
  { path: 'sign-up', component: SignUpComponent},
  { path: 'sign-in', component: SignInComponent}
];
