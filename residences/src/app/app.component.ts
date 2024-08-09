import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {SwiperComponent} from './swiper/swiper.component';
import { AmenitiesComponent} from './amenities/amenities.component';
import { FloorplansComponent } from './floorplans/floorplans.component';
import { RouterModule } from '@angular/router';
import { MapComponent } from './map/map.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule,HomeComponent,SwiperComponent,AmenitiesComponent,FloorplansComponent,MapComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'residences';
}
