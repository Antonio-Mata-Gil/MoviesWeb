
import { Component, Input, Output, OnInit, EventEmitter, HostListener, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/core/models/movie.interface';

import SwiperCore, { Navigation, Pagination } from 'swiper';
import Swiper from 'swiper';


SwiperCore.use([Navigation, Pagination]);




@Component({
  selector: 'app-movie-premiere',
  templateUrl: './movie-premiere.component.html',
  styleUrls: ['./movie-premiere.component.scss'],
  encapsulation: ViewEncapsulation.None

  
})

export class MoviePremiereComponent implements OnInit, AfterViewInit {
 
  @Input() public premiereMovies?: Movie[];
  @Output() screenSizeChange = new EventEmitter<boolean>();
  isLargeScreen = true;
  public myswiper?: Swiper;

  constructor(private router: Router) {
    
  }
  ngAfterViewInit(): void {
    this.myswiper = new Swiper('.swiper', {
      
    });
  }
 
  @HostListener('window:resize', ['$event'])
  onResize(event: Movie) {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.isLargeScreen = window.innerWidth > 1024;
    this.screenSizeChange.emit(this.isLargeScreen);
  }

  onMovieClick(films: Movie){
    this.router.navigate(['/movie-detail', films.id])
  }


  ngOnInit(): void {
    this.checkScreenSize();
    
    
  }
}
