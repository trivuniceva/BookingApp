import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import { Router } from "@angular/router";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']  // Ispravljeno styleUrl u styleUrls
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;
  currentStep: number = 1;

  constructor(private router: Router, private fb: FormBuilder) { }  // Uklonjen višak zarez

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      address: [''],
      phone: ['']
    });
  }

  goToStep(step: number): void {
    this.currentStep = step;
  }

  onSubmit(): void {
    // if (this.signupForm.valid && this.signupForm.value.password === this.signupForm.value.confirmPassword) {
    //   const userData = {
    //     email: this.signupForm.value.email,
    //     password: this.signupForm.value.password,
    //     firstname: this.signupForm.value.firstname,
    //     lastname: this.signupForm.value.lastname,
    //     address: this.signupForm.value.address,
    //     phone: this.signupForm.value.phone
    //   };
    //
    //   this.userService.register(userData).subscribe(
    //     response => {
    //       console.log('Registration successful:', response);
    //       this.router.navigate(['/login']);
    //     },
    //     error => {
    //       console.error('Registration error:', error);
    //     }
    //   );
    // } else {
    //   console.error('Form is invalid or passwords do not match');
    // }
  }
}
