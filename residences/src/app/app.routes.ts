import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {SwiperComponent} from './swiper/swiper.component'
import { AmenitiesComponent } from './amenities/amenities.component';
import { FloorplansComponent } from './floorplans/floorplans.component';
import { MapComponent } from './map/map.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "home",
        component: HomeComponent
    },
    {
        path: "residences",
        component: SwiperComponent

        
    },
    {
        path: "amenities" ,
        component: AmenitiesComponent
    },

    {
        path: "location" ,
        component: MapComponent
    },
    {
        path: "floorPlans" ,
        component:FloorplansComponent
    }
    
]
