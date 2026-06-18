'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Bot, AlertTriangle, CheckCircle2,
  Database, TrendingUp, FileBarChart, Lightbulb, Target,
  MessageSquare,
} from 'lucide-react'
import { Card } from '@/components/ui/card'
import { VolumeChart, SlaChart, SentimentChart } from '@/components/charts/DashboardChart'

function SectionHeader({ tag, title, description }: { tag: string; title: React.ReactNode; description: string }) {
  return (
    <div className="text-center max-w-2xl mx-auto mb-16">
      <span className="text-xs font-semibold tracking-widest text-violet-600 uppercase">{tag}</span>
      <h2 className="mt-2 text-3xl md:text-4xl font-bold text-zinc-900 leading-tight">{title}</h2>
      <p className="mt-4 text-base text-zinc-500 leading-relaxed">{description}</p>
    </div>
  )
}

// ─── PROJECT 1: AI AGENT ────────────────────────────────────────────────────

const challenges = [
  'Respostas engessadas e repetitivas nos comentários',
  'Tom de voz inconsistente entre marcas e parceiros',
  'Rotina operacional sobrecarregada sem escala',
]

const results = [
  'Mais criatividade nas respostas',
  'Redução de respostas repetitivas',
  'Consistência no tom de voz da marca',
  'Apoio operacional para o time',
  'Respostas mais rápidas e personalizadas',
  'Escalabilidade sem perder humanização',
]

const buildSteps = [
  { n: '01', label: 'Definição do Objetivo', desc: 'Escopo, papel do agente e o que a IA deve e não deve fazer' },
  { n: '02', label: 'Definição da Persona', desc: 'Voz em 1ª pessoa, personalidade baseada no Brand Book da marca' },
  { n: '03', label: 'Criação das Regras', desc: 'Tom, linguagem, emojis obrigatórios e temas sensíveis' },
  { n: '04', label: 'Construção dos Cenários', desc: 'Anfitrião (Gringo), Convidado (influenciador), Intermediário (parceiro)' },
  { n: '05', label: 'Uso de Exemplos Reais', desc: 'Referências de tom, tamanho e criatividade como treino comportamental' },
  { n: '06', label: 'Configuração de Segurança', desc: 'Bloqueio de termos proibidos e proteção de dados internos' },
  { n: '07', label: 'Testes e Refinos', desc: 'Ajustes contínuos de tom, emoji e naturalidade com casos reais' },
]

