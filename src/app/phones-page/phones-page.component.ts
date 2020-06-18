import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

interface Phone {
  id: string;
  age: number;
  snippet: string;
  imageUrl: string;
  name: string;
}

@Component({
  selector: 'app-phones-page',
  templateUrl: './phones-page.component.html',
  styleUrls: ['./phones-page.component.scss']
})
export class PhonesPageComponent implements OnInit {
  phones: Phone[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void { // componentDidMount
    this.http.get<Phone[]>(`${environment.apiURL}/products.json`)
      .subscribe(phones => {
        this.phones = phones;
      });
  }
}
