import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CriarLembreteComponent } from './paginas/criar-lembrete/criar-lembrete.component';
import { EdiarLembreteComponent } from './paginas/ediar-lembrete/ediar-lembrete.component';
import { ListaLembreteComponent } from './paginas/lista-lembrete/lista-lembrete.component';

const routes: Routes = [
  {
    path: '', component: ListaLembreteComponent // Aqui ele carrega a rota do component principal
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
