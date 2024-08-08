import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { HomeIntroComponent } from '../home-intro/home-intro.component';
import { SwiperComponent } from '../swiper/swiper.component';
import {FloorplansComponent} from '../floorplans/floorplans.component';
import {AmenitiesComponent} from '../amenities/amenities.component';
import {Swiper2Component} from '../swiper2/swiper2.component'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,HomeIntroComponent,SwiperComponent,FloorplansComponent,AmenitiesComponent,Swiper2Component],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
