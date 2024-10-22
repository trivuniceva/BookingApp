import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './features/auth/login/login.component';
import {HttpClientModule} from '@angular/common/http';
import { SignupComponent } from './features/auth/signup/signup.component';
import {AuthService} from './core/service/auth/auth.service';
import {NavbarComponent} from './shared/navbar/navbar.component';
import { UserProfileComponent } from './features/user-profile/user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    NavbarComponent,
    UserProfileComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [
    AuthService,
  ],
  bootstrap: [AppComponent],
  // exports: [
  //   NavbarComponent,
  //
  // ],

})
export class AppModule { }
