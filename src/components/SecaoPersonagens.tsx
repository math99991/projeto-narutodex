import type { Filtro, Personagem } from "../data/tipos";
import BarraFiltros from "./BarraFiltros";
import CardPersonagem from "./CardPersonagem";
import TituloSecao from "./TituloSecao";

type SecaoPersonagensProps = {
  personagens: Personagem[];
  favoritos: number[];
  busca: string;
  filtro: Filtro;
  mostrarTodos: boolean;
  aoFavoritar: (id: number) => void;
  aoMudarBusca: (texto: string) => void;
  aoMudarFiltro: (filtro: Filtro) => void;
  aoAlternarMostrarTodos: () => void;
};

// Quantos cards aparecem antes de clicar em "Ver todos": 4 no mobile, 6 no tablet (md:) e todos no desktop (lg:)
function classeDoCard(indice: number, mostrarTodos: boolean) {
  if (mostrarTodos || indice < 4) return "";
  if (indice < 6) return "hidden md:block";
  return "hidden lg:block";
}

// Remove acentos e deixa minúsculo, para "cla" encontrar "Clã"
function normalizar(texto: string) {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function SecaoPersonagens({
  personagens,
  favoritos,
  busca,
  filtro,
  mostrarTodos,
  aoFavoritar,
  aoMudarBusca,
  aoMudarFiltro,
  aoAlternarMostrarTodos,
}: SecaoPersonagensProps) {
  const termo = normalizar(busca.trim());

  const filtrados = personagens.filter((p) => {
    const bateBusca = normalizar(`${p.nome} ${p.cla} ${p.habilidade} ${p.vila}`).includes(termo);
    const bateFiltro = filtro === "todos" || favoritos.includes(p.id);
    return bateBusca && bateFiltro;
  });

  // Com busca ou filtro ativo, mostra tudo o que foi encontrado
  const filtrando = termo !== "" || filtro === "favoritos";
  const mostrarTudo = mostrarTodos || filtrando;

  return (
    <section id="personagens" className="scroll-mt-24">
      <TituloSecao titulo="Personagens" subtitulo="Explore a lista dos principais shinobis de Naruto" />

      <BarraFiltros
        busca={busca}
        filtro={filtro}
        totalFavoritos={favoritos.length}
        aoMudarBusca={aoMudarBusca}
        aoMudarFiltro={aoMudarFiltro}
      />

      {filtrados.length > 0 ? (
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {filtrados.map((personagem, indice) => (
            <div key={personagem.id} className={classeDoCard(indice, mostrarTudo)}>
              <CardPersonagem
                personagem={personagem}
                favorito={favoritos.includes(personagem.id)}
                aoFavoritar={aoFavoritar}
              />
            </div>
          ))}
        </div>
      ) : (
        <p className="mt-6 rounded-xl border border-dashed border-slate-300 p-8 text-center text-slate-600 dark:border-slate-700 dark:text-slate-400">
          {filtro === "favoritos" && termo === ""
            ? "Você ainda não favoritou ninguém. Clique no ♡ de um personagem para salvá-lo aqui."
            : "Nenhum personagem encontrado. Tente buscar por outro nome."}
        </p>
      )}

      {!filtrando && (
        <div className="mt-6 text-center lg:hidden">
          <button
            onClick={aoAlternarMostrarTodos}
            className="rounded-lg border border-slate-300 bg-white px-6 py-2 transition-colors hover:border-orange-400 hover:text-orange-500 dark:border-slate-700 dark:bg-slate-900 dark:hover:border-orange-400"
          >
            {mostrarTodos ? "Ver menos" : "Ver todos os principais personagens →"}
          </button>
        </div>
      )}
    </section>
  );
}

export default SecaoPersonagens;
