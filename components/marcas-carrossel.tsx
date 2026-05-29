'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import ClientesTicker from '@/components/clientes-ticker'

const projetos = [
  {
    id: 1,
    marca: "RED BULL",
    evento: "Show Run Curitiba 2025",
    descricao: "Infraestrutura completa para o evento de Fórmula 1",
    numeros: [
      { label: "Tendas", valor: "3.500 m²" },
      { label: "Pisos", valor: "3.500 m²" },
      { label: "Grades", valor: "4.500 m" },
      { label: "Arquibancadas", valor: "120 m" },
    ],
    imagem: "/redbull-showrun.jpg",
    cor: "#DB0A40",
  },
  {
    id: 2,
    marca: "GRUPO BOTICÁRIO",
    evento: "Eventos Corporativos",
    descricao: "Estruturas para convenções e lançamentos de produtos",
    numeros: [
      { label: "Projetos", valor: "15+" },
      { label: "Anos", valor: "8" },
    ],
    imagem: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
    cor: "#00A86B",
  },
  {
    id: 3,
    marca: "RENAULT",
    evento: "Lançamentos e Apresentações",
    descricao: "Estruturas para eventos automotivos e showrooms",
    numeros: [
      { label: "Eventos", valor: "20+" },
      { label: "Parceria", valor: "10 anos" },
    ],
    imagem: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&h=600&fit=crop",
    cor: "#FFCC00",
  },
  {
    id: 4,
    marca: "FESTIVAL DE CURITIBA",
    evento: "Artes Cênicas",
    descricao: "Palcos, arquibancadas e estruturas para o maior festival de teatro do Brasil",
    numeros: [
      { label: "Edições", valor: "12+" },
      { label: "Palcos", valor: "50+" },
    ],
    imagem: "https://images.unsplash.com/photo-1514306191717-452ec28c7814?w=800&h=600&fit=crop",
    cor: "#E63946",
  },
  {
    id: 5,
    marca: "RISORAMA",
    evento: "Festival de Humor",
    descricao: "Infraestrutura para o festival de comédia de Diogo Portugal",
    numeros: [
      { label: "Público", valor: "50k+" },
      { label: "Edições", valor: "8" },
    ],
    imagem: "https://images.unsplash.com/photo-1585699324551-f6c309eedeca?w=800&h=600&fit=crop",
    cor: "#FF6B35",
  },
  {
    id: 6,
    marca: "PARNAXX PRODUÇÕES",
    evento: "Produtora de Eventos",
    descricao: "Parceria estratégica em grandes produções culturais",
    numeros: [
      { label: "Projetos", valor: "30+" },
      { label: "Anos", valor: "6" },
    ],
    imagem: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&h=600&fit=crop",
    cor: "#6366F1",
  },
]

export default function MarcasCarrossel() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  useEffect(() => {
    checkScroll()
    const ref = scrollRef.current
    if (ref) {
      ref.addEventListener('scroll', checkScroll)
      return () => ref.removeEventListener('scroll', checkScroll)
    }
  }, [])

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section className="py-24 bg-[#1a1a1a]" id="marcas">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-frask-gray mb-4">
            <span className="text-frask-red">◆</span> Confiança Comprovada
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
            Grandes Marcas que{' '}
            <span className="italic text-frask-red">Confiam</span> na Frask
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
            Décadas de experiência entregando estruturas de excelência para os maiores eventos do Brasil
          </p>
        </div>

        {/* Carrossel Container */}
        <div className="relative">
          {/* Botão Esquerda */}
          {canScrollLeft && (
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 -ml-6"
              aria-label="Anterior"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {/* Botão Direita */}
          {canScrollRight && (
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 -mr-6"
              aria-label="Próximo"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}

          {/* Gradientes de fade */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#1a1a1a] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#1a1a1a] to-transparent z-10 pointer-events-none" />

          {/* Carrossel */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide py-8 px-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {projetos.map((projeto) => (
              <div
                key={projeto.id}
                className="relative flex-shrink-0 w-[350px] h-[450px] rounded-2xl overflow-hidden cursor-pointer group"
                onMouseEnter={() => setHoveredId(projeto.id)}
                onMouseLeave={() => setHoveredId(null)}
                style={{
                  transform: hoveredId === projeto.id 
                    ? 'scale(1.08) translateY(-10px)' 
                    : hoveredId !== null 
                      ? 'scale(0.95)' 
                      : 'scale(1)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  zIndex: hoveredId === projeto.id ? 30 : 1,
                }}
              >
                {/* Imagem de fundo */}
                <Image
                  src={projeto.imagem}
                  alt={`${projeto.marca} - ${projeto.evento}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay gradiente */}
                <div 
                  className="absolute inset-0 transition-opacity duration-500"
                  style={{
                    background: hoveredId === projeto.id
                      ? `linear-gradient(to top, ${projeto.cor}ee 0%, ${projeto.cor}88 40%, transparent 100%)`
                      : 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)'
                  }}
                />

                {/* Conteúdo */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  {/* Tag da marca */}
                  <div 
                    className="inline-flex self-start px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 transition-all duration-300"
                    style={{
                      backgroundColor: hoveredId === projeto.id ? 'white' : projeto.cor,
                      color: hoveredId === projeto.id ? projeto.cor : 'white',
                    }}
                  >
                    {projeto.marca}
                  </div>

                  {/* Título do evento */}
                  <h3 className="text-2xl font-bold text-white mb-2 transition-transform duration-300 group-hover:translate-y-0 translate-y-2">
                    {projeto.evento}
                  </h3>

                  {/* Descrição - aparece no hover */}
                  <p 
                    className="text-white/90 text-sm mb-4 transition-all duration-500"
                    style={{
                      opacity: hoveredId === projeto.id ? 1 : 0,
                      transform: hoveredId === projeto.id ? 'translateY(0)' : 'translateY(10px)',
                    }}
                  >
                    {projeto.descricao}
                  </p>

                  {/* Números/Stats - aparecem no hover */}
                  <div 
                    className="flex flex-wrap gap-4 transition-all duration-500"
                    style={{
                      opacity: hoveredId === projeto.id ? 1 : 0,
                      transform: hoveredId === projeto.id ? 'translateY(0)' : 'translateY(20px)',
                    }}
                  >
                    {projeto.numeros.map((num, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-xl font-bold text-white">{num.valor}</div>
                        <div className="text-xs text-white/70 uppercase tracking-wider">{num.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Borda decorativa no hover */}
                <div 
                  className="absolute inset-0 rounded-2xl transition-all duration-500 pointer-events-none"
                  style={{
                    boxShadow: hoveredId === projeto.id 
                      ? `0 25px 50px -12px ${projeto.cor}66, inset 0 0 0 2px ${projeto.cor}` 
                      : 'none',
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Indicador de scroll */}
        <div className="flex justify-center mt-8 gap-2">
          <span className="text-neutral-500 text-sm flex items-center gap-2">
            <svg className="w-4 h-4 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            Arraste para ver mais
            <svg className="w-4 h-4 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </div>

        <ClientesTicker />
      </div>
    </section>
  )
}
