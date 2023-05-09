import { Routes } from "@angular/router";

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
  },
  {
    path: ':edit',
    loadComponent: () =>
      import('./edit-user-page/edit-user-page.component').then(
        (m) => m.EditUserPageComponent
      ),
  },
  {
    path: ':id',
    loadComponent: () =>
      import('./user-page/user-page.component').then(
        (m) => m.UserPageComponent
      ),
  }
];
