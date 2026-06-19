import Image from 'next/image'
import SectionBackground from '@/components/section-background'
import GridPattern from '@/components/grid-pattern'
import { siteBackgrounds } from '@/lib/site-backgrounds'

const solucoes = [
  {
    title: "Palcos & Stages",
    desc: "Palcos cobertos e descobertos para shows, festivais, cerimônias e lançamentos. Estruturas em alumínio e aço para grandes produções.",
  },
  {
    title: "Arquibancadas",
    desc: "Arquibancadas modulares homologadas para eventos esportivos, culturais e corporativos. Segurança certificada para qualquer capacidade.",
  },
  {
    title: "Camarotes & Skyboxes",
    desc: "Camarotes exclusivos com estrutura metálica, deck e acabamento premium para hospitalidade VIP em eventos de alto padrão.",
  },
  {
    title: "Coberturas & Tendas",
    desc: "Tendas e coberturas tensionadas para proteção total do seu evento. Soluções para qualquer dimensão.",
  },
  {
    title: "Treliças & Grids",
    desc: "Sistemas de treliças box truss para iluminação, som, LED, rigging e cenografia. Projetos customizados.",
  },
  {
    title: "Projetos Especiais",
    desc: "Estruturas arquitetônicas sob medida — cenografias, ambientações, fachadas e instalações para ativações de marca.",
  },
]

export default function Solucoes() {
  return (
    <section id="solucoes" className="relative overflow-hidden bg-[#F5F5F0] py-32">
      <SectionBackground {...siteBackgrounds.solucoes} />
      <GridPattern />
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <p className="text-sm font-medium tracking-[0.2em] text-frask-gray uppercase mb-4">
              <span className="text-frask-red">◆</span> Nossas Soluções
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-neutral-900 leading-tight">
              Estruturas metálicas para{' '}
              <span className="italic text-frask-red">cada necessidade</span>
            </h2>
          </div>
          <p className="text-neutral-600 max-w-md lg:text-right">
            Oferecemos uma gama completa de soluções em estruturas temporárias, 
            todas projetadas com rigor técnico e foco na segurança.
          </p>
        </div>

        {/* Feature Banner */}
        <div className="relative mb-16 aspect-video overflow-hidden rounded-lg">
          <Image
            src="/images/tendas-banner.png"
            alt="Tendas e coberturas modulares brancas iluminadas para evento corporativo ao entardecer"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1280px) 100vw, 1280px"
          />
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-200">
          {solucoes.map((s, i) => (
            <div
              key={i}
              className="bg-white/90 p-10 backdrop-blur-sm group hover:bg-white transition-colors border-t-2 border-t-transparent hover:border-t-frask-red"
            >
              <span className="text-sm font-medium text-neutral-300 mb-6 block">
                0{i + 1}
              </span>
              <h3 className="text-xl font-medium text-neutral-900 mb-4 group-hover:text-neutral-700 transition-colors">
                {s.title}
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                {s.desc}
              </p>
              <a
                href="#contato"
                className="inline-flex items-center text-sm font-medium text-frask-gray-dark hover:text-frask-red transition-colors"
              >
                Solicitar orçamento
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
