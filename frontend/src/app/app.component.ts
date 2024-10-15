import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { MessageFormComponent } from './message-form/message-form.component';  // Putanja do vaše komponente
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    HttpClientModule,
    MessageFormComponent,

  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Ovaj atribut treba biti 'styleUrls' umesto 'styleUrl'
})
export class AppComponent {
  title = 'frontend';
}
