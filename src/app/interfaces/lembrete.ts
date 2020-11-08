// Implementando inteface com os atributos da API

type prioridade = 'BAIXA' | 'MEDIA' | 'ALTA';

export interface Lembrete {
  id: number;
  conteudo: string;
  arquivado: boolean;
  prioridade: prioridade; // O Atritibuto prioridade da interface recebe o TIPO prioridade.
  modificado: number;
}
