import { Component,OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ErrorMsgComponent } from './compartilhado/error-msg/error-msg.component';
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

