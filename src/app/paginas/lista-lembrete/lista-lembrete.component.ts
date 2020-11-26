import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ErrorMsgComponent } from 'src/app/compartilhado/error-msg/error-msg.component';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Lembrete } from '../../interfaces/lembrete';
import { LembreteService } from '../../services/lembrete.service';

@Component({
  selector: 'app-lista-lembrete',
  templateUrl: './lista-lembrete.component.html',
  styleUrls: ['./lista-lembrete.component.css'],
})
export class ListaLembreteComponent implements OnInit {
  public lembretes: Lembrete[];

  // ViewChild para acessar os Métodos do ErrorMsgComponent
  @ViewChild(ErrorMsgComponent) errorMsgComponent: ErrorMsgComponent;

  constructor(private lembreteService: LembreteService, private usuarioSvc: UsuarioService, private router: Router) {}

  ngOnInit(): void {
    if(this.usuarioSvc.getToken()) {
      this.getListaLembretes();
    } else {
      this.router.navigateByUrl('');
    }
  }

  // Os métodos do LembreteService retornam um Observable, aqui vamos ASSINAR esse Observeble, e assim que os dados são retornados pela api e chegarem até o cliente, ele dispara um callback que atribui os dados ao atributo Lembrete da classe.

  // Ultilizando o this.lembreteService para acessar nossa service e o método getListaLembretes(), esse método nos retorna uma obserble que nos diponibiliza o método .subscribe. O subscribe valida a requisição, se ela for bem sucedida ele nos retorna um array de lembretes se não ele executa a mensagem de erro

  getListaLembretes() {
    this.lembreteService.getListaLembretes().subscribe(
      (lembretes: Lembrete[]) => {
        this.lembretes = lembretes;
      },
      (err) => {
        this.errorMsgComponent.setError('Erro ao carregar Lembretes.');
        if (err.status === 401) {
          this.router.navigateByUrl('');
        }
      }
    );
  }

  // Aqui a lógica é basicamente a mesma, porém ele chama o método getListaLembretes() e recarrega a lista, caso aconteça alguma requesição que não seja a "200" sucess ele da a mensagem de erro.

  deletaLembrete(id: String) {
    this.lembreteService.deletaLembrete(id).subscribe(
      () => {
        this.getListaLembretes();
      },
      (err) => {
        this.errorMsgComponent.setError('Erro ao deletar Lembretes.');
        if (err.status === 401) {
          this.router.navigateByUrl('');
        }
      }
    );
  }

  alteraArquivado(id: String, arquivado: Boolean) {
    let lemb = this.lembretes.find((lembrete) => {
      return lembrete.id === id;
    });
    //console.log(lemb, id, arquivado,"\nvalor futuro:", !lemb.arquivado);
    this.lembreteService.alteraArquivado(id, !lemb.arquivado).subscribe(
      () => {
        lemb.arquivado = !lemb.arquivado;
      },
      (err) => {
        this.errorMsgComponent.setError(
          'Erro ao arquivar/desarquivar lembrete'
        );
        if (err.status === 401) {
          this.router.navigateByUrl('');
        }
      }
    );
  }

  existemLembretes(): boolean {
    return this.lembretes && this.lembretes.length > 0;
  }
}
