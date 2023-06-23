import { FilmComponent } from './component/film/film.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PosterPipe } from './pipes/poster/poster.pipe';
import { FilterPipe } from './pipes/filter/filter.pipe';
import { MovieFormComponent } from './component/movie-form/movie-form.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    PosterPipe,
    FilterPipe,
    FilmComponent,
    MovieFormComponent
   
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [PosterPipe, FilterPipe, FilmComponent, MovieFormComponent ]
})
export class SharedModule { }
