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
          <h1 className="text-xl font-bold md:text-2xl">NARUTO DEX</h1>
        </div>
        <nav className="hidden gap-4 text-lg md:flex">
          <a href="#personagens" className="hover:text-orange-500">Personagens</a>
          <span>|</span>
          <a href="#vilas" className="hover:text-orange-500">Vilas</a>
        </nav>
        <div className="flex gap-2">
          <button aria-label="Alternar tema" className="rounded-lg border border-slate-300 px-3 py-2">☀️</button>
          <button aria-label="Abrir menu" className="rounded-lg border border-slate-300 px-3 py-2 md:hidden">☰</button>
        </div>
      </header>

      <main className="mx-auto max-w-7xl space-y-10 px-4 py-6 md:px-8">
        {/* HERO */}
        <section className="flex items-center justify-between gap-4 rounded-xl border border-slate-200 bg-white p-4 md:p-8">
          <div>
            <h2 className="text-2xl font-bold md:text-4xl">O universo ninja em um lugar</h2>
            <p className="mt-2 text-sm text-slate-600 md:text-base">Personagens, habilidades e vilas do mundo de Naruto</p>
          </div>
          <div className="shrink-0 overflow-hidden rounded-lg">
            <img 
              src="/images/hero.jpg" 
              alt="Banner Naruto" 
              className="h-28 w-32 object-cover md:h-40 md:w-80 lg:w-[28rem] rounded-lg bg-slate-200"
            />
          </div>
        </section>

        {/* LISTAGEM PRINCIPAL: PERSONAGENS */}
        <section id="personagens">
          <h2 className="text-2xl font-bold">PERSONAGENS</h2>
          <p className="text-sm text-slate-600">Explore a lista dos principais shinobis de Naruto</p>

          <div className="mt-4 flex flex-col gap-4 lg:flex-row lg:items-center">
            <input type="search" placeholder="Buscar personagem..." className="w-full flex-1 rounded-lg border border-slate-300 bg-white px-4 py-2" />
            <div className="flex gap-3">
              <button className="rounded-lg border border-slate-300 bg-white px-6 py-2 font-semibold">TODOS</button>
              <button className="rounded-lg border border-slate-300 bg-white px-6 py-2 font-semibold">FAVORITOS ♡</button>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            
            {/* 1. Naruto */}
            <article className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <img src="/images/naruto.jpg" alt="Naruto Uzumaki" className="h-24 w-28 shrink-0 rounded-lg object-cover bg-slate-200" />
              <div className="flex-1">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-lg font-bold text-slate-900">Naruto Uzumaki</h3>
                  <button aria-label="Favoritar Naruto Uzumaki" className="text-xl text-orange-500">♡</button>
                </div>
                <p className="mt-1 text-sm text-slate-600">Vila: Konoha</p>
                <p className="text-sm text-slate-600">Clã: Uzumaki</p>
                <p className="text-sm text-slate-600">Habilidade: Rasengan</p>
              </div>
            </article>

            {/* 2. Sasuke */}
            <article className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <img src="/images/sasuke.jpg" alt="Sasuke Uchiha" className="h-24 w-28 shrink-0 rounded-lg object-cover bg-slate-200" />
              <div className="flex-1">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-lg font-bold text-slate-900">Sasuke Uchiha</h3>
                  <button aria-label="Favoritar Sasuke Uchiha" className="text-xl text-orange-500">♡</button>
                </div>
                <p className="mt-1 text-sm text-slate-600">Vila: Konoha</p>
                <p className="text-sm text-slate-600">Clã: Uchiha</p>
                <p className="text-sm text-slate-600">Habilidade: Chidori</p>
              </div>
            </article>

            {/* 3. Sakura */}
            <article className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <img src="/images/sakura.jpg" alt="Sakura Haruno" className="h-24 w-28 shrink-0 rounded-lg object-cover bg-slate-200" />
              <div className="flex-1">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-lg font-bold text-slate-900">Sakura Haruno</h3>
                  <button aria-label="Favoritar Sakura Haruno" className="text-xl text-orange-500">♡</button>
                </div>
                <p className="mt-1 text-sm text-slate-600">Vila: Konoha</p>
                <p className="text-sm text-slate-600">Clã: Haruno</p>
                <p className="text-sm text-slate-600">Habilidade: Força sobre-humana</p>
              </div>
            </article>

            {/* 4. Kakashi */}
            <article className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <img src="/images/kakashi.jpg" alt="Kakashi Hatake" className="h-24 w-28 shrink-0 rounded-lg object-cover bg-slate-200" />
              <div className="flex-1">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-lg font-bold text-slate-900">Kakashi Hatake</h3>
                  <button aria-label="Favoritar Kakashi Hatake" className="text-xl text-orange-500">♡</button>
                </div>
                <p className="mt-1 text-sm text-slate-600">Vila: Konoha</p>
                <p className="text-sm text-slate-600">Clã: Hatake</p>
                <p className="text-sm text-slate-600">Habilidade: Sharingan</p>
              </div>
            </article>

            {/* 5. Hinata (Tablet+) */}
            <article className="hidden md:flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <img src="/images/hinata.jpg" alt="Hinata Hyuga" className="h-24 w-28 shrink-0 rounded-lg object-cover bg-slate-200" />
              <div className="flex-1">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-lg font-bold text-slate-900">Hinata Hyuga</h3>
                  <button aria-label="Favoritar Hinata Hyuga" className="text-xl text-orange-500">♡</button>
                </div>
                <p className="mt-1 text-sm text-slate-600">Vila: Konoha</p>
                <p className="text-sm text-slate-600">Clã: Hyuga</p>
                <p className="text-sm text-slate-600">Habilidade: Byakugan</p>
              </div>
            </article>

            {/* 6. Shikamaru (Tablet+) */}
            <article className="hidden md:flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <img src="/images/shikamaru.jpg" alt="Shikamaru Nara" className="h-24 w-28 shrink-0 rounded-lg object-cover bg-slate-200" />
              <div className="flex-1">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-lg font-bold text-slate-900">Shikamaru Nara</h3>
                  <button aria-label="Favoritar Shikamaru Nara" className="text-xl text-orange-500">♡</button>
                </div>
                <p className="mt-1 text-sm text-slate-600">Vila: Konoha</p>
                <p className="text-sm text-slate-600">Clã: Nara</p>
                <p className="text-sm text-slate-600">Habilidade: Manipulação de sombras</p>
              </div>
            </article>

            {/* 7. Itachi (Desktop+) */}
            <article className="hidden lg:flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <img src="/images/itachi.jpg" alt="Itachi Uchiha" className="h-24 w-28 shrink-0 rounded-lg object-cover bg-slate-200" />
              <div className="flex-1">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-lg font-bold text-slate-900">Itachi Uchiha</h3>
                  <button aria-label="Favoritar Itachi Uchiha" className="text-xl text-orange-500">♡</button>
                </div>
                <p className="mt-1 text-sm text-slate-600">Vila: Konoha</p>
                <p className="text-sm text-slate-600">Clã: Uchiha</p>
                <p className="text-sm text-slate-600">Habilidade: Tsukuyomi</p>
              </div>
            </article>

            {/* 8. Gaara (Desktop+) */}
            <article className="hidden lg:flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <img src="/images/gaara.jpg" alt="Gaara" className="h-24 w-28 shrink-0 rounded-lg object-cover bg-slate-200" />
              <div className="flex-1">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-lg font-bold text-slate-900">Gaara</h3>
                  <button aria-label="Favoritar Gaara" className="text-xl text-orange-500">♡</button>
                </div>
                <p className="mt-1 text-sm text-slate-600">Vila: Suna</p>
                <p className="text-sm text-slate-600">Clã: Sabaku</p>
                <p className="text-sm text-slate-600">Habilidade: Controle da areia</p>
              </div>
            </article>

            {/* 9. Tsunade (Desktop+) */}
            <article className="hidden lg:flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <img src="/images/tsunade.jpg" alt="Tsunade" className="h-24 w-28 shrink-0 rounded-lg object-cover bg-slate-200" />
              <div className="flex-1">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-lg font-bold text-slate-900">Tsunade</h3>
                  <button aria-label="Favoritar Tsunade" className="text-xl text-orange-500">♡</button>
                </div>
                <p className="mt-1 text-sm text-slate-600">Vila: Konoha</p>
                <p className="text-sm text-slate-600">Clã: Senju</p>
                <p className="text-sm text-slate-600">Habilidade: Ninjutsu médico</p>
              </div>
            </article>

            {/* 10. Jiraiya (Desktop+) */}
            <article className="hidden lg:flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <img src="/images/jiraiya.jpg" alt="Jiraiya" className="h-24 w-28 shrink-0 rounded-lg object-cover bg-slate-200" />
              <div className="flex-1">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-lg font-bold text-slate-900">Jiraiya</h3>
                  <button aria-label="Favoritar Jiraiya" className="text-xl text-orange-500">♡</button>
                </div>
                <p className="mt-1 text-sm text-slate-600">Vila: Konoha</p>
                <p className="text-sm text-slate-600">Clã: Sem clã</p>
                <p className="text-sm text-slate-600">Habilidade: Modo Sábio</p>
              </div>
            </article>

            {/* 11. Rock Lee (Desktop+) */}
            <article className="hidden lg:flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <img src="/images/rocklee.jpg" alt="Rock Lee" className="h-24 w-28 shrink-0 rounded-lg object-cover bg-slate-200" />
              <div className="flex-1">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-lg font-bold text-slate-900">Rock Lee</h3>
                  <button aria-label="Favoritar Rock Lee" className="text-xl text-orange-500">♡</button>
                </div>
                <p className="mt-1 text-sm text-slate-600">Vila: Konoha</p>
                <p className="text-sm text-slate-600">Clã: Sem clã</p>
                <p className="text-sm text-slate-600">Habilidade: Taijutsu</p>
              </div>
            </article>

            {/* 12. Minato (Desktop+) */}
            <article className="hidden lg:flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <img src="/images/minato.jpg" alt="Minato Namikaze" className="h-24 w-28 shrink-0 rounded-lg object-cover bg-slate-200" />
              <div className="flex-1">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-lg font-bold text-slate-900">Minato Namikaze</h3>
                  <button aria-label="Favoritar Minato Namikaze" className="text-xl text-orange-500">♡</button>
                </div>
                <p className="mt-1 text-sm text-slate-600">Vila: Konoha</p>
                <p className="text-sm text-slate-600">Clã: Namikaze</p>
                <p className="text-sm text-slate-600">Habilidade: Hiraishin</p>
              </div>
            </article>

          </div>

          <div className="mt-6 text-center">
            <button className="rounded-lg border border-slate-300 bg-white px-6 py-2">Ver todos os principais personagens →</button>
          </div>
        </section>

        {/* LISTAGEM SECUNDÁRIA: VILAS OCULTAS */}
        <section id="vilas">
          <h2 className="text-2xl font-bold">VILAS OCULTAS</h2>
          <p className="text-sm text-slate-600">Conheça as principais vilas ninja.</p>

          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            
            <article className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <img src="/images/konoha.jpg" alt="Konoha" className="h-16 w-16 shrink-0 rounded-lg object-cover bg-slate-200" />
              <div>
                <h3 className="text-lg font-bold text-slate-900">Vila da Folha (Konoha)</h3>
                <p className="text-sm text-slate-600">País da vila: País do Fogo</p>
                <p className="text-sm text-slate-600">Descrição curta: Lar de Naruto e do Hokage.</p>
              </div>
            </article>

            <article className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <img src="/images/suna.jpg" alt="Suna" className="h-16 w-16 shrink-0 rounded-lg object-cover bg-slate-200" />
              <div>
                <h3 className="text-lg font-bold text-slate-900">Vila da Areia (Suna)</h3>
                <p className="text-sm text-slate-600">País da vila: País do Vento</p>
                <p className="text-sm text-slate-600">Descrição curta: Vila escondida no deserto.</p>
              </div>
            </article>

            <article className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <img src="/images/kiri.jpg" alt="Kiri" className="h-16 w-16 shrink-0 rounded-lg object-cover bg-slate-200" />
              <div>
                <h3 className="text-lg font-bold text-slate-900">Vila da Névoa (Kiri)</h3>
                <p className="text-sm text-slate-600">País da vila: País da Água</p>
                <p className="text-sm text-slate-600">Descrição curta: Vila cercada por neblina.</p>
              </div>
            </article>

            <article className="hidden md:flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <img src="/images/kumo.jpg" alt="Kumo" className="h-16 w-16 shrink-0 rounded-lg object-cover bg-slate-200" />
              <div>
                <h3 className="text-lg font-bold text-slate-900">Vila da Nuvem (Kumo)</h3>
                <p className="text-sm text-slate-600">País da vila: País do Raio</p>
                <p className="text-sm text-slate-600">Descrição curta: Vila construída nas montanhas.</p>
              </div>
            </article>

          </div>

          <div className="mt-6 text-center">
            <button className="rounded-lg border border-slate-300 bg-white px-6 py-2">Ver todas as principais vilas →</button>
          </div>
        </section>
      </main>

      <footer className="mt-10 flex items-center justify-between gap-4 border-t border-slate-200 bg-white px-4 py-6 text-sm text-slate-600 md:px-8">
        <p>NARUTODEX - PROJETO TCD</p>
        <p>© 2026 - Desenvolvido por Matheus</p>
      </footer>
    </div>
  )
}

export default App