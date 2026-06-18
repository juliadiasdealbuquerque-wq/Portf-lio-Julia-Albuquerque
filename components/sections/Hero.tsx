'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'

const stats = [
  '+4 anos de experiência',
  'Projetos com IA',
  'Análises estratégicas',
  'Comunicação de marca',
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.1),transparent_70%)]" />
        <div className="absolute top-40 right-0 w-80 h-80 bg-violet-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-64 h-64 bg-indigo-100/30 rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-violet-400 rounded-full opacity-60" />
        <div className="absolute top-1/4 right-1/3 w-1.5 h-1.5 bg-violet-300 rounded-full opacity-40" />
        <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-indigo-400 rounded-full opacity-50" />
      </div>

      <div className="container-width section-padding relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {/* Headline */}
          <motion.h1
            variants={item}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-zinc-900 leading-[1.08] mb-6"
          >
            Comunicação, Dados e IA{' '}
            <span className="gradient-text">para gerar impacto real</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={item}
            className="text-lg md:text-xl text-zinc-500 leading-relaxed max-w-2xl mx-auto mb-10"
          >
            Profissional com experiência em relacionamento com clientes, análise de dados,
            comunicação estratégica e construção de agentes de IA para ganho de escala
            operacional.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-16">
            <Button size="lg" className="w-full sm:w-auto group" asChild>
              <a href="#projetos">
                Ver Projetos
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto group" asChild>
              <a href="/curriculo-julia-dias.html" target="_blank" rel="noopener noreferrer">
                <Download size={16} className="group-hover:scale-110 transition-transform" />
                Ver Currículo
              </a>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={item}
            className="flex flex-wrap justify-center gap-2"
          >
            {stats.map((label) => (
              <span
                key={label}
                className="px-4 py-2 rounded-full bg-white border border-zinc-200/80 text-xs font-medium text-zinc-600"
              >
                {label}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  )
}
