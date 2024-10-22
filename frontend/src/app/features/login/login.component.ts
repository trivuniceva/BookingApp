import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from '../../service/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  login() {
    console.log("ajmo log")
    this.authService.login(this.email, this.password).subscribe(response => {
      console.log('Login successful', response);
      localStorage.setItem('user', JSON.stringify(response)); // Čuvaj korisnika
    }, error => {
      console.error('Login failed', error);
    });
  }

  forgotPassword() {

  }

  goToSignup() {
    this.router.navigate(['/signup'])
  }
}
