'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { Building2, TrendingUp, Users } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

const timeline = [
  {
    icon: Users,
    company: 'Teleperformance',
    period: '2021 – 2023',
    role: 'Expert em Interação',
    desc: 'Inside sales, prospecção ativa, treinamento de novos colaboradores e atendimento humanizado com foco em metas.',
    current: false,
  },
  {
    icon: Building2,
    company: 'Gringo',
    period: '2023',
    role: 'Customer Analyst Jr — CX & Produto',
    desc: 'Atendimento omnicanal, participação em squads, levantamento de insights para produto e onboarding de equipes.',
    current: false,
  },
  {
    icon: TrendingUp,
    company: 'Gringo · Corpay',
    period: '2023 – hoje',
    role: 'Customer Analyst Jr — Mídias Sociais & IA',
    desc: 'Gestão de Gringo e Zapay, dashboards de atendimento, agente de IA para redes sociais e apresentações executivas.',
    current: true,
  },
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
              Da prospecção humanizada na{' '}
              <strong className="text-zinc-900">Teleperformance</strong> ao desenvolvimento de{' '}
              <strong className="text-zinc-900">agentes de IA</strong> na{' '}
              <strong className="text-zinc-900">Gringo · Corpay</strong> — minha trajetória une
              comunicação, experiência do cliente e inteligência analítica em uma visão que vai
              do dado bruto à narrativa estratégica.
            </p>

            {/* Career timeline */}
            <div className="relative pt-2 space-y-0">
              <div className="absolute left-[19px] top-3 bottom-3 w-px bg-gradient-to-b from-zinc-200 via-violet-300 to-violet-600" />
              {timeline.map(({ icon: Icon, company, period, role, desc, current }, i) => (
                <div key={company + period} className="relative flex gap-4 pb-5 last:pb-0">
                  <div className={`relative z-10 flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${current ? 'bg-violet-600' : 'bg-white border-2 border-violet-300'}`}>
                    <Icon size={15} className={current ? 'text-white' : 'text-violet-500'} />
                  </div>
                  <div className="flex-1 pt-1.5">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-sm font-bold text-zinc-900">{company}</span>
                      {current && (
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-violet-100 text-violet-700">atual</span>
                      )}
                      <span className="text-xs text-zinc-400 ml-auto">{period}</span>
                    </div>
                    <p className="text-xs font-semibold text-violet-600 mt-0.5">{role}</p>
                    <p className="text-xs text-zinc-500 leading-relaxed mt-1">{desc}</p>
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
