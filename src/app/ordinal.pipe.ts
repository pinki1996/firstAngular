import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordinal'
})
export class OrdinalPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {

    var output = "";
    var input = value;
    var lastDigit = input % 10;

    if(lastDigit == 1){
      output = input + "st"
    }else if(lastDigit == 2){
      output = input + "nd"
    }else if(lastDigit == 3){
      output = input + "rd"
    }
    else{
      output = input + "th"
    }

    return output;
  }

}
