import Image from 'next/image'
import Link from 'next/link'
import GridPattern from '@/components/grid-pattern'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#F5F5F0] overflow-hidden pb-24">
      {/* Background Structure Image */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <Image
          src="/images/estrutura-fundo.png"
          alt=""
          fill
          className="object-cover object-center opacity-[0.22]"
          sizes="100vw"
          priority
        />
      </div>

      <div className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-frask-red/10 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute bottom-32 -left-16 h-64 w-64 rounded-full bg-frask-gray/10 blur-3xl" aria-hidden />

      {/* Background Pattern - Subtle Grid */}
      <GridPattern />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Text Content */}
          <div className="max-w-xl">
            <p className="text-sm font-medium tracking-[0.2em] text-frask-gray uppercase mb-6">
              <span className="text-frask-red">◆</span>{' '}
              Engenharia em Estruturas Metálicas
            </p>
            
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium text-neutral-900 leading-[1.1] mb-8">
              Solidez que{' '}
              <span className="italic text-frask-red">sustenta</span>{' '}
              grandes momentos
            </h1>
            
            <p className="text-lg text-neutral-600 leading-relaxed mb-10">
              Desde 2009, projetamos e instalamos estruturas metálicas temporárias 
              para os maiores eventos do Brasil. Engenharia de precisão que transforma 
              visões em realidade.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#projetos"
                className="inline-flex items-center justify-center px-8 py-4 bg-neutral-900 text-white text-sm font-medium tracking-wide hover:bg-neutral-800 transition-colors"
              >
                Ver Projetos
              </Link>
            </div>
          </div>
          
          {/* Feature Image */}
          <div className="relative aspect-square overflow-hidden mt-12 lg:mt-20">
            <Image
              src="/images/tendas-hero.png"
              alt="Vista aérea de complexo de tendas brancas montadas pela Frask para grande evento"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-8 border border-neutral-200 bg-white">
            <p className="font-serif text-5xl md:text-6xl font-medium text-neutral-900 mb-2">15+</p>
            <p className="text-sm text-neutral-500 tracking-wide">Anos de Experiência</p>
          </div>
          <div className="p-8 border border-neutral-200 bg-white">
            <p className="font-serif text-5xl md:text-6xl font-medium text-neutral-900 mb-2">500+</p>
            <p className="text-sm text-neutral-500 tracking-wide">Projetos Realizados</p>
          </div>
          <div className="p-8 border border-neutral-200 bg-white">
            <p className="font-serif text-5xl md:text-6xl font-medium text-neutral-900 mb-2">100%</p>
            <p className="text-sm text-neutral-500 tracking-wide">Segurança Certificada</p>
          </div>
          <div className="p-8 border border-neutral-200 bg-white">
            <p className="font-serif text-5xl md:text-6xl font-medium text-neutral-900 mb-2">24h</p>
            <p className="text-sm text-neutral-500 tracking-wide">Suporte Técnico</p>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-frask-gray/40 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-frask-red rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
