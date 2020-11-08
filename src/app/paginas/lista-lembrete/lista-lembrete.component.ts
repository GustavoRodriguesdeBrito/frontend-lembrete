import { Component, OnInit, ViewChild } from '@angular/core';
import { ErrorMsgComponent } from 'src/app/compartilhado/error-msg/error-msg.component';
import { Lembrete } from '../../interfaces/lembrete';
import { LembreteService } from '../../services/lembrete.service';

@Component({
  selector: 'app-lista-lembrete',
  templateUrl: './lista-lembrete.component.html',
  styleUrls: ['./lista-lembrete.component.css']
})
export class ListaLembreteComponent implements OnInit {
  public lembretes: Lembrete[];

  // ViewChild para acessar os Métodos do ErrorMsgComponent
  @ViewChild(ErrorMsgComponent) errorMsgComponent: ErrorMsgComponent;

  constructor(private lembreteService: LembreteService) { }

  ngOnInit(): void {
    this.getListaLembretes();
  }

  // Os métodos do LembreteService retornam um Observable, aqui vamos ASSINAR esse Observeble, e assim que os dados são retornados pela api e chegarem até o cliente, ele dispara um callback que atribui os dados ao atributo Lembrete da classe.

  // Ultilizando o this.lembreteService para acessar nossa service e o método getListaLembretes(), esse método nos retorna uma obserble que nos diponibiliza o método .subscribe. O subscribe valida a requisição, se ela for bem sucedida ele nos retorna um array de lembretes se não ele executa a mensagem de erro

  getListaLembretes() {
    this.lembreteService.getListaLembretes()
      .subscribe((lembretes: Lembrete[]) => {
        this.lembretes = lembretes;
      },()=> {this.errorMsgComponent.setError('Erro ao carregar Lembretes.')})
  }

  // Aqui a lógica é basicamente a mesma, porém ele chama o método getListaLembretes() e recarrega a lista, caso aconteça alguma requesição que não seja a "200" sucess ele da a mensagem de erro.

   deletaLembrete(id: number) {
    this.lembreteService.deletaLembrete(id)
      .subscribe(() => {
        this.getListaLembretes();
      },()=> {this.errorMsgComponent.setError('Erro ao deletar Lembretes.')})
      console.log ("Cliquei aqui")
  }

  existemLembretes(): boolean {
    return this.lembretes && this.lembretes.length >0;
  }

}
