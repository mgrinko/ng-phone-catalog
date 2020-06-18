import { Component, OnInit } from '@angular/core';
import { PhonesService } from '../services/phones.service';

@Component({
  selector: 'app-phones-page',
  templateUrl: './phones-page.component.html',
  styleUrls: ['./phones-page.component.scss']
})
export class PhonesPageComponent implements OnInit {
  phones: Phone[] = [];
  cartItems: Phone[] = [];

  constructor(private phonesService: PhonesService) {}

  ngOnInit(): void { // componentDidMount
    this.phonesService.getAll()
      .subscribe(phones => {
        this.phones = phones;
      });
  }

  addToCart(phone) {
    console.log(phone);
    this.cartItems.push(phone);
  }
}
