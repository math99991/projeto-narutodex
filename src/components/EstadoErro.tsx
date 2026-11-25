type EstadoErroProps = {
  mensagem: string;
  aoTentarNovamente: () => void;
};

function EstadoErro({ mensagem, aoTentarNovamente }: EstadoErroProps) {
  return (
    <div
      role="alert"
      className="mt-6 flex flex-col items-center gap-4 rounded-xl border border-red-300 bg-red-50 p-8 text-center text-red-800 dark:border-red-900 dark:bg-red-950/60 dark:text-red-200"
    >
      <p>{mensagem}</p>
      <button
        onClick={aoTentarNovamente}
        className="rounded-lg bg-orange-500 px-6 py-2 font-semibold text-white transition-colors hover:bg-orange-600"
      >
        Tentar novamente
      </button>
    </div>
  );
}

export default EstadoErro;
