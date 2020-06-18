import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PhonesPageComponent } from './phones-page/phones-page.component';
import { PhoneDetailsPageComponent } from './phone-details-page/phone-details-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PhonesPageComponent,
    PhoneDetailsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
