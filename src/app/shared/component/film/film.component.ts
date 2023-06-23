import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesInfo, TansformedMoviesInfo } from 'src/app/core/models/movies.interface';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent {
  @Input() public movie?: TansformedMoviesInfo;
  

  constructor(private router: Router) {
    
  }
  

  onMovieClick(movie: TansformedMoviesInfo){
    this.router.navigate(['/movie-detail', movie.id])

    
    
  }


}
