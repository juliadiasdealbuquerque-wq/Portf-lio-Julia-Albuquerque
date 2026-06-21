'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MessageSquare, BarChart2, Brain, Megaphone, Wrench } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const skillCategories = [
  {
    icon: MessageSquare,
    title: 'Comunicação',
    color: 'text-violet-600',
    bg: 'bg-violet-50',
    border: 'border-violet-100',
    skills: ['Escrita para Redes Sociais', 'Storytelling', 'Tom de voz', 'Branding', 'Atendimento Omnicanal'],
    accent: 'bg-violet-600',
  },
  {
    icon: BarChart2,
    title: 'Dados',
    color: 'text-indigo-600',
    bg: 'bg-indigo-50',
    border: 'border-indigo-100',
    skills: ['Excel', 'Google Sheets', 'Google Apresentações', 'KPIs', 'Dashboards'],
    accent: 'bg-indigo-600',
  },
  {
    icon: Brain,
    title: 'Inteligência Artificial',
    color: 'text-purple-600',
    bg: 'bg-purple-50',
    border: 'border-purple-100',
    skills: ['Prompt Engineering', 'GPTs', 'Claude', 'Gemini', 'Agentes de IA'],
    accent: 'bg-purple-600',
  },
  {
    icon: Megaphone,
    title: 'Marketing',
    color: 'text-rose-600',
    bg: 'bg-rose-50',
    border: 'border-rose-100',
    skills: ['Redes Sociais', 'Gestão de Comunidade', 'Social Listening', 'Monitoramento de Mídias'],
    accent: 'bg-rose-600',
  },
  {
    icon: Wrench,
    title: 'Ferramentas & Métodos',
    color: 'text-teal-600',
    bg: 'bg-teal-50',
    border: 'border-teal-100',
    skills: ['Stilingue', 'Blip', 'Notion', 'Lean Seis Sigma WB', 'PDCA'],
    accent: 'bg-teal-600',
  },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="habilidades" className="section-padding bg-zinc-50/50">
      <div className="container-width">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-xs font-semibold tracking-widest text-violet-600 uppercase">Habilidades</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-zinc-900 leading-tight">
            Multidisciplinar por <span className="text-violet-700">natureza</span>
          </h2>
          <p className="mt-4 text-base text-zinc-500 leading-relaxed">
            Competências que se complementam para entregar comunicação com profundidade analítica.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {skillCategories.map(({ icon: Icon, title, color, bg, border, skills, accent }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 32 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <Card className={`h-full hover:shadow-md hover:-translate-y-1 transition-all duration-300 border ${border} bg-white`}>
                <CardContent className="p-6 space-y-4">
                  <div className={`w-10 h-10 rounded-xl ${bg} flex items-center justify-center`}>
                    <Icon size={20} className={color} />
                  </div>
                  <h3 className="font-bold text-zinc-900">{title}</h3>
                  <div className="space-y-2">
                    {skills.map((skill) => (
                      <div key={skill} className="flex items-center gap-2.5">
                        <div className={`w-1.5 h-1.5 rounded-full ${accent} flex-shrink-0`} />
                        <span className="text-sm text-zinc-600">{skill}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
