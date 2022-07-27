import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpTokenInterceptorService implements HttpInterceptor {
  currentUrl!: string;
  currentUser = localStorage['user'];
  token = localStorage['token'];
  subscripitons: Array<Subscription> = [];
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (localStorage.getItem('token')) {
      request = request.clone({
        setHeaders: {
          // Authorization: localStorage.getItem('token'),
          UserAgent: 'webAgent'
        }
      });

      return next.handle(request);
    } else {
      request = request.clone({
        setHeaders: {
          // Authorization: localStorage.getItem('token'),
          UserAgent: 'webAgent'
        }
      });

      return next.handle(request);
    }
  }

}
