/* "Barrel" of Http Interceptors */
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthInterceptorService } from './auth-interceptor.service';

/** Http interceptor providers in outside-in order */
export const authHttpInterceptorProvider = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true },
];