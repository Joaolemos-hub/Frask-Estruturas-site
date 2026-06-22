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
    src: '/bg/estrutura-dois-andares.png',
    alt: 'Estrutura metálica de dois andares iluminada para evento corporativo',
    overlay: 'light',
    imageOpacity: 0.16,
    position: 'center 35%',
  },
  solucoes: {
    src: '/bg/estrutura-trelica-metalica.png',
    alt: 'Estrutura metálica de treliças box truss para coberturas e eventos',
    overlay: 'cream',
    imageOpacity: 0.22,
    position: 'center',
  },
  projetos: {
    src: '/bg/palco-show-luzes.png',
    alt: 'Palco de show com treliças, telões e iluminação cênica',
    overlay: 'dark',
    imageOpacity: 0.32,
    position: 'center 40%',
  },
  contato: {
    src: '/bg/estrutura-dois-andares.png',
    alt: 'Estrutura metálica de dois andares para eventos',
    overlay: 'cream',
    imageOpacity: 0.16,
    position: '20% center',
  },
} satisfies Record<string, SiteBackgroundConfig>
