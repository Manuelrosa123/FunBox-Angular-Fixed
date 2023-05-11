import { Pipe, PipeTransform } from '@angular/core';
import { Review } from '../interfaces/review';

@Pipe({
  name: 'reviewFilter',
  standalone: true,
})
export class ReviewFilterPipe implements PipeTransform {
  transform(
    reviews: Review[],
    search: string,
    type: string
  ): Review[] {
    return search
      ? reviews.filter((r) =>
          r.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()) && r.type.toLocaleLowerCase().includes(type.toLocaleLowerCase()))
      : reviews;
  }
}
