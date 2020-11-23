import { Component, ViewChild} from '@angular/core';
import { ErrorMsgComponent } from '..//..//compartilhado/error-msg/error-msg.component';
import { LembreteService } from '..//..//services/lembrete.service';
import { Router } from '@angular/router';
import { Lembrete } from '..//..//interfaces/lembrete';


@Component({
  selector: 'app-criar-lembrete',
  templateUrl: './criar-lembrete.component.html',
  styleUrls: ['./criar-lembrete.component.css']
})
export class CriarLembreteComponent {
  @ViewChild(ErrorMsgComponent) errorMsgComponent: ErrorMsgComponent;

  constructor(private lembreteService: LembreteService, private router: Router) { }

  // addLembrete recebe uma variavel do tipo lembrete e ultilixza o Service com um método com o mesmo nome addLembrete para cadastrar o lembrete na api. Ele vai verifica, se a verificação for bem sucedida, ou seja, o lembrete foi cadastrado ele entra no primeiro callback e usa navigateByUrl para redirecionar o susário para a raiza do projeto.
  // errorMsgComponent - Caso haja algum erro na requisiçãos


  addLembrete(lembrete: Lembrete){
    this.lembreteService.addLembrete(lembrete)
    .subscribe(
      () => {this.router.navigateByUrl('/lembrete')},
      () => {this.errorMsgComponent.setError('Falha ao adicionar lembrete')}
    );
  }

}
