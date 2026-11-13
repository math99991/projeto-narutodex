
import type { Personagem } from "../data/tipos";

type CardPersonagemProps = {
  personagem: Personagem;
  favorito: boolean;
  aoFavoritar: (id: number) => void;
};

function CardPersonagem({
  personagem,
  favorito,
  aoFavoritar,
}: CardPersonagemProps) {
  return (
    <article
      className="
        group flex h-full items-center gap-4
        rounded-2xl border border-[#E5D5B8]
        bg-[#FFFCF5]/90 p-4
        shadow-sm backdrop-blur-sm
        transition-all duration-300
        hover:-translate-y-1
        hover:border-orange-400
        hover:bg-[#FFF8EA]
        hover:shadow-lg
        dark:border-slate-700/80
        dark:bg-slate-900/90
        dark:hover:border-orange-400/70
        dark:hover:bg-slate-800/95
      "
    >
      <img
        src={personagem.imagem}
        alt={personagem.nome}
        className="
          h-24 w-28 shrink-0 rounded-xl
          border border-[#E5D5B8]
          bg-slate-100 object-cover object-top
          transition-transform duration-300
          group-hover:scale-[1.03]
          dark:border-slate-700
          dark:bg-slate-800
        "
      />

      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-2">
          <h3 className="
            text-base font-extrabold leading-tight
            text-[#172A45]
            dark:text-slate-100
          ">
            {personagem.nome}
          </h3>

          <button
            aria-label={`${favorito ? "Desfavoritar" : "Favoritar"} ${personagem.nome}`}
            aria-pressed={favorito}
            onClick={() => aoFavoritar(personagem.id)}
            className={`
              shrink-0 rounded-full p-1
              text-2xl leading-none
              transition-all duration-200
              hover:scale-125
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-orange-400
              ${
                favorito
                  ? "text-red-500"
                  : "text-slate-400 hover:text-red-500 dark:text-slate-500"
              }
            `}
          >
            {favorito ? "♥" : "♡"}
          </button>
        </div>

        <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
          Vila:{" "}
          <span className="font-semibold text-orange-600 dark:text-orange-400">
            {personagem.vila}
          </span>
        </p>

        <p className="text-xs text-slate-500 dark:text-slate-400">
          Clã:{" "}
          <span className="font-semibold text-[#263B56] dark:text-slate-200">
            {personagem.cla}
          </span>
        </p>

        <p className="text-xs text-slate-500 dark:text-slate-400">
          Habilidade:{" "}
          <span className="font-semibold text-[#263B56] dark:text-slate-200">
            {personagem.habilidade}
          </span>
        </p>
      </div>
    </article>
  );
}

export default CardPersonagem;
