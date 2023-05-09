import { Routes } from '@angular/router';
import { leavePageGuard } from '../guards/leave-page.guard';
//import { reviewIdGuard } from './guards/review-id.guard';
//import { reviewResolver } from './resolvers/review.resolver';

export const REVIEW_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./review-page/review-page.component').then(
        (m) => m.ReviewPageComponent
      ),
  },
  {
    path: 'add',
    loadComponent: () =>
      import('./review-form/review-form.component').then(
        (m) => m.ReviewFormComponent
      ),
    //canDeactivate: [leavePageGuard]
  },
  {
    path: 'multibrary',
    loadComponent: () =>
      import('./review-multibrary/review-multibrary.component').then(
        (m) => m.ReviewMultibraryComponent
      ),
    /*canActivate: [reviewIdGuard],
    resolve: {
      review: reviewResolver
    }*/
  },
  {
    path: ':id',
    loadComponent: () =>
      import('./review-detail/review-detail.component').then(
        (m) => m.ReviewDetailComponent
      ),
    /*canActivate: [reviewIdGuard],
    resolve: {
      review: reviewResolver
    }*/
  },
  {
    path: ':id/edit',
    loadComponent: () =>
      import('./review-form/review-form.component').then(
        (m) => m.ReviewFormComponent
      ),
    /*canActivate: [reviewIdGuard],
    resolve: {
      review: reviewResolver
    }*/
  },
];
