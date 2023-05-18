import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { APP_ROUTES } from './app/routes';
import { baseUrlInterceptor } from './app/interceptors/base-url.interceptor';


bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withInterceptors([baseUrlInterceptor])),
    provideRouter(APP_ROUTES),
  ],
}).catch((e) => console.log(e));
