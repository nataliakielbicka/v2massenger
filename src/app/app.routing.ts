import {Routes, RouterModule} from "@angular/router";
import {AuthComponent} from "./authentication/auth.component";
import {MessagesComponent} from "./messages/messages.component";
import {SignUpComponent} from "./authentication/sign-up/sign-up.component";
import {SignInComponent} from "./authentication/sign-in/sign-in.component";
/**
 * Created by Admin on 01-01-2017.
 */

const APP_ROUTES: Routes = [
  { path: '', redirectTo: '/messages', pathMatch: 'full'},
  { path: 'messages', component: MessagesComponent},
  { path: 'signup', component: SignUpComponent}, 
  { path: 'signin', component: SignInComponent}
]

export const routing = RouterModule.forRoot(APP_ROUTES);
