import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PIndexComponent } from './index/index.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PlansRoutingModule } from './plans-routing-module';
import { ViewComponent } from './viewbyid/viewbyid.component';

@NgModule({
  declarations: [
    PIndexComponent,
    ViewComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PlansRoutingModule
  ]
})
export class PlansModule { }
