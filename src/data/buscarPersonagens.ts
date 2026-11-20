import type { Personagem } from "./tipos";

const URL_PERSONAGENS = `${import.meta.env.BASE_URL}personagens.json`;

export async function buscarPersonagens(): Promise<Personagem[]> {
  const resposta = await fetch(URL_PERSONAGENS);

  if (!resposta.ok) {
    throw new Error(`Falha ao buscar personagens (HTTP ${resposta.status})`);
  }

  return resposta.json();
}
