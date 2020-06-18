import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PhonesPageComponent } from './phones-page/phones-page.component';
import { PhoneDetailsPageComponent } from './phone-details-page/phone-details-page.component';
import { HttpClientModule } from '@angular/common/http';
import { ImgPipe } from './img.pipe';
import { PhoneCatalogComponent } from './components/phone-catalog/phone-catalog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PhonesPageComponent,
    PhoneDetailsPageComponent,
    ImgPipe,
    PhoneCatalogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
