import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersModule } from './users/users.module';
import { DevicesModule } from './devices/devices.module';
import { PlansModule } from './plans/plans.module';
import { CardComponent } from './card/card.component';
import { ViewComponent } from './plans/viewbyid/viewbyid.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    LoginComponent,
    // ViewComponent,
    // UsersComponent,
    // PlansComponent,
    // DevicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    UsersModule,
    DevicesModule,
    // PlansModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
