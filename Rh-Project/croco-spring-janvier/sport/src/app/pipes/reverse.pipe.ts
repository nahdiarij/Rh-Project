import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(ch): any {
    console.log("here into reverse pipe",ch)
    let r=""
    for(let i = 0; i < Array.length; i++ ) {
      r=ch[i]+r 
    }
    return r;
  }

}
