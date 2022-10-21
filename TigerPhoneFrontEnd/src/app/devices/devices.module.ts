import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DIndexComponent } from './index/index.component';
import { ViewComponent } from './viewbyid/viewbyid.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DeviceRoutingModule } from './device-routing-module';
// import { DevicesoneachplanComponent } from '../plans/devicesoneachplan/devicesoneachplan.component';

@NgModule({
  declarations: [
    DIndexComponent,
    ViewComponent,
    // DevicesoneachplanComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DeviceRoutingModule
  ]
})
export class DevicesModule { }
