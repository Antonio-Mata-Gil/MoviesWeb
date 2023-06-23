import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DetailsMovie } from 'src/app/core/models/details.interface';
import { TansformedMoviesInfo } from 'src/app/core/models/movies.interface';
import { MyMoviesInfo, Genre } from 'src/app/core/models/my-movies.interface';
import { ApiMoviesService } from 'src/app/core/services/api-movies/api-movies.service';

@Component({
  selector: 'app-my-movies',
  templateUrl: './my-movies.component.html',
  styleUrls: ['./my-movies.component.scss']
})
export class MyMoviesComponent  implements OnInit{


constructor(private router: Router, private myMoviesCreated: ApiMoviesService){}


public moviesCreated: MyMoviesInfo[] = [];

ngOnInit(): void {
 this.getMyMoviesCreated() 
}


public getMyMoviesCreated() {
  this.myMoviesCreated.getCreateMovies().subscribe((data) => {
    this.moviesCreated = data;
    
    
  });
}

public onCreateMovie(movieCreate: MyMoviesInfo){
this.moviesCreated.push(movieCreate)
}

  public onMovieClick(films: MyMoviesInfo){
    this.router.navigate(['/mi-pelicula', films.id])
  }
  
  public onDeleteMovie(films: MyMoviesInfo){
    this.myMoviesCreated.deleteMovie(films.id).subscribe(()=>{
      this.getMyMoviesCreated() 
    })
  }
}
