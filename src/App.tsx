import { useState } from "react";
import Cabecalho from "./components/Cabecalho";
import Hero from "./components/Hero";
import Rodape from "./components/Rodape";
import SecaoPersonagens from "./components/SecaoPersonagens";
import SecaoVilas from "./components/SecaoVilas";
import { personagens } from "./data/personagens";
import type { Filtro } from "./data/tipos";
import { vilas } from "./data/vilas";

function App() {
  const [escuro, setEscuro] = useState(false);
  const [menuAberto, setMenuAberto] = useState(false);
  const [favoritos, setFavoritos] = useState<number[]>([]);
  const [busca, setBusca] = useState("");
  const [filtro, setFiltro] = useState<Filtro>("todos");
  const [mostrarTodos, setMostrarTodos] = useState(false);
  const [mostrarTodasVilas, setMostrarTodasVilas] = useState(false);

  function alternarFavorito(id: number) {
    setFavoritos((atual) =>
      atual.includes(id) ? atual.filter((item) => item !== id) : [...atual, id],
    );
  }

  return (
    // A classe "dark" nesta div ativa todas as variantes dark: dos filhos
    <div className={escuro ? "dark" : ""}>
      <div className="min-h-screen bg-slate-50 bg-[url('/images/fundo-claro.jpg')] bg-cover bg-center bg-fixed bg-no-repeat text-slate-900 transition-colors dark:bg-slate-950 dark:bg-[url('/images/fundo.jpg')] dark:text-slate-100">
        <Cabecalho
          escuro={escuro}
          menuAberto={menuAberto}
          aoAlternarTema={() => setEscuro(!escuro)}
          aoAlternarMenu={() => setMenuAberto(!menuAberto)}
          aoFecharMenu={() => setMenuAberto(false)}
        />

        <main className="mx-auto max-w-7xl space-y-10 px-4 py-6 md:px-8">
          <Hero
            totalPersonagens={personagens.length}
            totalVilas={vilas.length}
            totalFavoritos={favoritos.length}
          />

          <SecaoPersonagens
            personagens={personagens}
            favoritos={favoritos}
            busca={busca}
            filtro={filtro}
            mostrarTodos={mostrarTodos}
            aoFavoritar={alternarFavorito}
            aoMudarBusca={setBusca}
            aoMudarFiltro={setFiltro}
            aoAlternarMostrarTodos={() => setMostrarTodos(!mostrarTodos)}
          />

          <SecaoVilas
            vilas={vilas}
            mostrarTodas={mostrarTodasVilas}
            aoAlternarMostrarTodas={() => setMostrarTodasVilas(!mostrarTodasVilas)}
          />
        </main>

        <Rodape />
      </div>
    </div>
  );
}

export default App;
