type HeroProps = {
  totalPersonagens: number;
  totalVilas: number;
  totalFavoritos: number;
};

function Hero({ totalPersonagens, totalVilas, totalFavoritos }: HeroProps) {
  const numeros = [
    { rotulo: "personagens", valor: totalPersonagens },
    { rotulo: "vilas", valor: totalVilas },
    { rotulo: "favoritos", valor: totalFavoritos },
  ];

  return (
    <section className="flex flex-col gap-6 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-400 p-6 text-white shadow-lg md:flex-row md:items-center md:justify-between md:p-10 dark:from-orange-600 dark:to-red-800">
      <div>
        <h2 className="text-3xl font-extrabold md:text-4xl lg:text-5xl">O universo ninja em um lugar</h2>
        <p className="mt-3 max-w-md text-base text-white/90 md:text-lg">
          Personagens, habilidades e vilas do mundo de Naruto
        </p>

        <ul className="mt-6 flex flex-wrap gap-3">
          {numeros.map((item) => (
            <li key={item.rotulo} className="rounded-lg bg-black/15 px-4 py-2 text-sm">
              <span className="mr-1 text-lg font-bold">{item.valor}</span>
              {item.rotulo}
            </li>
          ))}
        </ul>
      </div>

      <img
        src="./images/hero.jpg"
        alt="Banner Naruto"
        className="h-40 w-full shrink-0 rounded-xl object-cover shadow-xl ring-4 ring-white/30 md:w-80 lg:h-52 lg:w-[28rem]"
      />
    </section>
  );
}

export default Hero;
