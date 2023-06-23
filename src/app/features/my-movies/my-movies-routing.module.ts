import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyMoviesComponent } from './my-movies.component';

const routes: Routes = [{
  path: "",
  pathMatch: "full",
  component: MyMoviesComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyMoviesRoutingModule { }
