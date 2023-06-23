import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyMoviesRoutingModule } from './my-movies-routing.module';
import { MyMoviesComponent } from './my-movies.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    MyMoviesComponent,
  
  ],
  imports: [
    CommonModule,
    MyMoviesRoutingModule,
    SharedModule
  ],
  exports:[
    MyMoviesComponent
  ]
})
export class MyMoviesModule { }
