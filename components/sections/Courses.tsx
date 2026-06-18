'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { GraduationCap, CheckCircle2, BookOpen } from 'lucide-react'

const degrees = [
  {
    title: 'MBA em Marketing e Branding',
    institution: 'Descomplica Faculdade Digital',
    year: '2025',
    type: 'Pós-Graduação',
  },
  {
    title: 'Tecnólogo em Marketing',
    institution: 'Descomplica Faculdade Digital',
    year: '2024',
    type: 'Graduação',
  },
]

const courses = [
  { title: 'Engenharia de Prompt', area: 'Inteligência Artificial', year: '2024' },
  { title: 'IA Aplicada ao Marketing', area: 'Inteligência Artificial', year: '2024' },
  { title: 'Lean Seis Sigma — White Belt', area: 'Melhoria Contínua', year: '2022' },
  { title: 'SEO Intermediário', area: 'Marketing', year: '2022' },
  { title: 'Planejamento Harvard', area: 'Estratégia', year: '2022' },
  { title: 'Rapport e Influência', area: 'Relacionamento', year: '2022' },
  { title: 'Escrita Assertiva', area: 'Comunicação', year: '2022' },
  { title: 'Argumentação Persuasiva', area: 'Comunicação', year: '2022' },
  { title: 'Customer Experience', area: 'CX & Atendimento', year: '2021' },
  { title: 'Marketing Digital', area: 'Marketing', year: '2021' },
]

const areaColors: Record<string, string> = {
  'Marketing': 'bg-pink-50 text-pink-700 border-pink-200',
  'CX & Atendimento': 'bg-sky-50 text-sky-700 border-sky-200',
  'Comunicação': 'bg-violet-50 text-violet-700 border-violet-200',
  'Estratégia': 'bg-amber-50 text-amber-700 border-amber-200',
  'Relacionamento': 'bg-emerald-50 text-emerald-700 border-emerald-200',
  'Inteligência Artificial': 'bg-indigo-50 text-indigo-700 border-indigo-200',
  'Melhoria Contínua': 'bg-teal-50 text-teal-700 border-teal-200',
}

const degreeTypeColors: Record<string, string> = {
  'Pós-Graduação': 'bg-violet-100 text-violet-800 border-violet-200',
  'Graduação': 'bg-indigo-50 text-indigo-700 border-indigo-200',
}

export default function Courses() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="cursos" className="section-padding bg-white">
      <div className="container-width">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-xs font-semibold tracking-widest text-violet-600 uppercase">Formação</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-zinc-900 leading-tight">
            Aprendizado <span className="text-violet-700">contínuo</span>
          </h2>
          <p className="mt-4 text-base text-zinc-500 leading-relaxed">
            Investimento constante em desenvolvimento profissional, do marketing à inteligência artificial.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto space-y-12">

          {/* Academic degrees */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <BookOpen size={14} className="text-violet-600" />
              <span className="text-xs font-semibold tracking-widest text-zinc-500 uppercase">Formação Acadêmica</span>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {degrees.map((deg, i) => (
                <motion.div
                  key={deg.title}
                  initial={{ opacity: 0, y: 16 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-br from-violet-50 to-white border border-violet-100 hover:border-violet-300 hover:shadow-sm transition-all duration-200"
                >
                  <div className="p-2 rounded-lg bg-violet-100 flex-shrink-0 mt-0.5">
                    <GraduationCap size={15} className="text-violet-700" />
                  </div>
                  <div>
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${degreeTypeColors[deg.type]}`}>
                      {deg.type}
                    </span>
                    <p className="text-sm font-bold text-zinc-900 mt-1.5 leading-snug">{deg.title}</p>
                    <p className="text-xs text-zinc-500 mt-0.5">{deg.institution} · {deg.year}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Complementary courses */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <CheckCircle2 size={14} className="text-violet-500" />
              <span className="text-xs font-semibold tracking-widest text-zinc-500 uppercase">Cursos Complementares</span>
            </div>
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-violet-300 via-violet-500 to-violet-300" />
              <div className="space-y-3">
                {courses.map((course, i) => (
                  <motion.div
                    key={course.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                    className="relative flex items-start gap-5 pl-14"
                  >
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-white border-2 border-violet-400 flex items-center justify-center">
                      <CheckCircle2 size={10} className="text-violet-500" />
                    </div>
                    <div className="flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3.5 rounded-xl bg-zinc-50 border border-zinc-200/80 hover:border-violet-200 hover:bg-violet-50/30 transition-all duration-200 group">
                      <div className="flex items-center gap-3">
                        <div className="p-1.5 rounded-lg bg-white border border-zinc-200 group-hover:border-violet-200 transition-colors">
                          <GraduationCap size={13} className="text-violet-600" />
                        </div>
                        <span className="text-sm font-semibold text-zinc-900">{course.title}</span>
                      </div>
                      <div className="flex items-center gap-2 pl-9 sm:pl-0">
                        <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${areaColors[course.area] || 'bg-zinc-100 text-zinc-600 border-zinc-200'}`}>
                          {course.area}
                        </span>
                        <span className="text-xs font-medium text-zinc-400">{course.year}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
