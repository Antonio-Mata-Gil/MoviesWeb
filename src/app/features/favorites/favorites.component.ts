import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ViewMovie } from 'src/app/core/models/view.interface';
import { ApiMoviesService } from 'src/app/core/services/api-movies/api-movies.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  public viewMovie?: ViewMovie[] = []

  constructor( private router: Router,
    private MoviesService: ApiMoviesService){}

    ngOnInit(): void {
      this.getFavoriteFilms()
    
      
    }

    public getFavoriteFilms(){
      this.MoviesService.getFavoriteMovies().subscribe(movies=>{
        this.viewMovie = movies
        console.log(this.viewMovie);        
      })
    }
    onMovieClick(movie: ViewMovie){
      this.router.navigate(['/movie-detail', movie.id])
  
    }
}
