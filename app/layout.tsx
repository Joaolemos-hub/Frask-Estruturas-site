import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Frask Estruturas — Engenharia em Estruturas Metálicas',
  description:
    'Estruturas metálicas temporárias para eventos de alto padrão. Palcos, arquibancadas, camarotes, coberturas e tendas. Desde 2009, engenharia que sustenta experiências inesquecíveis.',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${playfair.variable} ${inter.variable} bg-[#F5F5F0]`}
    >
      <body className="antialiased font-sans">{children}</body>
    </html>
  )
}
