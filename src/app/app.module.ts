import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorMsgComponent } from './compartilhado/error-msg/error-msg.component';
import { ListaLembreteComponent } from './paginas/lista-lembrete/lista-lembrete.component';
import { FromLembreteComponent } from './compartilhado/from-lembrete/from-lembrete.component';
import { CriarLembreteComponent } from './paginas/criar-lembrete/criar-lembrete.component';
import { EdiarLembreteComponent } from './paginas/ediar-lembrete/ediar-lembrete.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorMsgComponent,
    ListaLembreteComponent,
    FromLembreteComponent,
    CriarLembreteComponent,
    EdiarLembreteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
