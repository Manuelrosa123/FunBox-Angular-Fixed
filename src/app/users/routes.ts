import { Routes } from "@angular/router";
import { AuthGuard } from "../auth/guards/auth.guard";

export const USER_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./user-page/user-page.component').then(
        (m) => m.UserPageComponent
      ),
  },
  {
    path: 'me',
    loadComponent: () =>
      import('./user-page/user-page.component').then(
        (m) => m.UserPageComponent
      ),
      canActivate: [AuthGuard]
  },
  {
    path: 'edit',
    loadComponent: () =>
      import('./edit-user-page/edit-user-page.component').then(
        (m) => m.EditUserPageComponent
      ),
      canActivate: [AuthGuard]
  },
  {
    path: ':id',
    loadComponent: () =>
      import('./user-page/user-page.component').then(
        (m) => m.UserPageComponent
      ),
  }
];
