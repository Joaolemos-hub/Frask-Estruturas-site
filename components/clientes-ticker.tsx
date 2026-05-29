const clientes = [
  'Grupo Boticário',
  'Renault',
  'Festival de Curitiba',
  'Risorama',
  'Parnaxx Produções',
]

function MarqueeTrack({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <div className="flex shrink-0 items-center" aria-hidden={duplicate || undefined}>
      {clientes.map((cliente, index) => (
        <div key={`${duplicate ? 'dup' : 'orig'}-${index}`} className="flex shrink-0 items-center">
          <span className="whitespace-nowrap px-10 font-serif text-2xl text-white/90 md:px-14 md:text-3xl">
            {cliente}
          </span>
          <span className="text-frask-red/70" aria-hidden>
            ◆
          </span>
        </div>
      ))}
    </div>
  )
}

export default function ClientesTicker() {
  return (
    <div className="mt-16 border-t border-white/10 pt-16">
      <style>{`
        @keyframes clientes-marquee-scroll {
          from {
            transform: translate3d(0, 0, 0);
          }
          to {
            transform: translate3d(-50%, 0, 0);
          }
        }

        .clientes-marquee-track {
          display: flex;
          width: max-content;
          animation: clientes-marquee-scroll 22s linear infinite;
          will-change: transform;
        }
      `}</style>

      <p className="mb-10 text-center text-sm uppercase tracking-[0.2em] text-frask-gray">
        <span className="text-frask-red">◆</span> Clientes que confiam em nosso trabalho
      </p>

      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#1a1a1a] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#1a1a1a] to-transparent" />

        <div className="clientes-marquee-track">
          <MarqueeTrack />
          <MarqueeTrack duplicate />
        </div>
      </div>
    </div>
  )
}
