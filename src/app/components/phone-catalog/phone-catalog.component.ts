import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-phone-catalog',
  templateUrl: './phone-catalog.component.html',
  styleUrls: ['./phone-catalog.component.scss']
})
export class PhoneCatalogComponent {
  @Input() phones: Phone[] = [];
  @Output() add = new EventEmitter<Phone>();

  addPhone(phone) {
    this.add.emit(phone);
  }
}
