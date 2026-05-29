'use client'

import Image from 'next/image'
import Link from 'next/link'

const navLinks = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Soluções', href: '#solucoes' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Contato', href: '#contato' },
]

const solucoes = [
  'Palcos & Stages',
  'Arquibancadas',
  'Camarotes',
  'Coberturas',
  'Treliças',
]

export default function Footer() {
  return (
    <footer className="relative bg-neutral-900 text-white">
      <div className="absolute top-0 left-0 right-0 h-1 bg-frask-red" aria-hidden />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/frask-logo.jpeg"
                alt="Frask Estruturas"
                width={220}
                height={88}
                className="h-16 w-auto object-contain md:h-[4.5rem]"
                sizes="220px"
              />
            </Link>
            <p className="text-sm text-neutral-400 leading-relaxed max-w-xs">
              A estrutura por trás dos grandes momentos. Engenharia certificada desde 2009.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs text-neutral-500 uppercase tracking-wider mb-6">Navegação</p>
            <nav className="space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block text-sm text-neutral-400 hover:text-frask-red transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Solutions */}
          <div>
            <p className="text-xs text-neutral-500 uppercase tracking-wider mb-6">Soluções</p>
            <nav className="space-y-3">
              {solucoes.map((s) => (
                <Link
                  key={s}
                  href="#solucoes"
                  className="block text-sm text-neutral-400 hover:text-frask-red transition-colors"
                >
                  {s}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs text-neutral-500 uppercase tracking-wider mb-6">Contato</p>
            <div className="space-y-3">
              <Link
                href="https://wa.me/5541999284023"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-neutral-400 hover:text-frask-red transition-colors"
              >
                (41) 99928-4023
              </Link>
              <Link
                href="mailto:contato@fraskestruturas.eng.br"
                className="block text-sm text-neutral-400 hover:text-frask-red transition-colors"
              >
                contato@fraskestruturas.eng.br
              </Link>
              <Link
                href="https://www.instagram.com/fraskestruturas/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-neutral-400 hover:text-frask-red transition-colors"
              >
                @fraskestruturas
              </Link>
              <Link
                href="https://maps.google.com/?q=-25.3808,-49.3957"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-neutral-400 hover:text-frask-red transition-colors leading-relaxed"
              >
                Rod. Gumercindo Boza, 14863<br />
                Campo Magro – PR
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-neutral-500">
              © 2025 Frask Estruturas. Todos os direitos reservados.
            </p>

            <p className="text-xs text-neutral-600 uppercase tracking-wider">
              Engenharia certificada · NBR conforme · Curitiba, PR
            </p>

            {/* Developer Credit */}
            <Link
              href="https://www.instagram.com/fegaduolize/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 group"
            >
              <Image
                src="/fegaduolize-logo.png"
                alt="Fegaduolize Dev"
                width={160}
                height={160}
                className="h-11 w-auto object-contain transition-opacity group-hover:opacity-90 md:h-12"
                sizes="160px"
              />
              <div>
                <span className="text-[10px] text-neutral-600 uppercase tracking-wider block">Desenvolvido por</span>
                <span className="text-xs text-neutral-400 font-medium group-hover:text-frask-red transition-colors">Fegaduolize Dev</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
