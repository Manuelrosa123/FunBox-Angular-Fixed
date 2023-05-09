import { provideHttpClient } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
//import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { APP_ROUTES } from './app/routes';
//import { baseUrlInterceptor } from './app/interceptors/base-url.interceptor';
//import { authInterceptor } from './app/interceptors/auth.interceptor';

bootstrapApplication(AppComponent, {
  providers: [
    /*provideHttpClient(withInterceptors([baseUrlInterceptor, authInterceptor])),*/
    provideHttpClient(),
    provideRouter(APP_ROUTES),
  ],
}).catch((e) => console.log(e));
