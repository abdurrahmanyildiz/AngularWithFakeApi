import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { JwtModule } from '@auth0/angular-jwt';
import { AlertService } from './core/services/alert.service';
import { PageSizeComponent } from './core/components/page-size/page-size.component';
import { PageNumberComponent } from './core/components/page-number/page-number.component';
import { HttpErrorInterceptor } from './core/interceptors/HttpErrorInterceptor';
import { ErrorsHandler } from './core/interceptors/ErrorInterceptor';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    AuthlayoutComponent,
    AdminlayoutComponent,
    PageSizeComponent,
    PageNumberComponent
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
  providers: [AuthGuard, ConfigService, AlertService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    },
    {
      provide: ErrorHandler,
      useClass: ErrorsHandler
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
