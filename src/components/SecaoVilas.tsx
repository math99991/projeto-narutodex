
import type { Vila } from "../data/tipos";
import CardVila from "./CardVila";
import TituloSecao from "./TituloSecao";

type SecaoVilasProps = {
  vilas: Vila[];
  mostrarTodas: boolean;
  aoAlternarMostrarTodas: () => void;
};

function classeDaVila(indice: number, mostrarTodas: boolean) {
  return mostrarTodas || indice < 3 ? "" : "hidden md:block";
}

function SecaoVilas({
  vilas,
  mostrarTodas,
  aoAlternarMostrarTodas,
}: SecaoVilasProps) {
  return (
    <section id="vilas" className="scroll-mt-24">
      <TituloSecao
        titulo="Vilas ocultas"
        subtitulo="Conheça as principais vilas ninja."
      />

      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {vilas.map((vila, indice) => (
          <div key={vila.id} className={classeDaVila(indice, mostrarTodas)}>
            <CardVila vila={vila} />
          </div>
        ))}
      </div>

      <div className="mt-6 text-center md:hidden">
        <button
          onClick={aoAlternarMostrarTodas}
          className="rounded-lg border border-[#D8C5A5] bg-[#FFFCF5] px-6 py-2 text-[#263B56] transition-colors hover:border-[#263B56] hover:bg-[#263B56] hover:text-white dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-blue-400 dark:hover:bg-blue-400 dark:hover:text-[#0B162B]"
        >
          {mostrarTodas ? "Ver menos" : "Ver todas as principais vilas →"}
        </button>
      </div>
    </section>
  );
}

export default SecaoVilas;
