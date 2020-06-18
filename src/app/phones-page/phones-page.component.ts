import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-phones-page',
  templateUrl: './phones-page.component.html',
  styleUrls: ['./phones-page.component.scss']
})
export class PhonesPageComponent implements OnInit {
  phones: Phone[] = [];
  cartItems: Phone[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void { // componentDidMount
    this.http.get<Phone[]>(`${environment.apiURL}/products.json`)
      .subscribe(phones => {
        this.phones = phones;
      });
  }

  addToCart(phone) {
    console.log(phone);
    this.cartItems.push(phone);
  }
}
