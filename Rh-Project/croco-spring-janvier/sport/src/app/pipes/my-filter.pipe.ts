import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myFilter'
})
export class MyFilterPipe implements PipeTransform {

 
    transform(objs:any, term:any): any {
      if (term === undefined) {
      return objs;
      }
      return objs.filter((obj:any)=> {
      return (obj.TeamOne.toLowerCase().includes(term.toLowerCase()) 
      || obj.TeamTwo.toLowerCase().includes(term.toLowerCase()));
      })
      }
   
  }


