import { HTTP_INTERCEPTORS, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

import { UsuarioService } from '../services/usuario.service';
import { Observable } from 'rxjs';

const TOKEN_HEADER_KEY = 'Authorization';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private usuarioSvc: UsuarioService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authReq = req;
    const token = this.usuarioSvc.getToken();
    if (token != null) {
        ///* caso tiver o token, recriar a requisição com o token
        console.log();
      authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, `Bearer ${token}`)});
    }
    ///* passar a requisição adiante
    return next.handle(authReq);
  }
}

export const authInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
];