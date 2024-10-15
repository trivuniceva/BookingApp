import { Routes } from '@angular/router';
import { AboutComponent } from './shared/about/about.component';
import {LoginComponent} from './features/auth/login/login.component';
import {HomePageComponent} from './features/home-page/home-page.component';
import {SearchDefaultComponent} from './shared/search-default/search-default.component';
import {SignupComponent} from './features/auth/signup/signup.component';
import {MessageFormComponent} from './message-form/message-form.component';

export const routes: Routes = [
  { path: '', component:  HomePageComponent}, // Redirekcija na početnu stranicu
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'search', component: SearchDefaultComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'messages', component: MessageFormComponent },
];
