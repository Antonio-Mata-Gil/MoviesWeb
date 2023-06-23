
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "home"
  },
  {
  path: "home",
  pathMatch: "prefix",
  loadChildren: () => import("src/app/features/home/home.module").then(m =>m.HomeModule)
},
{
  path: "peliculas",
  pathMatch: "prefix",
  loadChildren: () => import("src/app/features/list/list.module").then(m =>m.ListModule)
},
{
  path: "movie-detail/:id",
  loadChildren: () => import("src/app/features/detail/detail.module").then(m =>m.DetailModule)
},
{
  path: "buscar/:text",
  pathMatch: "prefix",
  loadChildren: () => import("src/app/features/searcher/searcher.module").then(m =>m.SearcherModule)
},
{
  path: "edit-movie/:id",
  pathMatch: "prefix",
  loadChildren: () => import("src/app/features/edit-form/edit-form.module").then(m =>m.EditFormModule)
},
{
  path: "mis-peliculas",
  pathMatch: "prefix",
  loadChildren: () => import("src/app/features/my-movies/my-movies.module").then(m =>m.MyMoviesModule)
},
{
  path: "mi-pelicula/:id",
  loadChildren: () => import("src/app/features/my-movie-details/my-movie-details.module").then(m =>m.MyMovieDetailsModule)
},
{
  path: "vistas",
  loadChildren: () => import("src/app/features/favorites/favorites.module").then(m =>m.FavoritesModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
