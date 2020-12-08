import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from './services/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Lembretes';
  isAuthenticated: boolean;
  nome: string;
  constructor(private usuarioSvc: UsuarioService, private router: Router) {}

  ngOnInit() {
    this.usuarioSvc.getUsuarioObservable().subscribe((value) => {
        ///* caso haja um usuário logado, pegue o nome e mostre-o na barra no topo da tela
        if(value) {
          this.isAuthenticated = true;
          this.nome = value;
        }
    });
    let token = this.usuarioSvc.getToken();
    if (token) {
      this.isAuthenticated = true;
      this.nome = this.usuarioSvc.getUsuario();
      this.router.navigateByUrl('lembrete');
    } else {
      this.isAuthenticated = false;
      this.router.navigateByUrl('');
    }
  }
  
  logout(){
    this.usuarioSvc.logoutUsuario();
    window.location.reload();
  }
}

