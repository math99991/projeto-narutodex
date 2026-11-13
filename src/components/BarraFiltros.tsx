
import type { Filtro } from "../data/tipos";

type BarraFiltrosProps = {
  busca: string;
  filtro: Filtro;
  totalFavoritos: number;
  aoMudarBusca: (texto: string) => void;
  aoMudarFiltro: (filtro: Filtro) => void;
};

function classeBotao(ativo: boolean) {
  const base =
    "rounded-lg border px-6 py-2 font-semibold uppercase transition-colors";

  return ativo
    ? `${base} border-[#263B56] bg-[#263B56] text-white dark:border-blue-400 dark:bg-blue-400 dark:text-[#0B162B]`
    : `${base} border-[#D8C5A5] bg-[#FFFCF5] text-[#263B56] hover:border-[#263B56] dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-blue-400`;
}

function BarraFiltros({
  busca,
  filtro,
  totalFavoritos,
  aoMudarBusca,
  aoMudarFiltro,
}: BarraFiltrosProps) {
  return (
    <div className="mt-4 flex flex-col gap-4 lg:flex-row lg:items-center">
      <input
        type="search"
        value={busca}
        onChange={(evento) => aoMudarBusca(evento.target.value)}
        placeholder="Buscar por nome, clã ou habilidade..."
        aria-label="Buscar personagem"
        className="w-full flex-1 rounded-lg border border-[#D8C5A5] bg-[#FFFCF5] px-4 py-2 text-[#263B56] placeholder:text-slate-400 focus:border-[#263B56] focus:outline-none focus:ring-2 focus:ring-[#263B56]/20 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:focus:border-blue-400 dark:focus:ring-blue-400/30"
      />

      <div className="flex gap-3">
        <button
          onClick={() => aoMudarFiltro("todos")}
          className={classeBotao(filtro === "todos")}
        >
          Todos
        </button>

        <button
          onClick={() => aoMudarFiltro("favoritos")}
          className={classeBotao(filtro === "favoritos")}
        >
          Favoritos ♥ {totalFavoritos}
        </button>
      </div>
    </div>
  );
}

export default BarraFiltros;
