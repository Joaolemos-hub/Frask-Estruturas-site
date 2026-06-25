type GridPatternProps = {
  className?: string
}

/**
 * Padrão de grade quadriculada sutil usado nas seções de fundo claro.
 * Mantém um visual consistente em todo o site (mesmo tamanho e intensidade
 * da grade do Hero). Não deve ser usado sobre fundos escuros.
 */
export default function GridPattern({ className = '' }: GridPatternProps) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 opacity-[0.04] ${className}`}
      style={{
        backgroundImage: `
          linear-gradient(to right, #000 1px, transparent 1px),
          linear-gradient(to bottom, #000 1px, transparent 1px)
        `,
        backgroundSize: '80px 80px',
      }}
    />
  )
}
