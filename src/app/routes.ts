import { Routes } from '@angular/router';

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
];
