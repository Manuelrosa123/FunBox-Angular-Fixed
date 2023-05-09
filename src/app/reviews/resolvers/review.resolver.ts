import { inject } from '@angular/core';
import { ResolveFn, Router } from '@angular/router';
import { catchError, EMPTY } from 'rxjs';
import { Review } from '../interfaces/review';
import { ReviewsService } from '../services/reviews.service';

export const reviewResolver: ResolveFn<Review> = (route, state) => {
  return inject(ReviewsService)
    .getById(String(+route.params['id']))
    .pipe(
      catchError((error) => {
        inject(Router).navigate(['/reviews']);
        return EMPTY;
      })
    );
};
