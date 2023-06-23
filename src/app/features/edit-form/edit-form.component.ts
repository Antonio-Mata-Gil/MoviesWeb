import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyMoviesInfo } from 'src/app/core/models/my-movies.interface';
import { ApiMoviesService } from 'src/app/core/services/api-movies/api-movies.service';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss']
})
export class EditFormComponent {
public movie? : MyMoviesInfo;
constructor(private myMovieApi: ApiMoviesService, private activatedRouter: ActivatedRoute){

  this.activatedRouter.params.subscribe((params)=>{
    const idFormMovie = params['id'];
    this.myMovieApi.getMovieById(idFormMovie).subscribe((movie: MyMoviesInfo) => {
      this.movie = movie;
      
      
    });
  })
}

}
