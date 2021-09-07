import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { FindaserviceComponent } from './findaservice/findaservice.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PostaserviceComponent } from './postaservice/postaservice.component';
import { ServicesComponent } from './services/services.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'services',component:ServicesComponent},
  {path:'signup',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'findaservice',component:ServicesComponent},
  {path:'postaservice',component:PostaserviceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
