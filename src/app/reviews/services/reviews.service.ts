import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ReviewResponse, ReviewsResponse,} from '../interfaces/responses';
import { Review } from '../interfaces/review';

@Injectable({
  providedIn: 'root',
})
export class ReviewsService {
  constructor(private readonly http: HttpClient) {}

  getAll(): Observable<Review[]> {
    return this.http
      .get<ReviewsResponse>('reviews')
      .pipe(map((r) => r.reviews));
  }

  getById(id: string): Observable<Review> {
    return this.http
      .get<ReviewResponse>(`reviews/${id}`)
      .pipe(map((r) => r.review));
  }

  create(review: Review): Observable<Review> {
    return this.http
      .post<ReviewResponse>('reviews', review)
      .pipe(map((r) => r.review));
  }

  edit(review: Review): Observable<Review> {
    return this.http
      .put<ReviewResponse>(`reviews/${review._id}`, review)
      .pipe(map((resp) => resp.review));
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`reviews/${id}`);
  }
}
