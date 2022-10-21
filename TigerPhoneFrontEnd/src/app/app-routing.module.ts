import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PIndexComponent } from './plans/index/index.component';
import { IndexComponent } from './users/index/index.component';
import { DIndexComponent } from './devices/index/index.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'Users', component: IndexComponent },
  { path: 'Devices', component: DIndexComponent },
  { path: 'Plans', component: PIndexComponent },
  { path: 'Login', component: LoginComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
