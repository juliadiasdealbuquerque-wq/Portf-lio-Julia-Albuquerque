'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { Building2, TrendingUp, Users, Lightbulb } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

const highlights = [
  { icon: Building2, label: 'Gringo · Corpay', desc: 'Empresa atual' },
  { icon: Users, label: 'Atendimento ao cliente', desc: 'Análise e indicadores' },
  { icon: TrendingUp, label: 'Apresentações executivas', desc: 'Para liderança' },
  { icon: Lightbulb, label: 'Projetos de IA', desc: 'Aplicados à operação' },
]

const tags = [
  'Comunicação', 'Análise de Dados', 'IA Aplicada',
  'Experiência do Cliente', 'Melhoria de Processos', 'Storytelling',
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="sobre" className="section-padding bg-zinc-50/50">
      <div className="container-width">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          {/* Left — Photo placeholder + tags */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center gap-6"
          >
            {/* Avatar */}
            <div className="relative">
              <div className="w-52 h-52 rounded-3xl overflow-hidden shadow-2xl shadow-violet-500/20 ring-4 ring-violet-100">
                <Image
                  src="/foto-julia.jpg"
                  alt="Júlia Dias de Albuquerque"
                  width={208}
                  height={208}
                  className="w-full h-full object-cover object-top"
                  priority
                />
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap justify-center gap-2">
              {tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </motion.div>

          {/* Right — Text */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            <div>
              <span className="text-xs font-semibold tracking-widest text-violet-600 uppercase">Sobre mim</span>
              <h2 className="mt-2 text-3xl md:text-4xl font-bold text-zinc-900 leading-tight">
                Onde comunicação encontra{' '}
                <span className="text-violet-700">inteligência de dados</span>
              </h2>
            </div>

            <p className="text-base text-zinc-600 leading-relaxed">
              Atualmente atuo na <strong className="text-zinc-900">Gringo</strong>, empresa do ecossistema{' '}
              <strong className="text-zinc-900">Corpay</strong>, sendo responsável por análises de
              atendimento, acompanhamento de indicadores, construção de apresentações executivas e
              desenvolvimento de projetos de IA aplicados à operação.
            </p>

            <p className="text-base text-zinc-600 leading-relaxed">
              Minha experiência combina <strong className="text-zinc-900">comunicação</strong>,{' '}
              <strong className="text-zinc-900">análise de dados</strong>,{' '}
              <strong className="text-zinc-900">experiência do cliente</strong> e{' '}
              <strong className="text-zinc-900">melhoria contínua de processos</strong> — uma visão
              completa que vai do dado bruto à narrativa estratégica.
            </p>

            {/* Highlights grid */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              {highlights.map(({ icon: Icon, label, desc }) => (
                <div
                  key={label}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white border border-zinc-200/80 hover:border-violet-200 hover:shadow-sm transition-all duration-200"
                >
                  <div className="p-1.5 rounded-lg bg-violet-50 mt-0.5">
                    <Icon size={14} className="text-violet-600" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-zinc-900">{label}</p>
                    <p className="text-xs text-zinc-500 mt-0.5">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
