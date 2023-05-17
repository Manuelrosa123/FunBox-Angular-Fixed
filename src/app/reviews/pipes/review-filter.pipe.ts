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
    type: string,
    order : string,
  ): Review[] {
    return search
      ? reviews.filter((r) =>
          r.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()) && r.type.toLocaleLowerCase().includes(type.toLocaleLowerCase()))
      : this.OrderBy(order,reviews);
  }

  OrderBy(order:string, reviews:Review[]){
    let myReviews=[...reviews];
    if (order==="title")
    {
      myReviews.sort((a,b)=>{
        if (a.title===b.title) return 0;
        return a.title > b.title ? 1 : -1
      });
    }
    else if (order==="launchDate"){
      myReviews.sort((a,b)=>{
        if (a.launchDate===b.launchDate) return 0;
        return a.launchDate < b.launchDate ? 1 : -1
      });
    }
    else if (order==="reviewDate"){
      myReviews.sort((a,b)=>{
        if (a.reviewDate===b.reviewDate) return 0;
        return a.reviewDate < b.reviewDate ? 1 : -1
      });
    }
    return myReviews;
  }
}
