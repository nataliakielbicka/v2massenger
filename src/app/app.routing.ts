import {Routes, RouterModule} from "@angular/router";
import {AuthComponent} from "./authentication/auth.component";
import {MessagesComponent} from "./messages/messages.component";
import {AUTH_ROUTES} from "./authentication/auth.routing";
/**
 * Created by Admin on 01-01-2017.
 */

const APP_ROUTES: Routes = [
  { path: '', redirectTo: '/messages', pathMatch: 'full'},
  { path: 'messages', component: MessagesComponent},
  { path: 'auth', component: AuthComponent, children: AUTH_ROUTES}
]

export const routing = RouterModule.forRoot(APP_ROUTES);
