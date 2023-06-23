import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TopMovie } from 'src/app/core/models/top-rated.interface';


@Component({
  selector: 'app-top-rated',
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.scss']
})
export class TopRatedComponent implements OnInit {
  
  @Input() public topMovie?: TopMovie[];

  constructor(private router: Router) {
    
  }

  onMovieClick(films: TopMovie){
    this.router.navigate(['/movie-detail', films.id])
  }

  ngOnInit(): void {
    
  }

}
