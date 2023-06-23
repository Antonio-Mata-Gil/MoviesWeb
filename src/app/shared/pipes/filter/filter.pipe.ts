import { Pipe, PipeTransform } from '@angular/core';
import { MoviesInfo } from 'src/app/core/models/movies.interface';


@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(value: MoviesInfo[] | undefined, text: string): MoviesInfo[] {
    if (!value) {
      
      
      return []; // Retorna una matriz vacía si value es undefined
    }
    return value.filter((movie) => movie.title.toUpperCase().includes(text.toUpperCase()));
  }
}
