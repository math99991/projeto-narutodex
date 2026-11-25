function EstadoCarregando() {
  return (
    <div
      role="status"
      className="mt-6 flex flex-col items-center gap-3 rounded-xl border border-dashed border-slate-300 p-10 text-slate-600 dark:border-slate-700 dark:text-slate-400"
    >
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-orange-500 border-t-transparent" />
      <p>Carregando personagens...</p>
    </div>
  );
}

export default EstadoCarregando;
