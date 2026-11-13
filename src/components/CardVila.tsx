
import type { Vila } from "../data/tipos";

type CardVilaProps = {
  vila: Vila;
};

function CardVila({ vila }: CardVilaProps) {
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
        src={vila.imagem}
        alt={vila.nome}
        className="
          h-20 w-20 shrink-0 rounded-xl
          border border-[#E5D5B8]
          bg-slate-100 object-cover
          transition-transform duration-300
          group-hover:scale-[1.04]
          dark:border-slate-700
          dark:bg-slate-800
        "
      />

      <div className="min-w-0 flex-1">
        <h3
          className="
            text-base font-extrabold leading-tight
            text-[#172A45]
            dark:text-slate-100
          "
        >
          {vila.nome}
        </h3>

        <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
          País da vila:{" "}
          <span className="font-semibold text-orange-600 dark:text-orange-400">
            {vila.pais}
          </span>
        </p>

        <p className="text-xs leading-relaxed text-[#52647B] dark:text-slate-300">
          {vila.descricao}
        </p>
      </div>
    </article>
  );
}

export default CardVila;
