'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MessageSquare, BarChart2, Brain } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const pillars = [
  {
    icon: MessageSquare,
    title: 'Comunicação',
    subtitle: 'Gerencia comunidades com propósito',
    description:
      'Garante que cada interação reflita a identidade da marca. Tom de voz consistente, respostas estratégicas e gestão de comunidade para múltiplas marcas simultaneamente.',
    color: 'text-violet-600',
    bg: 'bg-violet-50',
    border: 'hover:border-violet-300',
    gradient: 'from-violet-50 to-white',
    tags: ['Tom de voz', 'Gestão de Comunidade', 'Social Listening'],
  },
  {
    icon: BarChart2,
    title: 'Dados',
    subtitle: 'Transforma dados em narrativas estratégicas',
    description:
      'Produz relatórios mensais e quinzenais para 3 marcas simultaneamente, adaptados para liderança, time interno e outros times quando necessário. SLA, sentimentação e temas recorrentes traduzidos em insights acionáveis, incluindo OnePagers para situações críticas.',
    color: 'text-indigo-600',
    bg: 'bg-indigo-50',
    border: 'hover:border-indigo-300',
    gradient: 'from-indigo-50 to-white',
    tags: ['Relatórios', 'Sentimentação', 'KPIs'],
  },
  {
    icon: Brain,
    title: 'Inteligência Artificial',
    subtitle: 'Escala operações com inteligência',
    description:
      'Usa IA para multiplicar capacidade — não substituir qualidade. Agentes e prompts de IA generativa que preservam o tom da marca enquanto ganham escala.',
    color: 'text-purple-600',
    bg: 'bg-purple-50',
    border: 'hover:border-purple-300',
    gradient: 'from-purple-50 to-white',
    tags: ['Agentes de IA', 'IA Generativa', 'Prompts'],
  },
]

export default function Differentials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="diferenciais" className="section-padding bg-zinc-50/50">
      <div className="container-width">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-xs font-semibold tracking-widest text-violet-600 uppercase">Diferenciais</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-zinc-900 leading-tight">
            A combinação que <span className="text-violet-700">poucos têm</span>
          </h2>
          <p className="mt-4 text-base text-zinc-500 leading-relaxed">
            Gerencia comunidades com propósito, transforma dados em narrativas estratégicas e usa IA para escalar sem perder o tom humano de cada marca.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map(({ icon: Icon, title, subtitle, description, color, bg, border, gradient, tags }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 32 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              <Card className={`h-full border-2 border-transparent ${border} transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-gradient-to-br ${gradient}`}>
                <CardContent className="p-7 space-y-4 h-full flex flex-col">
                  <div className={`w-12 h-12 rounded-2xl ${bg} flex items-center justify-center`}>
                    <Icon size={24} className={color} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-zinc-900">{title}</h3>
                    <p className={`text-sm font-semibold mt-0.5 ${color}`}>{subtitle}</p>
                  </div>
                  <p className="text-sm text-zinc-600 leading-relaxed flex-1">{description}</p>
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className={`text-xs font-medium px-2.5 py-1 rounded-full ${bg} ${color} border border-current border-opacity-20`}
                      >
                        {tag}
                      </span>
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
