'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const navLinks = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Soluções', href: '#solucoes' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Contato', href: '#contato' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-neutral-900 text-white transition-shadow duration-300 ${
        isScrolled ? 'shadow-lg shadow-black/30' : ''
      }`}
    >
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-frask-red" aria-hidden />

      <nav className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="inline-flex shrink-0 items-center">
            <Image
              src="/frask-logo.jpeg"
              alt="Frask Estruturas"
              width={220}
              height={88}
              className="h-14 w-auto object-contain mix-blend-screen md:h-16"
              priority
              sizes="(max-width: 768px) 180px, 220px"
            />
          </Link>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-neutral-400 hover:text-frask-red transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#solicitacao"
              className="ml-2 px-6 py-2.5 bg-frask-red text-white text-sm font-medium tracking-wide hover:bg-frask-red-dark transition-colors"
            >
              Solicitar Orçamento
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-neutral-400 hover:text-white transition-colors"
            aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isMobileMenuOpen}
          >
            <div className="flex h-5 w-6 flex-col justify-between">
              <span
                className={`h-0.5 w-full bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? 'translate-y-2 rotate-45' : ''
                }`}
              />
              <span
                className={`h-0.5 w-full bg-current transition-opacity duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`h-0.5 w-full bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? '-translate-y-2 -rotate-45' : ''
                }`}
              />
            </div>
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-neutral-800 pb-6 pt-4">
            <p className="mb-4 text-xs uppercase tracking-wider text-neutral-500">Navegação</p>
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="py-2.5 text-sm text-neutral-400 hover:text-frask-red transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="#solicitacao"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 px-6 py-3 bg-frask-red text-center text-sm font-medium tracking-wide text-white hover:bg-frask-red-dark transition-colors"
              >
                Solicitar Orçamento
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
