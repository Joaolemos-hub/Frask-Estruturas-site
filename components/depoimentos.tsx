'use client'

import { useState } from "react"

const depoimentos = [
  {
    texto: "A Frask se tornou parte essencial dos nossos projetos de eventos — expertise e confiança em cada entrega.",
    autor: "Agência Parceira",
    cargo: "Curitiba",
  },
  {
    texto: "Expertise técnica, pontualidade e total comprometimento com as normas. É o que esperamos de um fornecedor estratégico.",
    autor: "Produtor de Eventos",
    cargo: "Curitiba – PR",
  },
  {
    texto: "Cada projeto tratado com a mesma dedicação e rigor técnico, independente da dimensão. Parceiro de longa data.",
    autor: "Cliente Corporativo",
    cargo: "Paraná",
  },
]

export default function Depoimentos() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-neutral-500 uppercase tracking-widest mb-4">
            Depoimentos
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-neutral-900 text-balance">
            O que nossos clientes dizem
          </h2>
        </div>

        {/* Depoimentos Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {depoimentos.map((depoimento, index) => (
            <div
              key={index}
              className={`
                relative p-8 bg-neutral-50 border-l-4 transition-all duration-300
                ${activeIndex === index 
                  ? 'border-l-neutral-900 bg-neutral-100' 
                  : 'border-l-neutral-200 hover:border-l-neutral-400'
                }
              `}
              onMouseEnter={() => setActiveIndex(index)}
            >
              {/* Quote Icon */}
              <svg 
                className="w-10 h-10 text-neutral-200 mb-6" 
                fill="currentColor" 
                viewBox="0 0 32 32"
              >
                <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z"/>
              </svg>

              {/* Texto */}
              <blockquote className="text-lg text-neutral-700 leading-relaxed mb-8">
                {`"${depoimento.texto}"`}
              </blockquote>

              {/* Autor */}
              <div className="mt-auto">
                <p className="font-medium text-neutral-900">
                  {depoimento.autor}
                </p>
                <p className="text-sm text-neutral-500">
                  {depoimento.cargo}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Indicadores */}
        <div className="flex justify-center gap-2 mt-12 md:hidden">
          {depoimentos.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`
                w-2 h-2 rounded-full transition-all duration-300
                ${activeIndex === index 
                  ? 'bg-neutral-900 w-6' 
                  : 'bg-neutral-300'
                }
              `}
              aria-label={`Ver depoimento ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
