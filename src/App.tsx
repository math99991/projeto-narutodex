
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
        {/* LISTAGEM DE PERSONAGENS */}
        <section id="personagens">
          <h2 className="text-2xl font-bold">
            PERSONAGENS
          </h2>

          <p className="text-sm text-slate-600">
            Explore a lista dos principais shinobis de Naruto
          </p>

          {/* PESQUISA E FILTROS */}
          <div className="mt-4 flex flex-col gap-4 lg:flex-row lg:items-center">
            <input
              type="search"
              placeholder="Buscar personagem..."
              className="w-full flex-1 rounded-lg border border-slate-300 bg-white px-4 py-2"
            />

            <div className="flex gap-3">
              <button className="rounded-lg border border-slate-300 bg-white px-6 py-2 font-semibold">
                TODOS
              </button>

              <button className="rounded-lg border border-slate-300 bg-white px-6 py-2 font-semibold">
                FAVORITOS ♡
              </button>
            </div>
          </div>

          {/* CARDS DOS PERSONAGENS */}
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">

            {/* NARUTO */}
            <article className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <img
                src="/images/naruto.jpg"
                alt="Naruto Uzumaki"
                className="h-24 w-28 shrink-0 rounded-lg bg-slate-200 object-cover"
              />

              <div className="flex-1">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-lg font-bold">Naruto Uzumaki</h3>
                  <button aria-label="Favoritar Naruto" className="text-xl text-orange-500">♡</button>
                </div>
                <p className="mt-1 text-sm text-slate-600">Vila: Konoha</p>
                <p className="text-sm text-slate-600">Clã: Uzumaki</p>
                <p className="text-sm text-slate-600">Habilidade: Rasengan</p>
              </div>
            </article>

            {/* SASUKE */}
            <article className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <img
                src="/images/sasuke.jpg"
                alt="Sasuke Uchiha"
                className="h-24 w-28 shrink-0 rounded-lg bg-slate-200 object-cover"
              />

              <div className="flex-1">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-lg font-bold">Sasuke Uchiha</h3>
                  <button aria-label="Favoritar Sasuke" className="text-xl text-orange-500">♡</button>
                </div>
                <p className="mt-1 text-sm text-slate-600">Vila: Konoha</p>
                <p className="text-sm text-slate-600">Clã: Uchiha</p>
                <p className="text-sm text-slate-600">Habilidade: Chidori</p>
              </div>
            </article>

            {/* SAKURA */}
            <article className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <img
                src="/images/sakura.jpg"
                alt="Sakura Haruno"
                className="h-24 w-28 shrink-0 rounded-lg bg-slate-200 object-cover"
              />

              <div className="flex-1">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-lg font-bold">Sakura Haruno</h3>
                  <button aria-label="Favoritar Sakura" className="text-xl text-orange-500">♡</button>
                </div>
                <p className="mt-1 text-sm text-slate-600">Vila: Konoha</p>
                <p className="text-sm text-slate-600">Clã: Haruno</p>
                <p className="text-sm text-slate-600">Habilidade: Força sobre-humana</p>
              </div>
            </article>

            {/* KAKASHI */}
            <article className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <img
                src="/images/kakashi.jpg"
                alt="Kakashi Hatake"
                className="h-24 w-28 shrink-0 rounded-lg bg-slate-200 object-cover"
              />

              <div className="flex-1">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-lg font-bold">Kakashi Hatake</h3>
                  <button aria-label="Favoritar Kakashi" className="text-xl text-orange-500">♡</button>
                </div>
                <p className="mt-1 text-sm text-slate-600">Vila: Konoha</p>
                <p className="text-sm text-slate-600">Clã: Hatake</p>
                <p className="text-sm text-slate-600">Habilidade: Sharingan</p>
              </div>
            </article>

            {/* HINATA */}
            <article className="hidden items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm md:flex">
              <img
                src="/images/hinata.jpg"
                alt="Hinata Hyuga"
                className="h-24 w-28 shrink-0 rounded-lg bg-slate-200 object-cover"
              />

              <div className="flex-1">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-lg font-bold">Hinata Hyuga</h3>
                  <button aria-label="Favoritar Hinata" className="text-xl text-orange-500">♡</button>
                </div>
                <p className="mt-1 text-sm text-slate-600">Vila: Konoha</p>
                <p className="text-sm text-slate-600">Clã: Hyuga</p>
                <p className="text-sm text-slate-600">Habilidade: Byakugan</p>
              </div>
            </article>

            {/* SHIKAMARU */}
            <article className="hidden items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm md:flex">
              <img
                src="/images/shikamaru.jpg"
                alt="Shikamaru Nara"
                className="h-24 w-28 shrink-0 rounded-lg bg-slate-200 object-cover"
              />

              <div className="flex-1">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-lg font-bold">Shikamaru Nara</h3>
                  <button aria-label="Favoritar Shikamaru" className="text-xl text-orange-500">♡</button>
                </div>
                <p className="mt-1 text-sm text-slate-600">Vila: Konoha</p>
                <p className="text-sm text-slate-600">Clã: Nara</p>
                <p className="text-sm text-slate-600">Habilidade: Manipulação de sombras</p>
              </div>
            </article>

            {/* ITACHI */}
            <article className="hidden items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm lg:flex">
              <img
                src="/images/itachi.jpg"
                alt="Itachi Uchiha"
                className="h-24 w-28 shrink-0 rounded-lg bg-slate-200 object-cover"
              />

              <div className="flex-1">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-lg font-bold">Itachi Uchiha</h3>
                  <button aria-label="Favoritar Itachi" className="text-xl text-orange-500">♡</button>
                </div>
                <p className="mt-1 text-sm text-slate-600">Vila: Konoha</p>
                <p className="text-sm text-slate-600">Clã: Uchiha</p>
                <p className="text-sm text-slate-600">Habilidade: Tsukuyomi</p>
              </div>
            </article>

            {/* GAARA */}
            <article className="hidden items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm lg:flex">
              <img
                src="/images/gaara.jpg"
                alt="Gaara"
                className="h-24 w-28 shrink-0 rounded-lg bg-slate-200 object-cover"
              />

              <div className="flex-1">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-lg font-bold">Gaara</h3>
                  <button aria-label="Favoritar Gaara" className="text-xl text-orange-500">♡</button>
                </div>
                <p className="mt-1 text-sm text-slate-600">Vila: Suna</p>
                <p className="text-sm text-slate-600">Clã: Sabaku</p>
                <p className="text-sm text-slate-600">Habilidade: Controle da areia</p>
              </div>
            </article>

          </div>

          <div className="mt-6 text-center">
            <button className="rounded-lg border border-slate-300 bg-white px-6 py-2">
              Ver todos os principais personagens →
            </button>
          </div>
        </section>
      </main>
      {/* RODAPÉ */}
      <footer className="mt-10 border-t border-slate-200 bg-white px-4 py-6 text-sm text-slate-600 md:px-8">
        <p>NARUTODEX - PROJETO TCD</p>
      </footer>
    </div>
  )
}

export default App
