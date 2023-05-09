import { Routes } from '@angular/router';

export const AUTH_ROUTES: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./login-page/login-page.component').then(
        (m) => m.LoginPageComponent
      ),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./register-page/register-page.component').then(
          (m) => m.RegisterPageComponent
      ),
  },
  {
    path: '**',
    redirectTo: '/auth/login',
  },
];
