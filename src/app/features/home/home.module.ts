import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { MoviePremiereComponent } from './movie-premiere/movie-premiere.component';
import { SwiperModule } from 'swiper/angular';

import { TopRatedComponent } from './top-rated/top-rated.component';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { SharedModule } from 'src/app/shared/shared.module';




@NgModule({
  declarations: [
    HomeComponent,
    MoviePremiereComponent,
    TopRatedComponent,
    UpcomingComponent,
    
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SwiperModule,
    SharedModule
    
  ]
})
export class HomeModule { }
