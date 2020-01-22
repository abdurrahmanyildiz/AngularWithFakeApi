import { HttpInterceptor, HttpHandler, HttpEvent, HttpRequest, HttpResponse, HttpErrorResponse } from "@angular/common/http";
import { Injectable, Injector } from "@angular/core";
import { Observable } from "rxjs";
import { catchError, map } from "rxjs/operators"; 


@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor(private inject: Injector) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
    
    return next.handle(req).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          console.log('event--->>>', event);
        }
        return event;
      }),
      catchError((err: HttpErrorResponse) => {
        if (err.status === 401) {
          localStorage.removeItem("jwt");
          if (err.url.indexOf('login') < 0) {
            location.href = "/login";
          }
        }
        throw err;
      })
    );

  }

}
