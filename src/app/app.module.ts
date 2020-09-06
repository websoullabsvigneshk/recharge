import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Ng2TelInputModule} from 'ng2-tel-input';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
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






@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    CustomerComponent,
    NowComponent,
    UseresComponent,
    SignComponent,
    CarrierComponent,
    MyComponent,
    SafComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2TelInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
