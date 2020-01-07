import { Pipe, PipeTransform } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Pipe({
  name: 'numberMillions'
})
export class NumberMillionsPipe implements PipeTransform {

  constructor(private decimalPipe: DecimalPipe) {
  }

  transform(value: number, digits?: string): string {
    return value < 1000000 ? String(value) : `${this.decimalPipe.transform(value / 1000000, digits)}M`;
  }

}
