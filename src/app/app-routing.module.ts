import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroComponent } from './paginas/cadastro/cadastro.component';
import { CriarLembreteComponent } from './paginas/criar-lembrete/criar-lembrete.component';
import { EdiarLembreteComponent } from './paginas/ediar-lembrete/ediar-lembrete.component';
import { ListaLembreteComponent } from './paginas/lista-lembrete/lista-lembrete.component';
import { LoginComponent } from './paginas/login/login.component';

const routes: Routes = [
  {
    path: '', component: LoginComponent
  },
  {
    path: 'cadastro', component: CadastroComponent
  },
  {
    path: 'lembrete', component: ListaLembreteComponent
  },
  {
    path: 'lembrete/criar', component: CriarLembreteComponent
  },
  {
    path: 'lembrete/editar/:id', component: EdiarLembreteComponent
  },
  {
    path: '**', redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
