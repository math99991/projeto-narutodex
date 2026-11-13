type CabecalhoProps = {
  escuro: boolean;
  menuAberto: boolean;
  aoAlternarTema: () => void;
  aoAlternarMenu: () => void;
  aoFecharMenu: () => void;
};

const links = [
  { href: "#personagens", texto: "Personagens" },
  { href: "#vilas", texto: "Vilas" },
];

const botao =
  "rounded-lg border border-slate-300 px-3 py-2 transition-colors hover:border-orange-400 hover:text-orange-500 dark:border-slate-700 dark:hover:border-orange-400";

function Cabecalho({ escuro, menuAberto, aoAlternarTema, aoAlternarMenu, aoFecharMenu }: CabecalhoProps) {
  return (
    <header className="sticky top-0 z-30
  border-b border-[#D8C5A5]/40
  bg-[#F2E8D5]/75
  backdrop-blur-xl
  shadow-sm
  transition-all duration-300
  dark:border-blue-400/20
  dark:bg-[#0B162B]/75">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-8">
        <a href="#" className="flex items-center gap-3">
          <img
            src="./images/logo.png"
            alt="Logo Naruto Dex"
            className="h-12 w-12"
          />
          <h1 className="text-xl font-extrabold tracking-wide md:text-2xl">NARUTO DEX</h1>
        </a>

        <nav className="hidden gap-4 text-lg md:flex">
          {links.map((link, indice) => (
            <div key={link.href} className="flex gap-4">
              {indice > 0 && <span className="text-slate-300 dark:text-slate-600">|</span>}
              <a href={link.href} className="hover:text-orange-500">
                {link.texto}
              </a>
            </div>
          ))}
        </nav>

        <div className="flex gap-2">
          <button
            aria-label={escuro ? "Ativar tema claro" : "Ativar tema escuro"}
            onClick={aoAlternarTema}
            className={botao}
          >
            {escuro ? "☀️" : "🌙"}
          </button>
          <button
            aria-label="Abrir menu"
            aria-expanded={menuAberto}
            onClick={aoAlternarMenu}
            className={`${botao} md:hidden`}
          >
            {menuAberto ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {menuAberto && (
        <nav className="flex flex-col border-t border-slate-200 px-4 py-2 md:hidden dark:border-slate-800">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={aoFecharMenu}
              className="rounded-lg px-2 py-3 text-lg hover:bg-orange-50 hover:text-orange-500 dark:hover:bg-slate-800"
            >
              {link.texto}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

export default Cabecalho;