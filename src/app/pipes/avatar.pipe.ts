import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'avatar'
})
export class AvatarPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    console.log(value);
    const newArray = value.split(' ');

    return newArray[0][0] + '.' + newArray[1][0];
  }

}
