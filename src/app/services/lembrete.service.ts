import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Lembrete } from '../interfaces/lembrete';

@Injectable({
  providedIn: 'root'
})
export class LembreteService {

  url = 'http://localhost:3000'; // api rest fake

  constructor(private http: HttpClient) { }

  // Metodo retorna um Observable
  // Metodo ultiliza a biblioteca HttpClient para realizar uma requisição Get
  // A requisição vai retornar um array de lembrete
  // Ao concatenar a url definida no environment com o endpoint lembrete,  nesse endpoint recebemos uma lista Lembretes da Api, é realizaso um requisição get para a nossa url

  getListaLembretes(): Observable<Lembrete[]> {
    const url = `${environment.lembretesApiUrl}/lembrete`;
    return this.http.get<Lembrete[]>(url);
  }

  // Reorna um Observable de um único lembrte, passando o id como parametro
  getLembrete(id: number): Observable<Lembrete> {
    const url = `${environment.lembretesApiUrl}/lembrete/${id}`;
    return this.http.get<Lembrete>(url);
  }

  // Realiza uma requisição do tipo post para o endpoint lembrete, passando como parametro o Lembrete
  addLembrete(lembrete : Lembrete): Observable<Lembrete> {
    const url = `${environment.lembretesApiUrl}/lembrete/`;
    return this.http.post<Lembrete>(url, lembrete);
  }

  // Realiza a requisição do tipo put para o endpoint lembrete, passando por parametro tanyo a url quanto o id
  atualizaLembrete(lembrete : Lembrete): Observable<Lembrete> {
    const url = `${environment.lembretesApiUrl}/lembrete/${lembrete.id}`;
    return this.http.put<Lembrete>(url, lembrete);
  }
  // Esse método espera um id, e com base nesse id realizando uma requisição delete, ele deleta o lembrete mo BD
  deletaLembrete(id: number): Observable<Lembrete> {
    const url = `${environment.lembretesApiUrl}/lembrete/${id}}`;
    return this.http.delete<Lembrete>(url);
    console.log("Cheguei aqui")
  }
}
