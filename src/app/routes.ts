import { Routes } from '@angular/router';
import { leavePageGuard } from './guards/leave-page.guard';
import { reviewIdGuard } from './reviews/guards/review-id.guard';
import { reviewResolver } from './reviews/resolvers/review.resolver';
import { ReviewFormComponent } from './reviews/review-form/review-form.component';

export const APP_ROUTES: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/routes').then((m) => m.AUTH_ROUTES),
  },
  {
    path: 'reviews',
    loadChildren: () =>
      import('./reviews/routes').then((m) => m.REVIEW_ROUTES),
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./users/routes').then((m) => m.USER_ROUTES),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/auth/login',
  },
  {
    path: '**',
    redirectTo: '/auth/login',
  },
  {
    path: ':id/edit', component: ReviewFormComponent,
    canActivate: [reviewIdGuard], canDeactivate: [leavePageGuard],
    resolve: {
      review: reviewResolver
    }
  }
];
