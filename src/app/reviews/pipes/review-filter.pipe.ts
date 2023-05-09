import { Pipe, PipeTransform } from '@angular/core';
import { Review } from '../interfaces/review';

@Pipe({
  name: 'reviewFilter',
  standalone: true,
})
export class ReviewFilterPipe implements PipeTransform {
  transform(value: any, ...args: any[]) {
    throw new Error('Method not implemented.');
  }
  // transform(
  //   reviews: Review[],
  //   onlyFriends: boolean,
  //   search: string
  // ): Review[] {
  //   const weekDay = new Date().getDay();
  //   if (onlyOpen) {
  //     reviews = reviews.filter((r) =>
  //       r.daysOpen.includes('' + weekDay)
  //     );
  //   }
  //   return search
  //     ? reviews.filter((r) =>
  //         r.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()) || r.description.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  //       )
  //     : reviews;
  // }
}
