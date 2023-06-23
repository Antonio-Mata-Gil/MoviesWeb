import { Component, OnInit } from '@angular/core';
import { MoviesInfo, TansformedMoviesInfo } from 'src/app/core/models/movies.interface';
import { ApiMoviesService } from 'src/app/core/services/api-movies/api-movies.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public allMovies: TansformedMoviesInfo[] = [];
public page: number = 1;



  ngOnInit(): void {
    
    this.getAllDataMovies();
   
    
    
    
  }

  public getAllDataMovies(){
    this.moviesApi.getAllMovies(this.page).subscribe(movies=>{
    
      this.allMovies = movies
     
      
    })
  }
  public onPaginationNext(){
    this.page = this.page + 1;
    this.moviesApi.getAllMovies(this.page).subscribe(page=>{
     
      
      this.allMovies = page
    })
  }

  public onPaginationPrevius(){
    this.page = this.page - 1;
    this.moviesApi.getAllMovies(this.page).subscribe(page=>{
      
      
      this.allMovies = page
    })
  }

 

  
  constructor(private moviesApi: ApiMoviesService){

  }

}
