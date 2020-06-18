import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPhones'
})
export class FilterPhonesPipe implements PipeTransform {

  transform(phones: Phone[], query: string): Phone[] {
    console.log(phones, query);
    return phones.filter(phone => phone.name.includes(query));
  }

}
