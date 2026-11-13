export type Personagem = {
  id: number;
  nome: string;
  vila: string;
  cla: string;
  habilidade: string;
  imagem: string;
};

export type Vila = {
  id: number;
  nome: string;
  pais: string;
  descricao: string;
  imagem: string;
};

export type Filtro = "todos" | "favoritos";