function AIAgentProject() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <div ref={ref} className="grid lg:grid-cols-2 gap-10 items-start">
      {/* Left — Info */}
      <motion.div
        initial={{ opacity: 0, x: -24 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="space-y-5"
      >
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-violet-100">
            <Bot size={22} className="text-violet-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-zinc-900">Agente GPT para Redes Sociais</h3>
          </div>
        </div>

        <p className="text-zinc-600 leading-relaxed text-sm">
          Desenvolvimento de um agente de IA para gerar respostas <strong className="text-zinc-800">criativas, humanizadas e alinhadas ao tom de voz</strong> das marcas Gringo e Zapay — em posts próprios, de influenciadores parceiros e de seguidores. O agente foi arquitetado do zero com metodologia estruturada de 7 etapas.
        </p>

        {/* Challenges */}
        <div className="p-4 rounded-xl bg-red-50/60 border border-red-100">
          <p className="text-xs font-semibold text-red-700 mb-2 flex items-center gap-1.5">
            <AlertTriangle size={12} /> Problema
          </p>
          <ul className="space-y-1.5">
            {challenges.map((c) => (
              <li key={c} className="text-sm text-red-700/80 flex items-start gap-2">
                <span className="w-1 h-1 bg-red-400 rounded-full flex-shrink-0 mt-1.5" />
                {c}
              </li>
            ))}
          </ul>
        </div>

        {/* Results — 2 colunas */}
        <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-100">
          <p className="text-xs font-semibold text-emerald-700 mb-3 flex items-center gap-1.5">
            <CheckCircle2 size={12} /> Impactos e ganhos
          </p>
          <div className="grid grid-cols-2 gap-x-4 gap-y-1.5">
            {results.map((r) => (
              <div key={r} className="text-xs text-emerald-700/80 flex items-start gap-1.5">
                <span className="w-1 h-1 bg-emerald-400 rounded-full flex-shrink-0 mt-1" />
                {r}
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Right — 7-step methodology */}
      <motion.div
        initial={{ opacity: 0, x: 24 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      >
        <Card className="p-5 bg-gradient-to-br from-zinc-50 to-white">
          <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wide mb-4 text-center">Como o agente foi construído</p>
          <div className="relative">
            <div className="absolute left-[18px] top-0 bottom-0 w-px bg-gradient-to-b from-violet-200 via-violet-400 to-violet-600" />
            <div className="space-y-2">
              {buildSteps.map(({ n, label, desc }, i) => (
                <motion.div
                  key={n}
                  initial={{ opacity: 0, x: 12 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.35, delay: 0.2 + i * 0.07 }}
                  className="relative flex items-start gap-3 pl-10"
                >
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-violet-600 flex items-center justify-center flex-shrink-0 shadow-sm shadow-violet-300">
                    <span className="text-[10px] font-bold text-white leading-none">{n}</span>
                  </div>
                  <div className={`flex-1 p-2.5 rounded-lg border ${i === buildSteps.length - 1 ? 'bg-violet-50 border-violet-200' : 'bg-white border-zinc-200'}`}>
                    <p className="text-xs font-bold text-zinc-900">{label}</p>
                    <p className="text-xs text-zinc-500 mt-0.5 leading-relaxed">{desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="mt-4 p-3 rounded-lg bg-violet-600 text-center">
            <p className="text-[11px] text-white/90 italic">&ldquo;Bons agentes não nascem prontos — eles são refinados constantemente.&rdquo;</p>
          </div>
        </Card>
      </motion.div>
    </div>
  )
}

// ─── PROJECT 2: DASHBOARD ───────────────────────────────────────────────────

const indicators = [
  { label: 'Volume de interações', icon: TrendingUp },
  { label: 'SLA (cumprimento)', icon: Target },
  { label: 'Sentimentação', icon: MessageSquare },
  { label: 'Temas recorrentes', icon: FileBarChart },
]

function DashboardProject() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <div ref={ref} className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="grid lg:grid-cols-3 gap-6 items-start"
      >
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-indigo-100">
              <FileBarChart size={22} className="text-indigo-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-zinc-900">Dashboard de Atendimento e Mídias</h3>
            </div>
          </div>
          <p className="text-zinc-600 leading-relaxed text-sm">
            Estruturação de análises quinzenais e mensais para acompanhamento de indicadores estratégicos de atendimento.
          </p>
          <div className="space-y-2">
            <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wide">Indicadores monitorados</p>
            {indicators.map(({ label, icon: Icon }) => (
              <div key={label} className="flex items-center gap-2 text-sm text-zinc-700">
                <Icon size={13} className="text-violet-500 flex-shrink-0" />
                {label}
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Card className="p-4">
            <p className="text-xs font-semibold text-zinc-600 mb-3">Volume de interações</p>
            <VolumeChart />
          </Card>
          <Card className="p-4">
            <p className="text-xs font-semibold text-zinc-600 mb-3">SLA trimestral vs meta</p>
            <SlaChart />
          </Card>
          <Card className="p-4 sm:col-span-1">
            <p className="text-xs font-semibold text-zinc-600 mb-3">Sentimentação de interações</p>
            <SentimentChart />
          </Card>
          <Card className="p-4 flex flex-col justify-between">
            <p className="text-xs font-semibold text-zinc-600 mb-3">Tendências do período</p>
            <div className="space-y-2.5 flex-1">
              {['Dúvidas sobre documentação', 'Atualização de cadastro', 'Suporte técnico', 'Cancelamentos'].map((tema, i) => (
                <div key={tema} className="flex items-center gap-2">
                  <div className="text-xs text-zinc-400 w-4 font-medium">{i + 1}</div>
                  <div className="flex-1 h-1.5 bg-zinc-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-violet-500 rounded-full"
                      style={{ width: `${80 - i * 15}%` }}
                    />
                  </div>
                  <span className="text-xs text-zinc-600 flex-1">{tema}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </motion.div>
    </div>
  )
}

// ─── PROJECT 3: DATA → INSIGHTS ─────────────────────────────────────────────

const processSteps = [
  { icon: Database, label: 'Dados', desc: 'Coleta e estruturação de dados brutos de atendimento e canais', color: 'bg-zinc-50 border-zinc-200 text-zinc-700' },
  { icon: TrendingUp, label: 'Análise', desc: 'Identificação de padrões, variações e correlações temporais', color: 'bg-violet-50 border-violet-200 text-violet-700' },
  { icon: Lightbulb, label: 'Hipóteses', desc: 'Formulação de hipóteses sobre causas e oportunidades', color: 'bg-indigo-50 border-indigo-200 text-indigo-700' },
  { icon: Target, label: 'Insights', desc: 'Extração de conclusões acionáveis e priorizadas', color: 'bg-purple-50 border-purple-200 text-purple-700' },
  { icon: CheckCircle2, label: 'Recomendações', desc: 'Apresentação à liderança com plano de ação claro', color: 'bg-violet-600 border-violet-700 text-white' },
]

function InsightsProject() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <div ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="grid lg:grid-cols-2 gap-10 items-center"
      >
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-purple-100">
              <Lightbulb size={22} className="text-purple-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-zinc-900">Transformação de Dados em Insights</h3>
            </div>
          </div>
          <p className="text-zinc-600 leading-relaxed">
            Criação de apresentações executivas para liderança, transformando dados brutos
            em narrativas estratégicas com recomendações concretas e acionáveis.
          </p>
          <div className="p-4 rounded-xl bg-violet-50 border border-violet-100">
            <p className="text-sm font-semibold text-violet-800 mb-1">Impacto gerado</p>
            <p className="text-sm text-violet-700/80">
              Relatórios que suportaram decisões estratégicas da liderança, com redução
              do tempo de análise e aumento da clareza nas tomadas de decisão.
            </p>
          </div>
        </div>

        {/* Process flow — vertical */}
        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-zinc-200 via-violet-300 to-violet-600" />
          <div className="space-y-3">
            {processSteps.map(({ icon: Icon, label, desc, color }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className={`relative flex items-start gap-4 p-4 rounded-xl border ${color} ml-3`}
              >
                <div className="absolute -left-[22px] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white border-2 border-violet-400 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-violet-500 rounded-full" />
                </div>
                <div className={`p-1.5 rounded-lg ${i === processSteps.length - 1 ? 'bg-white/20' : 'bg-white'} flex-shrink-0`}>
                  <Icon size={14} className={i === processSteps.length - 1 ? 'text-white' : 'text-violet-600'} />
                </div>
                <div>
                  <p className={`text-sm font-semibold ${i === processSteps.length - 1 ? 'text-white' : ''}`}>{label}</p>
                  <p className={`text-xs mt-0.5 leading-relaxed ${i === processSteps.length - 1 ? 'text-white/80' : 'text-zinc-500'}`}>{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

// ─── MAIN EXPORT ────────────────────────────────────────────────────────────

export default function Projects() {
  return (
    <section id="projetos" className="section-padding bg-white">
      <div className="container-width space-y-24">
        <SectionHeader
          tag="Projetos"
          title={<>Resultados que provam <span className="text-violet-700">capacidade</span></>}
          description="Projetos reais desenvolvidos na Gringo · Corpay, combinando comunicação, dados e inteligência artificial."
        />

        <div className="space-y-24">
          <AIAgentProject />
          <div className="border-t border-zinc-100 pt-24">
            <DashboardProject />
          </div>
          <div className="border-t border-zinc-100 pt-24">
            <InsightsProject />
          </div>
        </div>
      </div>
    </section>
  )
}
