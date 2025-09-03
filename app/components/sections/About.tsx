export default function About() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          Sobre Mim
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Olá! Sou um desenvolvedor Full Stack apaixonado por tecnologia e inovação. 
              Tenho experiência em criar aplicações web modernas e responsivas, sempre 
              buscando as melhores práticas e tecnologias mais recentes.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Minha jornada na programação começou com a curiosidade de entender como 
              as coisas funcionam na web, e hoje transformo ideias em realidade digital.
            </p>
            <div className="flex gap-4">
              <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                Download CV
              </button>
              <button className="px-6 py-2 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors">
                Saiba Mais
              </button>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-8 rounded-2xl text-white text-center">
            <div className="text-6xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold mb-2">Sempre Aprendendo</h3>
            <p className="text-blue-100">
              Em constante evolução com as tecnologias mais recentes
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
