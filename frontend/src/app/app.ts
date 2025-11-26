import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './component/auth/login/login';
import { Appbar } from './component/templates/appbar/appbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Login, Appbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('frontend');
}
