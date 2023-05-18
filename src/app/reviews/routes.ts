import { Routes } from '@angular/router';
import { leavePageGuard } from '../guards/leave-page.guard';
import { AuthGuard } from '../auth/guards/auth.guard';

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
    canActivate: [AuthGuard],
    canDeactivate: [leavePageGuard]
  },
  {
    path: 'multibrary',
    loadComponent: () =>
      import('./review-multibrary/review-multibrary.component').then(
        (m) => m.ReviewMultibraryComponent
      ),
      canActivate: [AuthGuard]
  },
  {
    path: ':id',
    loadComponent: () =>
      import('./review-detail/review-detail.component').then(
        (m) => m.ReviewDetailComponent
      ),
  },
  {
    path: ':id/edit',
    loadComponent: () =>
      import('./review-form/review-form.component').then(
        (m) => m.ReviewFormComponent
      ),
      canActivate: [AuthGuard]
  },
];
