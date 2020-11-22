// Implementando inteface com os atributos da API

export enum prioridade {
  BAIXA = 'BAIXA',
  MEDIA = 'MEDIA',
  ALTA = 'ALTA',
} ///* enum tem uma funcionalidade aprimorada

export interface Lembrete {
  id: String;
  conteudo: string;
  arquivado: boolean;
  prioridade: prioridade; // O Atritibuto prioridade da interface recebe o TIPO prioridade.
  modificado?: Date;
  prazoFinal: Date | String;
  dataCriado: Date;
}
