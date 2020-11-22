import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Lembrete, prioridade } from '..//..//interfaces/lembrete';

@Component({
  selector: 'app-from-lembrete',
  templateUrl: './from-lembrete.component.html',
  styleUrls: ['./from-lembrete.component.css']
})
export class FromLembreteComponent{
   // Vamos usuar uma unica tela para formulário tanto para edição quanto para criação, assim evitando geração de códigos desnecessários.
   //@imput é ultilizado para trazer o formulário de edição pré carregado no formulário
   //@output é ultilizado para a saída de dados do component fiho para o componente pai

   // se for edição vamos receber do componente pai o Lembrete, se não trata-se de uma criação e nada será exibido, por isso foi criada uma instancia de objeto vazio do tipo Lembrete <Lembrete>{}

  @Input() lembrete: Lembrete = <Lembrete>{};
  @Output() outputLembrete: EventEmitter<Lembrete> = new EventEmitter();
  public Prioridade = prioridade;

  // Responsaval por disparar o evento
  onSubmit() {
    this.lembrete.arquivado = false; ///* Por padrão, o lembrete ainda não foi arquivado
    this.outputLembrete.emit(this.lembrete);
  }

}
