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
    desc: 'Atendimento humanizado via inside sales (inbound), com foco na satisfação e cumprimento de metas, auxílio consultivo na escolha de produtos e treinamento de novos colaboradores.',
    current: false,
  },
  {
    icon: Building2,
    company: 'Gringo',
    period: '2023',
    role: 'Customer Analyst Jr',
    desc: 'Atendimento via chat e e-mail, participação em squads, identificação de melhorias de processo e onboarding de atendimento para outras áreas.',
    current: false,
  },
  {
    icon: TrendingUp,
    company: 'Gringo',
    note: 'Adquirido pela Sem Parar · Corpay em 2025',
    period: '2023 – hoje',
    role: 'Customer Analyst Jr — Mídias Sociais',
    desc: 'Gestão das interações nas redes sociais das marcas Gringo, Zapay e Olho no Carro (comentários, DMs e canais digitais), comunicação empática alinhada ao tom de voz de cada marca, relatórios para liderança e time interno, 4 agentes de IA e framework de resposta para situações críticas.',
    current: true,
  },
]

const tags = [
  'Comunicação', 'Relatórios Estratégicos', 'IA Aplicada',
  'Experiência do Cliente', 'Gestão de Comunidade', 'Storytelling',
  'Análise de Dados', 'Melhoria de Processos',
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
                Da empatia no atendimento{' '}
                <span className="text-violet-700">à IA nas redes sociais</span>
              </h2>
            </div>

            <p className="text-base text-zinc-600 leading-relaxed">
              Comecei no atendimento ao cliente na{' '}
              <strong className="text-zinc-900">Teleperformance</strong>, equilibrando metas e
              empatia, treinando novos colaboradores e mantendo resultados consistentes. No{' '}
              <strong className="text-zinc-900">Gringo</strong>, evolui para a área de
              mídias sociais: hoje gerencio a comunidade de 3 marcas, produzo relatórios para
              liderança e time interno, e desenvolvo{' '}
              <strong className="text-zinc-900">agentes de IA</strong> para escalar a operação
              sem perder o tom humano de cada marca.
            </p>

            {/* Career timeline */}
            <div className="relative pt-2 space-y-0">
              <div className="absolute left-[19px] top-3 bottom-3 w-px bg-gradient-to-b from-zinc-200 via-violet-300 to-violet-600" />
              {timeline.map(({ icon: Icon, company, note, period, role, desc, current }) => (
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
                    {note && <p className="text-[10px] text-zinc-400 italic mt-0.5">{note}</p>}
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
