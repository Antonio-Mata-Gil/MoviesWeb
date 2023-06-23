import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearcherRoutingModule } from './searcher-routing.module';
import { SearcherComponent } from './searcher.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    SearcherComponent
  ],
  imports: [
    CommonModule,
    SearcherRoutingModule,
    SharedModule
  ]
})
export class SearcherModule { }
