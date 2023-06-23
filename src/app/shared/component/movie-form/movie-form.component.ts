
import { DetailsMovie, Genre } from 'src/app/core/models/details.interface';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { genresMovies } from './genres.models';
import { Router } from '@angular/router';
import { TansformedMoviesInfo } from 'src/app/core/models/movies.interface';
import { MyMoviesInfo } from 'src/app/core/models/my-movies.interface';
import { ApiMoviesService } from 'src/app/core/services/api-movies/api-movies.service';
@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.scss']
})
export class MovieFormComponent implements OnInit {
  @Input() public movieDetails?: DetailsMovie;
  @Input() public movie?: MyMoviesInfo;
  @Output() public onCreateMovie: EventEmitter<MyMoviesInfo> = new EventEmitter()

  public movieForm?: FormGroup;
  public genderForm: Genre[] = genresMovies;
  public moviesArray: MyMoviesInfo[] = [];



  constructor(private fb: FormBuilder, private router: Router, private movieService: ApiMoviesService) {

  }
  ngOnInit(): void {
    this.movieForm = this.fb.group({
      title: new FormControl(this.movie?.title || '', [Validators.required]),
      genres: new FormControl(this.movie?.genres || '', [Validators.required]),
      overview: new FormControl(this.movie?.overview || '', [Validators.required]),
      poster_path: new FormControl(this.movie?.poster_path || '', [Validators.required]),
      release_date: new FormControl(this.movie?.release_date || '', [Validators.required]),
      runtime: new FormControl(this.movie?.runtime || '', [Validators.required]),
      vote_average: new FormControl(this.movie?.vote_average || '', [Validators.required, Validators.pattern(/^(?:[1-9]|10)$/)]),
      
    })
   
  }



  public createMovie() {


    if (this.movieForm?.valid) {
      const productRequest = this.movie
        ? this.movieService.editMovie(this.movie.id, this.movieForm.value)
        : this.movieService.createMovie(this.movieForm.value);
      productRequest.subscribe((movie: MyMoviesInfo) => {
        this.movieForm?.reset();


        this.onCreateMovie.emit(movie);
      });
    }
  }



}



