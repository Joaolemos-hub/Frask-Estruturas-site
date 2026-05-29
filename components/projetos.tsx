const projetos = [
  {
    cliente: "Red Bull",
    ano: "2025",
    title: "Red Bull Show Run Curitiba",
    desc: "Infraestrutura completa para o evento de Fórmula 1: 3.500m² de tendas, 3.500m² de pisos, 4.500m de grades, 2 camarotes, 2 pórticos e 120m de arquibancadas.",
    tipo: "Evento Esportivo",
    destaque: true,
  },
  {
    cliente: "Risorama",
    ano: "2023",
    title: "Festival Risorama 2023",
    desc: "Estrutura de palco e cobertura para o maior festival de humor do Brasil, realizado na Pedreira Paulo Leminski.",
    tipo: "Festival Cultural",
  },
  {
    cliente: "Renault",
    ano: "2022",
    title: "Renault — 25 Anos",
    desc: "Estrutura completa para o evento comemorativo dos 25 anos da Renault no Brasil.",
    tipo: "Evento Corporativo",
  },
  {
    cliente: "Festival de Curitiba",
    ano: "Múltiplas edições",
    title: "Festival de Curitiba",
    desc: "Estruturas para o mais importante festival cultural do Sul do Brasil — múltiplos palcos, camarotes e coberturas.",
    tipo: "Festival",
  },
]

export default function Projetos() {
  return (
    <section id="projetos" className="py-32 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div>
            <p className="text-sm font-medium tracking-[0.2em] text-neutral-500 uppercase mb-4">
              Projetos Realizados
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-white leading-tight">
              Grandes marcas{' '}
              <span className="italic text-frask-red">confiam</span> na Frask
            </h2>
          </div>
          <a
            href="#contato"
            className="inline-flex items-center text-sm font-medium text-white hover:text-neutral-300 transition-colors"
          >
            Ver todos os projetos
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projetos.map((p, i) => (
            <div
              key={i}
              className="group border border-neutral-800 p-10 hover:border-frask-red/50 transition-colors"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="text-sm text-neutral-500">{p.cliente}</span>
                <span className="text-sm text-neutral-600">{p.ano}</span>
              </div>
              
              <h3 className="font-serif text-2xl md:text-3xl text-white mb-4 group-hover:text-neutral-200 transition-colors">
                {p.title}
              </h3>
              
              <p className="text-neutral-400 leading-relaxed mb-6">
                {p.desc}
              </p>
              
              <div className="flex items-center justify-between pt-6 border-t border-neutral-800">
                <span className="text-xs text-neutral-500 uppercase tracking-wider">
                  {p.tipo}
                </span>
                <a
                  href="#contato"
                  className="text-sm font-medium text-white hover:text-neutral-300 transition-colors"
                >
                  Saiba mais
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
