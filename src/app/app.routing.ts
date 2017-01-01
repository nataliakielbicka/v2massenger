import {Routes, RouterModule} from "@angular/router";
import {AuthComponent} from "./authentication/auth.component";
import {MessagesComponent} from "./messages/messages.component";
/**
 * Created by Admin on 01-01-2017.
 */

const APP_ROUTES: Routes = [
  { path: '', redirectTo: '/messages', pathMatch: 'full'},
  { path: 'messages', component: MessagesComponent},
  { path: 'auth', component: AuthComponent}
]

export const routing = RouterModule.forRoot(APP_ROUTES);
