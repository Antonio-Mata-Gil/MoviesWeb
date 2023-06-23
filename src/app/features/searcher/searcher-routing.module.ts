import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearcherComponent } from './searcher.component';

const routes: Routes = [{
  path: "",
  pathMatch: "full",
  component: SearcherComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearcherRoutingModule { }
