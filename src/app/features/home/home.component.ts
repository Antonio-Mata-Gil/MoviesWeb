import { ApiMoviesService } from './../../core/services/api-movies/api-movies.service';
import { Component, OnInit } from '@angular/core';
import { FilmsComing, upcomingFilms } from 'src/app/core/models/upcoming.interfaces';
import { Movie } from 'src/app/core/models/movie.interface';
import { TopMovie } from 'src/app/core/models/top-rated.interface';
import { TansformedMoviesInfo } from 'src/app/core/models/movies.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public movieShow: Movie[] = [];
  public popularMovies: TansformedMoviesInfo[] = [];
  public topMovies: TopMovie[] = [];
  public upcomingMovies: FilmsComing[] = [];
  public upcomingDates: upcomingFilms[] = [];




  ngOnInit(): void {
   this.getmoviesPremiere(),
   this.getmoviesPopular(),
   this.getmoviesTop(),
   this.getmoviesUpcoming()
  }

  public getmoviesPremiere(){
    this.MoviesService.getFilm().subscribe(movies=>{
      this.movieShow = movies
    
      
    })
  }
  public getmoviesPopular(){
    this.MoviesService.getAllMovies(1).subscribe(moviesPopular=>{
      this.popularMovies = moviesPopular;
     
      
    })
  }
  public getmoviesTop(){
    this.MoviesService.getTopRated().subscribe(moviesTop=>{
      this.topMovies = moviesTop;
      
      
    })
  }
  public getmoviesUpcoming(){
    this.MoviesService.getUpcomingFilm().subscribe((movieUpcoming: FilmsComing[])=>{
      this.upcomingMovies = movieUpcoming;
      
      
      
    })
  }

  constructor(private MoviesService: ApiMoviesService){
    
  }

  isLargeScreen = true;

  onScreenSizeChange(isLargeScreen: boolean) {
    this.isLargeScreen = isLargeScreen;
  }
}
