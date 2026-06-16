export type BackgroundOverlay = 'light' | 'cream' | 'dark'

export type SiteBackgroundConfig = {
  src: string
  alt: string
  overlay: BackgroundOverlay
  imageOpacity?: number
  position?: string
  priority?: boolean
}

export const siteBackgrounds = {
  hero: {
    src: '/bg/palco-estrutura-metalica.png',
    alt: 'Palco com estrutura metálica, iluminação e equipamentos para eventos',
    overlay: 'cream',
    imageOpacity: 0.2,
    position: '70% center',
    priority: true,
  },
  sobre: {
    src: '/bg/trelica-iluminacao.png',
    alt: 'Treliça metálica com refletores para montagem de shows',
    overlay: 'light',
    imageOpacity: 0.14,
    position: '85% center',
  },
  solucoes: {
    src: '/bg/tendas-eventos.png',
    alt: 'Tendas e estruturas para eventos corporativos ao ar livre',
    overlay: 'cream',
    imageOpacity: 0.22,
    position: 'center',
  },
  projetos: {
    src: '/bg/arquibancadas-iluminacao.png',
    alt: 'Arquibancadas modulares com iluminação em evento',
    overlay: 'dark',
    imageOpacity: 0.28,
    position: 'center 40%',
  },
  contato: {
    src: '/bg/palco-estrutura-metalica.png',
    alt: 'Estrutura de palco e montagem para eventos',
    overlay: 'cream',
    imageOpacity: 0.16,
    position: '20% center',
  },
} satisfies Record<string, SiteBackgroundConfig>
