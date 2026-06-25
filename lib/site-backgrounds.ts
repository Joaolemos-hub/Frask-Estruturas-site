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
    src: '/bg/estrutura-metalica-engenharia.png',
    alt: 'Arquibancadas metálicas modulares com escadas e guarda-corpos para eventos',
    overlay: 'light',
    imageOpacity: 0.35,
    position: 'center bottom',
  },
  solucoes: {
    src: '/bg/estrutura-trelica-metalica.png',
    alt: 'Estrutura metálica de treliças box truss para coberturas e eventos',
    overlay: 'cream',
    imageOpacity: 10.22,
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
    src: '/bg/estrutura-trelica-metalica-contato.png',
    alt: 'Estrutura metálica de treliças box truss para coberturas e eventos',
    overlay: 'cream',
    imageOpacity: 10.22,
    position: 'center',
  },
} satisfies Record<string, SiteBackgroundConfig>
