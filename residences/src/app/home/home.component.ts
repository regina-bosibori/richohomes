import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { HomeIntroComponent } from '../home-intro/home-intro.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,HomeIntroComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
