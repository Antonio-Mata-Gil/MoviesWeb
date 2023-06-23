import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Apicredit } from 'src/app/core/models/credit.interface';
import { ApiDetailsMovie, DetailsMovie } from 'src/app/core/models/details.interface';
import { ViewMovie, ViewMovieTransformed } from 'src/app/core/models/view.interface';
import { ApiMoviesService } from 'src/app/core/services/api-movies/api-movies.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  public movie?: DetailsMovie;
  public creditMovie?: Apicredit;
  public viewMovie: ViewMovieTransformed[] = [];

  constructor(
    private activatedRouted: ActivatedRoute,
    private moviesService: ApiMoviesService
  ) {}

  ngOnInit(): void {
    this.getDetails();
    this.getCredit();
    this.loadViewMovies();
  }

  public getDetails() {
    const { id } = this.activatedRouted.snapshot.params;
    this.moviesService.getDetailsMovies(id).subscribe(movie => {
      this.movie = movie;
    });
  }

  public getCredit() {
    const { id } = this.activatedRouted.snapshot.params;
    this.moviesService.getCredit(id).subscribe(credit => {
      this.creditMovie = credit;
    });
  }

  public loadViewMovies() {
    this.moviesService.getFavoriteMovies().subscribe(viewMovies => {
      this.viewMovie = viewMovies;
      console.log(this.viewMovie);
      
      if (this.movie) {
        const isMovieInFavorites = this.viewMovie.some(view => view.id === this.movie?.id);
        this.movie.view = isMovieInFavorites;
        console.log(this.viewMovie);
        
      }
    });
  }

  public addView() {
    if (this.movie) {
      this.movie.view = !this.movie.view;

      if (this.movie.view) {
        this.moviesService.addViewMovie(this.movie).subscribe(viewMovie => {
          this.viewMovie.push(viewMovie);
          console.log(viewMovie);
          
        });
      } else {
        const viewIndex = this.viewMovie.findIndex(view => view.id === this.movie?.id);
        console.log(viewIndex);
        
        if (viewIndex !== -1) {
          const viewId = this.viewMovie[viewIndex].mockApiId ?? ''; 
          this.moviesService.removeMovie(viewId).subscribe(() => {
            this.viewMovie.splice(viewIndex, 1);
          });
        }
        
      }
    }
  }
}
