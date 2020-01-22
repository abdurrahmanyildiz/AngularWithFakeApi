import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthlayoutComponent } from './core/layouts/authlayout/authlayout.component';
import { LoginComponent } from './login/login.component';
import { AdminlayoutComponent } from './core/layouts/adminlayout/adminlayout.component';
import { AuthGuard } from './core/guards/AuthGuard';
import { CounterComponent } from './counter/counter.component';
import { HomeComponent } from './home/home.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';


const routes: Routes = [
  {
    path: "login", component: AuthlayoutComponent, children: [
      { path: "", component: LoginComponent }
    ]
  },
  {
    path: "admin", component: AdminlayoutComponent, children: [
      { path: 'home', component: HomeComponent, pathMatch: 'full', canActivate: [AuthGuard] },
      { path: 'counter', component: CounterComponent, canActivate: [AuthGuard] },
      { path: 'fetchdata', component: FetchDataComponent, canActivate: [AuthGuard] }
    ]
  },
  {
    path: '**', component: AuthlayoutComponent, children: [
      { path: "", component: LoginComponent }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
