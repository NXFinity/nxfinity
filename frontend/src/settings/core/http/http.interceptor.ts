import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { catchError, Observable } from "rxjs";
import { AuthService } from "../auth";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {
    let newRequest = request.clone();
    if (this.authService.accessToken) {
      newRequest = request.clone({
        headers: request.headers.set('Authorization', `Bearer ${this.authService.accessToken}`)
      });
    }
    return next.handle(newRequest).pipe(
      catchError((error) => {
        if (error.status === 401) {
          this.authService.logout();
        }
        throw error;
      })
    );
  }
}
