import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'repeatData',
})
export class RepeatDataPipe implements PipeTransform {
  res: string = '';
  transform(value: string, args: number): string {
    for (let i = 0; i < args; i++) {
      this.res += value + ' ';
    }
    return this.res;
  }
}
