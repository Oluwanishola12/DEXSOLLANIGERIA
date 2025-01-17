import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { TestimonialComponent } from './testimonial/testimonial.component';

const routes: Routes = [

{ path:'', component: HomeComponent},
{ path:'home', component: HomeComponent},
{ path:'about', component: AboutComponent},
{ path:'contact', component: ContactComponent},
{ path:'services', component: ServicesComponent},
{ path:'testimonial', component: TestimonialComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
