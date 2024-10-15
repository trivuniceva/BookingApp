import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,

  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Ovaj atribut treba biti 'styleUrls' umesto 'styleUrl'
})
export class AppComponent {
  title = 'frontend';
}
