'use client'

import { useState } from 'react'
import Link from 'next/link'
import SectionBackground from '@/components/section-background'
import GridPattern from '@/components/grid-pattern'
import { siteBackgrounds } from '@/lib/site-backgrounds'

export default function Contato() {
  const [form, setForm] = useState({
    nome: "",
    empresa: "",
    telefone: "",
    email: "",
    tipo: "",
    descricao: "",
  })

  return (
    <section id="contato" className="relative overflow-hidden bg-[#F5F5F0] py-32">
      <SectionBackground {...siteBackgrounds.contato} />
      <GridPattern />
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Left - Info */}
          <div>
            <p className="text-sm font-medium tracking-[0.2em] text-frask-gray uppercase mb-4">
              <span className="text-frask-red">◆</span> Contato
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-neutral-900 leading-tight mb-6">
              Vamos construir{' '}
              <span className="italic text-frask-red">juntos</span>
            </h2>
            <p className="text-lg text-neutral-600 leading-relaxed mb-12">
              Atendemos eventos em Curitiba e região, com capacidade para projetos em todo o Brasil. 
              Fale com nossa equipe e receba uma proposta personalizada.
            </p>

            {/* Contact Info */}
            <div className="space-y-6 mb-12">
              <Link
                href="https://wa.me/5541999284023"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 border border-neutral-300 flex items-center justify-center group-hover:border-[#25D366] transition-colors">
                  <svg className="w-5 h-5 text-[#25D366]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-neutral-500 uppercase tracking-wider mb-1">WhatsApp</p>
                  <p className="text-neutral-900 font-medium">(41) 99928-4023</p>
                </div>
              </Link>

              <Link
                href="mailto:contato@fraskestruturas.eng.br"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 border border-neutral-300 flex items-center justify-center group-hover:border-frask-red transition-colors">
                  <svg className="w-5 h-5 text-frask-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-neutral-500 uppercase tracking-wider mb-1">E-mail</p>
                  <p className="text-neutral-900 font-medium">contato@fraskestruturas.eng.br</p>
                </div>
              </Link>

              <Link
                href="https://www.instagram.com/fraskestruturas/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 border border-neutral-300 flex items-center justify-center group-hover:border-[#C13584] transition-colors">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="url(#ig-gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <defs>
                      <linearGradient id="ig-gradient" x1="0" y1="24" x2="24" y2="0" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#FEDA77" />
                        <stop offset="35%" stopColor="#F58529" />
                        <stop offset="65%" stopColor="#DD2A7B" />
                        <stop offset="100%" stopColor="#8134AF" />
                      </linearGradient>
                    </defs>
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1.5" fill="url(#ig-gradient)" stroke="none" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-neutral-500 uppercase tracking-wider mb-1">Instagram</p>
                  <p className="text-neutral-900 font-medium">@fraskestruturas</p>
                </div>
              </Link>
            </div>

            {/* Map */}
            <div className="border border-neutral-200 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3605.7!2d-49.39567!3d-25.380983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDIyJzUxLjYiUyA0OcKwMjMnNDQuNCJX!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr&q=Rod.+Gumercindo+Boza,+14863,+Campo+Magro,+PR"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Frask Estruturas"
              />
            </div>
            <div className="flex items-center justify-between gap-4 py-4 border-x border-b border-neutral-200 px-4 bg-white">
              <div>
                <p className="text-sm text-neutral-900 font-medium">Rod. Gumercindo Boza, 14863</p>
                <p className="text-sm text-neutral-500">Samambaia, Campo Magro – PR</p>
              </div>
              <Link
                href="https://maps.google.com/?q=-25.3808,-49.3957"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-frask-red hover:bg-frask-red-dark transition-colors"
              >
                Abrir no Maps
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right - Form */}
          <div id="solicitacao" className="scroll-mt-28 bg-white p-10 border border-neutral-200">
            <h3 className="text-xl font-medium text-neutral-900 mb-8">
              Solicite um orçamento
            </h3>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs text-neutral-500 uppercase tracking-wider mb-2">
                    Nome completo *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.nome}
                    onChange={(e) => setForm({ ...form, nome: e.target.value })}
                    className="w-full px-0 py-3 border-0 border-b border-neutral-300 bg-transparent text-neutral-900 focus:border-frask-red focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs text-neutral-500 uppercase tracking-wider mb-2">
                    Empresa
                  </label>
                  <input
                    type="text"
                    value={form.empresa}
                    onChange={(e) => setForm({ ...form, empresa: e.target.value })}
                    className="w-full px-0 py-3 border-0 border-b border-neutral-300 bg-transparent text-neutral-900 focus:border-frask-red focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs text-neutral-500 uppercase tracking-wider mb-2">
                    Telefone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={form.telefone}
                    onChange={(e) => setForm({ ...form, telefone: e.target.value })}
                    className="w-full px-0 py-3 border-0 border-b border-neutral-300 bg-transparent text-neutral-900 focus:border-frask-red focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs text-neutral-500 uppercase tracking-wider mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-0 py-3 border-0 border-b border-neutral-300 bg-transparent text-neutral-900 focus:border-frask-red focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-neutral-500 uppercase tracking-wider mb-2">
                  Tipo de evento
                </label>
                <select
                  value={form.tipo}
                  onChange={(e) => setForm({ ...form, tipo: e.target.value })}
                  className="w-full px-0 py-3 border-0 border-b border-neutral-300 bg-transparent text-neutral-900 focus:border-frask-red focus:outline-none transition-colors cursor-pointer"
                >
                  <option value="">Selecione</option>
                  <option value="festival">Festival / Show</option>
                  <option value="corporativo">Evento Corporativo</option>
                  <option value="esportivo">Esportivo</option>
                  <option value="governamental">Governamental</option>
                  <option value="outro">Outro</option>
                </select>
              </div>

              <div>
                <label className="block text-xs text-neutral-500 uppercase tracking-wider mb-2">
                  Descrição do projeto
                </label>
                <textarea
                  rows={4}
                  value={form.descricao}
                  onChange={(e) => setForm({ ...form, descricao: e.target.value })}
                  className="w-full px-0 py-3 border-0 border-b border-neutral-300 bg-transparent text-neutral-900 focus:border-frask-red focus:outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-frask-red text-white text-sm font-medium tracking-wide hover:bg-frask-red-dark transition-colors"
              >
                Enviar Solicitação
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
