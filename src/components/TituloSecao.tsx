
type TituloSecaoProps = {
  titulo: string;
  subtitulo: string;
};

function TituloSecao({ titulo, subtitulo }: TituloSecaoProps) {
  return (
    <div className="border-l-4 border-[#263B56] pl-3 dark:border-blue-400">
      <h2 className="text-2xl font-bold uppercase">{titulo}</h2>
      <p className="text-sm text-slate-600 dark:text-slate-400">
        {subtitulo}
      </p>
    </div>
  );
}

export default TituloSecao;
