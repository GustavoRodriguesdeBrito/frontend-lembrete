import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../interfaces/usuario';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  constructor(private http: HttpClient) {}

  cadastrarUsuario(usuario: Usuario): Observable<any> {
    const url = `${environment.lembretesApiUrl}/usuario/cadastro`;
    return this.http.post(url, usuario);
  }

  loginUsuario(usuario:Usuario):Observable<any>{
    const url = `${environment.lembretesApiUrl}/usuario/login`;
    return this.http.post(url, usuario);
  }

  logoutUsuario(): void {
    window.sessionStorage.clear();
  }

  salvarToken(token: string) {
    window.sessionStorage.removeItem("TOKEN");
    window.sessionStorage.setItem("TOKEN", token);
    //console.log("token in sessionStorage",window.sessionStorage.getItem("TOKEN"));
  }

  getToken(): string {
    return window.sessionStorage.getItem("TOKEN");
  }

  salvarUsuario(nome: string) {
    window.sessionStorage.removeItem("USER");
    window.sessionStorage.setItem("USER", nome);
  }

  getUsuario(): string {
    return window.sessionStorage.getItem("USER");
  }
}

