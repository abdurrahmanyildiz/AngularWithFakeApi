import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './core/guards/AuthGuard';
import { ConfigService } from './core/services/config.service';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { AdminlayoutComponent } from './core/layouts/adminlayout/adminlayout.component';
import { AuthlayoutComponent } from './core/layouts/authlayout/authlayout.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { JwtModule } from '@auth0/angular-jwt';
import { AlertService } from './core/services/alert.service';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    AuthlayoutComponent,
    AdminlayoutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => { return localStorage.getItem("jwt"); },
        whitelistedDomains: ["localhost:44308"],
        blacklistedRoutes: []
      }
    })
  ],
  providers: [AuthGuard, ConfigService, AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
