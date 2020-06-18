import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { PhonesPageComponent } from './phones-page/phones-page.component';
import { PhoneDetailsPageComponent } from './phone-details-page/phone-details-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'phones', component: PhonesPageComponent },
  { path: 'phones/:phoneId', component: PhoneDetailsPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
