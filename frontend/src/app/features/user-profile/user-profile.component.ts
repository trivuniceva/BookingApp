import { Component } from '@angular/core';
import {AuthService} from '../../core/service/auth/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
  user: any;
  isEditing = false;

  constructor(private authService: AuthService) {}
  ngOnInit(): void {
    this.user = this.authService.getCurrentUser()
    console.log("ovog usera gledas info " + this.user);
  }

  enableEditing() {
    this.isEditing = true;
  }

  saveChanges() {

  }

  cancelEditing() {
    this.isEditing = false;
  }

  onFileSelected($event: Event) {

  }
}
