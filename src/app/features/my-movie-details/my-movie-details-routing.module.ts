import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyMovieDetailsComponent } from './my-movie-details.component';

const routes: Routes = [{
  path: "",
  pathMatch: "full",
  component: MyMovieDetailsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyMovieDetailsRoutingModule { }
