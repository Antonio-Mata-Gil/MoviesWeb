import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ApiMoviesService } from 'src/app/core/services/api-movies/api-movies.service';
import { Movie } from 'src/app/core/models/movie.interface';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.scss']
})
export class SearcherComponent implements OnInit {

  public text: string = '';
  public movies: Movie[] = [];

  constructor( private router: Router, private activateRouter: ActivatedRoute, private searcherApi: ApiMoviesService){}

  ngOnInit(): void {
    this.activateRouter.params.subscribe(params=>{
      this.text = params['text'];
      
    })
    this.getValueSeacher();
  }

  public getValueSeacher(){
    this.searcherApi.getSearcher(this.text).subscribe(movies=>{
      this.movies = movies
      
    })
  }
  onMovieClick(films: Movie){
    this.router.navigate(['/movie-detail', films.id])
    
    
  }
}
