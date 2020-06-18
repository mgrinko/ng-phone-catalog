import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../environments/environment';

@Pipe({
  name: 'img'
})
export class ImgPipe implements PipeTransform {

  transform(url: string): string {
    return `${environment.imgURL}${url}`;
  }
}
