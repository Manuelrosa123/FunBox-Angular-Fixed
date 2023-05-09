import { HttpInterceptorFn } from '@angular/common/http';

export const baseUrlInterceptor: HttpInterceptorFn = (req, next) => {
  const reqClone = req.clone({
    //url: `http://.com:5010/${req.url}`, //antiguo arturober
  });
  return next(reqClone);
};
