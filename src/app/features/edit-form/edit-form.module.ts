import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditFormRoutingModule } from './edit-form-routing.module';
import { EditFormComponent } from './edit-form.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    EditFormComponent
  ],
  imports: [
    CommonModule,
    EditFormRoutingModule,
    SharedModule
  ]
})
export class EditFormModule { }
