
function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* CABEÇALHO */}
      <header className="flex items-center justify-between gap-4 border-b border-slate-200 bg-white px-4 py-4 md:px-8">
        <div className="flex items-center gap-3">
          <img
            src="/images/logo.png"
            alt="Logo Naruto Dex"
            className="h-12 w-12 rounded-lg object-cover bg-slate-200"
          />

          <h1 className="text-xl font-bold md:text-2xl">
            NARUTO DEX
          </h1>
        </div>

        <nav className="hidden gap-4 text-lg md:flex">
          <a href="#personagens" className="hover:text-orange-500">
            Personagens
          </a>

          <span>|</span>

          <a href="#vilas" className="hover:text-orange-500">
            Vilas
          </a>
        </nav>

        <div className="flex gap-2">
          <button
            aria-label="Alternar tema"
            className="rounded-lg border border-slate-300 px-3 py-2"
          >
            ☀️
          </button>

          <button
            aria-label="Abrir menu"
            className="rounded-lg border border-slate-300 px-3 py-2 md:hidden"
          >
            ☰
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-7xl space-y-10 px-4 py-6 md:px-8">
        {/* APRESENTAÇÃO */}
        <section className="flex items-center justify-between gap-4 rounded-xl border border-slate-200 bg-white p-4 md:p-8">
          <div>
            <h2 className="text-2xl font-bold md:text-4xl">
              O universo ninja em um lugar
            </h2>

            <p className="mt-2 text-sm text-slate-600 md:text-base">
              Personagens, habilidades e vilas do mundo de Naruto
            </p>
          </div>

          <div className="shrink-0 overflow-hidden rounded-lg">
            <img
              src="/images/hero.jpg"
              alt="Banner Naruto"
              className="h-28 w-32 rounded-lg bg-slate-200 object-cover md:h-40 md:w-80 lg:w-[28rem]"
            />
          </div>
        </section>
      </main>

      {/* RODAPÉ PROVISÓRIO */}
      <footer className="mt-10 border-t border-slate-200 bg-white px-4 py-6 text-sm text-slate-600 md:px-8">
        <p>NARUTODEX - PROJETO TCD</p>
      </footer>
    </div>
  )
}

export default App
