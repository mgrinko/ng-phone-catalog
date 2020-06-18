import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhonesService } from '../services/phones.service';

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
      .subscribe(params => {
        this.phonesService.getById(params.phoneId)
          .subscribe(details => {
            this.phone = details;
            this.selectedImage = details.images[0];
          });
      });
  }

}
