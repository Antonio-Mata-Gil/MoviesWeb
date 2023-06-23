import { Component, Input, OnInit } from '@angular/core';
import { FilmsComing } from 'src/app/core/models/upcoming.interfaces';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.scss']
})
export class UpcomingComponent implements OnInit {
 
 
  @Input() public upcomingMovie?: FilmsComing[];
  
  public todayDate: Date = new Date();
  public changedDate: string | null = '';
  public filteredMovies?: FilmsComing[] = [];
  pipe = new DatePipe('en-EN');

  constructor(private router: Router) {
    
  }

  onMovieClick(films: FilmsComing){
    this.router.navigate(['/movie-detail', films.id])
  }

  


  ngOnInit(): void {
    this.changeFormat(),
    this.filterMovies();
  }

  changeFormat(){
   let ChangedFormat = this.pipe.transform(this.todayDate, 'yyyy-MM-dd'); 
   this.changedDate = ChangedFormat ;
    
  }

  filterMovies(): boolean {
    if (this.upcomingMovie && this.changedDate) {
      this.filteredMovies = this.upcomingMovie.filter(film => film.release_date > this.changedDate!);
    
      
      
      return true;
    }
    return false;
  }
}
