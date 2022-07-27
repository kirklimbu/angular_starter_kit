import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'seperateNumByComma'
})
export class SeperateNumByCommaPipe implements PipeTransform {

  transform(number: number): string {
    return (Math.round(number * 100) / 100).toLocaleString()
  }

  /* 
  
function formatNumberByComma(number){
return(Math.round(number*100)/100).toLocalString()
}

  */

}
