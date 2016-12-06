import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'demoTitleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(str: string): string {
    return str.toUpperCase();
  }

}
