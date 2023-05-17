import { Routes } from '@angular/router';
import { leavePageGuard } from '../guards/leave-page.guard';

export const AUTH_ROUTES: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./login-page/login-page.component').then(
        (m) => m.LoginPageComponent
      ),
      canDeactivate: [leavePageGuard]
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./register-page/register-page.component').then(
          (m) => m.RegisterPageComponent
      ),
      canDeactivate: [leavePageGuard]
  },
  {
    path: '**',
    redirectTo: '/auth/login',
  },
];
