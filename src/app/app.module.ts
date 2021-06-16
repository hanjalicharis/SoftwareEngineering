import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopheadingComponent } from './topheading/topheading.component';

import { HttpClientModule } from '@angular/common/http';
import { NewsapiserviceService } from './service/newsapiservice.service';
import { LoginService } from './service/login.service';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { HealthComponent } from './health/health.component'
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CoronaVirusComponent } from './corona-virus/corona-virus.component';

@NgModule({
  declarations: [
    AppComponent,
    TopheadingComponent,
    EntertainmentComponent,
    HealthComponent,
    RegisterComponent,
    LoginComponent,
    CoronaVirusComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    LoadingBarHttpClientModule
  ],
  providers: [NewsapiserviceService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
