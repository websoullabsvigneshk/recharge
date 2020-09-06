import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component'
import { AboutComponent } from './components/about/about.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CustomerComponent } from './components/customer/customer.component';
import { NowComponent } from './components/now/now.component';
import { UseresComponent } from './components/useres/useres.component';
import { SignComponent } from './components/sign/sign.component';
import { CarrierComponent } from './components/carrier/carrier.component';
import { MyComponent } from './components/my/my.component';
import { SafComponent } from './components/saf/saf.component';


const routes: Routes = [
  {path:'', component:HomeComponent},
  
  {path:'header', component:HeaderComponent},
  {path:'footer', component:FooterComponent},
  {path:'aboutus', component:AboutComponent},
  {path:'customer', component:CustomerComponent},
  {path:'now', component:NowComponent},
  {path:'useres', component:UseresComponent},
  {path:'sign', component:SignComponent},
  {path:'car', component:CarrierComponent},
  {path:'my', component:MyComponent},
  {path:'saf', component:SafComponent}


];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
