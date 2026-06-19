import Image from 'next/image'
import SectionBackground from '@/components/section-background'
import GridPattern from '@/components/grid-pattern'
import { siteBackgrounds } from '@/lib/site-backgrounds'

export default function Sobre() {
  const pilares = [
    {
      title: "Engenharia Certificada",
      desc: "Projetos assinados por engenheiro responsável, ART garantida em cada entrega.",
    },
    {
      title: "Normas Técnicas NBR",
      desc: "Conformidade total com as normas técnicas brasileiras — segurança que você pode comprovar.",
    },
    {
      title: "Estruturas Próprias",
      desc: "Frota e estruturas próprias para controle total de qualidade, logística e cumprimento de prazo.",
    },
    {
      title: "Gestão Completa",
      desc: "Da concepção à desmontagem, gerenciamos cada etapa. Você foca no evento; nós cuidamos do resto.",
    },
  ]

  return (
    <section id="sobre" className="relative overflow-hidden bg-white py-32">
      <SectionBackground {...siteBackgrounds.sobre} />
      <GridPattern />
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <p className="text-sm font-medium tracking-[0.2em] text-frask-gray uppercase mb-4">
            <span className="text-frask-red">◆</span> Sobre Nós
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-neutral-900 leading-tight mb-6">
            Engenharia que sustenta{' '}
            <span className="italic text-frask-red">experiências</span>
          </h2>
          <p className="text-lg text-neutral-600 leading-relaxed">
            Fundada em 2009 por Heron Bley Polatti, com mais de 20 anos de trajetória no setor, 
            a Frask nasceu do desejo de oferecer soluções completas e personalizadas em estruturas 
            temporárias para eventos. Nossa experiência é a fundação de cada projeto.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
          {/* Left - Feature Image */}
          <div className="relative w-full overflow-hidden">
            <Image
              src="/images/confianca-grande-escala.png"
              alt="Equipe técnica da Frask montando estrutura metálica de grande porte com segurança"
              width={470}
              height={568}
              className="w-full h-auto"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Right - Quote + Text */}
          <div className="pt-4">
            <div className="border-l-2 border-frask-red pl-8 mb-10">
              <blockquote className="font-serif text-2xl md:text-3xl text-neutral-900 leading-relaxed mb-6">
                &ldquo;Nosso diferencial vai além da estrutura — é a expertise, 
                o atendimento e a confiança que oferecemos.&rdquo;
              </blockquote>
              <cite className="text-sm text-neutral-500 not-italic">
                — Heron Bley Polatti, Fundador
              </cite>
            </div>
            <p className="text-neutral-600 leading-relaxed mb-6">
              Tornamo-nos parceiros essenciais de produtores de eventos, agências de marketing 
              e órgãos governamentais — sempre fornecendo soluções adaptadas às demandas do 
              mercado e em total conformidade com as mais rigorosas Normas Técnicas Brasileiras vigentes.
            </p>
            <p className="text-neutral-600 leading-relaxed">
              Com sede em Campo Magro, Paraná, atendemos todo o território nacional com 
              estruturas de alta qualidade e equipe técnica especializada.
            </p>
          </div>
        </div>

        {/* Pilares */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0 border border-neutral-200">
          {pilares.map((p, i) => (
            <div key={i} className="bg-white p-10 group hover:bg-white transition-colors border-r border-b border-neutral-200">
              <span className="text-sm font-medium text-neutral-300 mb-6 block">
                0{i + 1}
              </span>
              <h3 className="text-lg font-medium text-neutral-900 mb-3">
                {p.title}
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
