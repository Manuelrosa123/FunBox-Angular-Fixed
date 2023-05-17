import { HttpInterceptorFn } from '@angular/common/http';

export const baseUrlInterceptor: HttpInterceptorFn = (req, next) => {
  const reqClone = req.clone({
    url:`http://localhost:8080/${req.url}`  //antiguo arturober `http://.com:5010/${req.url}`,
  });
  return next(reqClone);
};
