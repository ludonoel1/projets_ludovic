import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'changeNameOfHero'
})
export class ChangeNameOfHeroPipe implements PipeTransform {

  transform(value: any): string {
    const sizeOfWorld = value.length;
      return value.slice(0, 3) + '...' + value.slice(3, sizeOfWorld);
  }
}
