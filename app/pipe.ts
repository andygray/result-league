import {Pipe, PipeTransform} from 'angular2/core';
import {Result} from './result';

@Pipe({
    name: "arraySort",
    pure: false,
})
export class TableSortPipe implements PipeTransform {

    transform(array: Array<Result>, args: string): Array<Result> {
        if (array) {
      
          array.sort((a: Result, b: Result) => {
              if (a.total() === b.total()) {
                return a.name < b.name;
              }
              return a.total() < b.total();
          });
  
          return array;
        }
    }
}