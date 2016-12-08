import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'demoTitleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(str: string): string {
    return str.replace(/\w\S*/g, (s: string) => s.charAt(0).toUpperCase()+s.substr(1).toLowerCase());
  }

}
