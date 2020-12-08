import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ErrorMsgComponent } from '../../compartilhado/error-msg/error-msg.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @ViewChild(ErrorMsgComponent) errorMsgComponent: ErrorMsgComponent;
  usuario: Usuario = {nome:"",senha:""};
  constructor(private usuarioSvc: UsuarioService, private router: Router) {}

  fazerLogin() {
    this.usuarioSvc.loginUsuario(this.usuario).subscribe(
      (result) => {
        //console.log("OK: ", result);
        this.usuarioSvc.salvarToken(result.token);
        this.usuarioSvc.salvarUsuario(result.nome);
        //console.log(window.sessionStorage);
        this.router.navigateByUrl('lembrete');
      },
      (err) => {
        console.log(err);
        this.errorMsgComponent.setError(err.error.msg);
      }
    );
  }
}
