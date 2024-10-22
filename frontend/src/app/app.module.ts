import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './features/login/login.component';
import {HttpClientModule} from '@angular/common/http';
import { SignupComponent } from './features/signup/signup.component';
import {AuthService} from './core/service/auth/auth.service';
import {NavbarComponent} from './shared/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    NavbarComponent,


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
