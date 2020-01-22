import { HttpInterceptor, HttpHandler, HttpEvent, HttpRequest } from "@angular/common/http";
import { Injectable, Injector } from "@angular/core";
import { Observable } from "rxjs";


@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private inject: Injector) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone();

    let jwt = localStorage.getItem("jwt");

    if (jwt) {
      if (req.url.indexOf("/token") < 0) {
        req = req.clone({
          setHeaders: {
            'Authorization': 'Bearer ' + jwt
          }
        });
      }
    }

    return next.handle(req);

  }

}
