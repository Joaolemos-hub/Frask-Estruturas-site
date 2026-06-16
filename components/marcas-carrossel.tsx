'use client'

import { useState, useCallback, useEffect } from 'react'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import ClientesTicker from '@/components/clientes-ticker'

const CARD_WIDTH = 350
const CARD_GAP = 24

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

type Projeto = (typeof projetos)[number]

function ProjetoCard({
  projeto,
  isHovered,
  isDimmed,
  onHover,
  dragEnabled,
}: {
  projeto: Projeto
  isHovered: boolean
  isDimmed: boolean
  onHover: (id: number | null) => void
  dragEnabled: boolean
}) {
  return (
    <article
      className="relative h-[450px] w-full overflow-hidden rounded-2xl select-none transition-[opacity,transform,z-index] duration-300 ease-out"
      style={{
        opacity: isDimmed ? 0.5 : 1,
        transform: isHovered ? 'scale(1.06) translateY(-6px)' : 'scale(1) translateY(0)',
        zIndex: isHovered ? 20 : 1,
      }}
      onMouseEnter={() => dragEnabled && onHover(projeto.id)}
      onMouseLeave={() => dragEnabled && onHover(null)}
    >
      <div className="relative h-full w-full">
        <Image
          src={projeto.imagem}
          alt={`${projeto.marca} - ${projeto.evento}`}
          fill
          draggable={false}
          className="pointer-events-none object-cover transition-all duration-500 ease-out"
          style={{
            transform: isHovered ? 'scale(1.15)' : 'scale(1)',
            filter: isHovered ? 'brightness(1.1) contrast(1.06) saturate(1.08)' : 'brightness(0.88)',
          }}
          sizes={`${CARD_WIDTH}px`}
        />

        <div
          className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10 transition-opacity duration-500"
          style={{ opacity: isHovered ? 0.55 : 1 }}
        />

        <div className="absolute inset-0 flex flex-col justify-end p-6">
          <div
            className="mb-4 inline-flex self-start rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white"
            style={{ backgroundColor: projeto.cor }}
          >
            {projeto.marca}
          </div>

          <h3
            className="mb-2 text-2xl font-bold text-white transition-transform duration-300"
            style={{ transform: isHovered ? 'translateY(0)' : 'translateY(8px)' }}
          >
            {projeto.evento}
          </h3>

          <p
            className="mb-4 text-sm text-white/90 transition-all duration-500"
            style={{
              opacity: isHovered ? 1 : 0,
              transform: isHovered ? 'translateY(0)' : 'translateY(10px)',
            }}
          >
            {projeto.descricao}
          </p>

          <div
            className="flex flex-wrap gap-4 transition-all duration-500"
            style={{
              opacity: isHovered ? 1 : 0,
              transform: isHovered ? 'translateY(0)' : 'translateY(20px)',
            }}
          >
            {projeto.numeros.map((num, idx) => (
              <div key={idx} className="text-center">
                <div className="text-xl font-bold text-white">{num.valor}</div>
                <div className="text-xs uppercase tracking-wider text-white/70">{num.label}</div>
              </div>
            ))}
          </div>
        </div>

        {isHovered && (
          <div
            className="pointer-events-none absolute inset-0 rounded-2xl ring-2 ring-white/25 shadow-[0_24px_48px_-12px_rgba(0,0,0,0.65)]"
            aria-hidden
          />
        )}
      </div>
    </article>
  )
}

export default function MarcasCarrossel() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [isDragging, setIsDragging] = useState(false)

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    dragFree: false,
    containScroll: false,
  })

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  useEffect(() => {
    if (!emblaApi) return

    const onPointerDown = () => setIsDragging(true)
    const onPointerUp = () => setIsDragging(false)

    emblaApi.on('pointerDown', onPointerDown)
    emblaApi.on('pointerUp', onPointerUp)

    return () => {
      emblaApi.off('pointerDown', onPointerDown)
      emblaApi.off('pointerUp', onPointerUp)
    }
  }, [emblaApi])

  const dragEnabled = !isDragging

  return (
    <section className="py-24 bg-[#1a1a1a]" id="marcas">
      <div className="max-w-7xl mx-auto px-6">
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

        <div className="relative">
          <button
            type="button"
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 z-20 -ml-6 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
            aria-label="Marca anterior"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            type="button"
            onClick={scrollNext}
            className="absolute right-0 top-1/2 z-20 -mr-6 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
            aria-label="Próxima marca"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#1a1a1a] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#1a1a1a] to-transparent" />

          <div
            ref={emblaRef}
            className={`overflow-hidden py-8 px-4 ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
          >
            <div className="flex" style={{ marginLeft: -CARD_GAP }}>
              {projetos.map((projeto) => (
                <div
                  key={projeto.id}
                  className="min-w-0 shrink-0 grow-0"
                  style={{
                    flex: `0 0 ${CARD_WIDTH}px`,
                    paddingLeft: CARD_GAP,
                  }}
                >
                  <ProjetoCard
                    projeto={projeto}
                    isHovered={hoveredId === projeto.id}
                    isDimmed={hoveredId !== null && hoveredId !== projeto.id}
                    onHover={setHoveredId}
                    dragEnabled={dragEnabled}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-4 flex items-center justify-center gap-2 text-sm text-neutral-500">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          Arraste para ver mais
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </p>

        <ClientesTicker />
      </div>
    </section>
  )
}
