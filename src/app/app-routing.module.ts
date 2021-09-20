import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PostaserviceComponent } from './postaservice/postaservice.component';
import { ServicesComponent } from './services/services.component';
import { SignupComponent } from './signup/signup.component';
import { ElectricalComponent } from './electrical/electrical.component';
import { PlumbingComponent } from './plumbing/plumbing.component';
import { SingleworkerComponent } from './singleworker/singleworker.component';
import { CarpentryComponent } from './carpentry/carpentry.component';
import { PhotographyComponent } from './photography/photography.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'services',component:ServicesComponent},
  {path:'signup',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'findaservice',component:ServicesComponent},
  {path:'postaservice',component:PostaserviceComponent},
  {path:'electrical',component:ElectricalComponent},
  {path:'plumbing',component:PlumbingComponent},
  {path:':id',component:SingleworkerComponent},
  {path:'carpentry',component:CarpentryComponent},
  {path:'photography',component:PhotographyComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
