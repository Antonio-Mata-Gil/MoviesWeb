import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyMovieDetailsRoutingModule } from './my-movie-details-routing.module';
import { MyMovieDetailsComponent } from './my-movie-details.component';


@NgModule({
  declarations: [
    MyMovieDetailsComponent
  ],
  imports: [
    CommonModule,
    MyMovieDetailsRoutingModule
  ]
})
export class MyMovieDetailsModule { }
