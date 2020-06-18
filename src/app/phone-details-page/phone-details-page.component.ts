import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhonesService } from '../services/phones.service';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-phone-details-page',
  templateUrl: './phone-details-page.component.html',
  styleUrls: ['./phone-details-page.component.scss']
})
export class PhoneDetailsPageComponent implements OnInit {

  phone: PhoneDetails = null;
  selectedImage = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private phonesService: PhonesService,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        map(params => params.phoneId),
        switchMap(phoneId => this.phonesService.getById(phoneId))
      )
      .subscribe(details => {
        this.phone = details;
        this.selectedImage = details.images[0];
      });
  }
}
