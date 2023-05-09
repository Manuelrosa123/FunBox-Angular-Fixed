import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";

export const reviewIdGuard: CanActivateFn = (route, state) => {
  const id = +route.params['id'];
  if(isNaN(id) || id < 1) {
    return inject(Router).createUrlTree(['/reviews']);
  }
  return true;
}
