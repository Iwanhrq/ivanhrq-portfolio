export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="text-center max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Ivan Henrique
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-300">
          Desenvolvedor Full Stack apaixonado por criar experiências digitais incríveis
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors">
            Ver Projetos
          </button>
          <button className="px-8 py-3 border border-white/20 hover:bg-white/10 rounded-lg font-semibold transition-colors">
            Entre em Contato
          </button>
        </div>
      </div>
    </section>
  )
}
