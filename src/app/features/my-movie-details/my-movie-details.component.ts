import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyMoviesInfo } from 'src/app/core/models/my-movies.interface';
import { ApiMoviesService } from 'src/app/core/services/api-movies/api-movies.service';

@Component({
  selector: 'app-my-movie-details',
  templateUrl: './my-movie-details.component.html',
  styleUrls: ['./my-movie-details.component.scss']
})
export class MyMovieDetailsComponent {

  public myMovie?: MyMoviesInfo ;

  constructor(
    private activatedRouted: ActivatedRoute,
    private MoviesService: ApiMoviesService
  ) {
 
    this.activatedRouted.params.subscribe((params)=>{
      const idFormMovie = params['id'];
      this.MoviesService.getMovieById(idFormMovie).subscribe((movie: MyMoviesInfo) => {
        this.myMovie = movie;
        
        
      });
    })
         
    }

 
  



}


