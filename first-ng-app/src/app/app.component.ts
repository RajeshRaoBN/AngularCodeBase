import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './cinoibebts/header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent, HeaderComponent],
  templateUrl: 
    './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'first-ng-app';
}
