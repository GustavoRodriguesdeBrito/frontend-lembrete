import { Component } from '@angular/core';

@Component({
  selector: 'app-error-msg',
  templateUrl: './error-msg.component.html',
  styleUrls: ['./error-msg.component.css']
})
export class ErrorMsgComponent {

  public error: string;

  // Esse método será chamado toda vez que existir uma mensagem de erro ao usuário
  // O atributo da classe recebe como parametro a variável erro que 
  // Exibe o tempo que mensagem vai ficar na tela
  setError(error: string, tempo: number = 5000){
    this.error = error;
    setTimeout(() => {
      this.error = null; //Esvazia o atributo erro ao chegar o tempo de 5 segundos
    }, tempo);
    
  }

}
