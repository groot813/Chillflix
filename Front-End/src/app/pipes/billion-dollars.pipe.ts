import { Pipe, PipeTransform } from '@angular/core';
import { $ } from 'protractor';

@Pipe({
  name: 'billionDollars'
})
export class BillionDollarsPipe implements PipeTransform {

  transform(value: number, args?: any): string {
    if (value>100000000000){
      return `${value} is groter dan 1B`
    }
    else{
      return `${value} is kleiner dan 1B`
    }

  }
  
}
