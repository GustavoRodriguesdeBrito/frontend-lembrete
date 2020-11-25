import { Component, OnInit, ViewChild } from '@angular/core';
import { ErrorMsgComponent } from '../../compartilhado/error-msg/error-msg.component';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  @ViewChild(ErrorMsgComponent) errorMsgComponent: ErrorMsgComponent;

  usuario:Usuario = {nome:"",senha:""};
  constructor(private usuarioSvc:UsuarioService, private router:Router) { }

  ngOnInit(): void {
  }

  cadastrarUsuario() {
    this.usuarioSvc.cadastrarUsuario(this.usuario).subscribe(
      () => {this.router.navigateByUrl('')},
    (err) => {console.log(err); this.errorMsgComponent.setError(err.error.msg);}
    );
  }
}
