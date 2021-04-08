import { Pipe, PipeTransform } from '@angular/core';
import {ProductService} from '../services/product.service';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  constructor() { }

  transform(value: any, input: any): any {
    var x;
    if (input) {
    x= value.filter((x:any) =>x.name.toLowerCase().includes(input.toLowerCase()))
    } else {
      x= value;
    }
     console.log(x,'xszzzzzzzzzzzzzzzz') 
     return x 
  }

}
