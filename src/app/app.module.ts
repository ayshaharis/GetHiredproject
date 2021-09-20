import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutusComponent } from './aboutus/aboutus.component';

import { PostaserviceComponent } from './postaservice/postaservice.component';

import { ReactiveFormsModule } from '@angular/forms';
import { ElectricalComponent } from './electrical/electrical.component';
import {HttpClientModule} from '@angular/common/http';
import { PlumbingComponent } from './plumbing/plumbing.component';
import { SingleworkerComponent } from './singleworker/singleworker.component';
import { CarpentryComponent } from './carpentry/carpentry.component';
import { PhotographyComponent } from './photography/photography.component'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicesComponent,
    SignupComponent,
    LoginComponent,
    NavbarComponent,
    AboutusComponent,
  
    PostaserviceComponent,
    ElectricalComponent,
    PlumbingComponent,
    SingleworkerComponent,
    CarpentryComponent,
    PhotographyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
