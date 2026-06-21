'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Bot, AlertTriangle, CheckCircle2,
  LayoutTemplate, Users, BarChart3,
  FileText, Gauge, SmilePlus, Cloud, Share2, Sparkles,
  MessageCircle, ThumbsUp, HelpCircle, Frown, ShieldAlert, ArrowRight,
  Instagram, BookOpen, Youtube,
} from 'lucide-react'
import { Card } from '@/components/ui/card'

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

const agentsList = [
  {
    icon: Instagram,
    name: 'Redes Sociais — Gringo',
    desc: 'Posts próprios, influenciadores e seguidores',
    color: 'bg-violet-50 border-violet-100',
    labelColor: 'text-violet-700',
    iconBg: 'bg-violet-100',
    iconColor: 'text-violet-600',
  },
  {
    icon: Instagram,
    name: 'Redes Sociais — Zapay',
    desc: 'Posts próprios, influenciadores e seguidores',
    color: 'bg-indigo-50 border-indigo-100',
    labelColor: 'text-indigo-700',
    iconBg: 'bg-indigo-100',
    iconColor: 'text-indigo-600',
  },
  {
    icon: BookOpen,
    name: 'Blog Gringo — Fóruns',
    desc: 'Responde dúvidas sobre transferência, vistoria e documentação veicular com busca na Web em tempo real',
    color: 'bg-blue-50 border-blue-100',
    labelColor: 'text-blue-700',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
  },
  {
    icon: Youtube,
    name: 'YouTube — Gringo & Olho no Carro',
    desc: 'Dois canais, dois tons: responde comentários técnicos adaptando a linguagem a cada marca',
    color: 'bg-teal-50 border-teal-100',
    labelColor: 'text-teal-700',
    iconBg: 'bg-teal-100',
    iconColor: 'text-teal-600',
  },
]

const challenges = [
  'Respostas engessadas e repetitivas nos comentários e fóruns',
  'Tom de voz inconsistente entre marcas e canais distintos',
  'Dúvidas técnicas sobre veículos exigindo informações atualizadas',
  'Rotina sobrecarregada sem escala para cobrir redes sociais, blog e YouTube',
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
  { n: '01', label: 'Definição do Objetivo',   desc: 'Escopo, papel do agente e o que a IA deve e não deve fazer' },
  { n: '02', label: 'Definição da Persona',     desc: 'Voz em 1ª pessoa, personalidade baseada no Brand Book da marca' },
  { n: '03', label: 'Criação das Regras',       desc: 'Tom, linguagem, emojis obrigatórios e temas sensíveis' },
  { n: '04', label: 'Construção dos Cenários',  desc: 'Anfitrião (Gringo), Convidado (influenciador), Intermediário (parceiro)' },
  { n: '05', label: 'Uso de Exemplos Reais',    desc: 'Referências de tom, tamanho e criatividade como treino comportamental' },
  { n: '06', label: 'Configuração de Segurança',desc: 'Bloqueio de termos proibidos e proteção de dados internos' },
  { n: '07', label: 'Testes e Refinos',         desc: 'Ajustes contínuos de tom, emoji e naturalidade com casos reais' },
]

function AIAgentProject() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <div ref={ref} className="grid lg:grid-cols-2 gap-10 items-start">
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
          <h3 className="text-xl font-bold text-zinc-900">Agente de IA para Redes Sociais</h3>
        </div>

        <p className="text-zinc-600 leading-relaxed text-sm">
          Arquitetura e configuração de <strong className="text-zinc-800">4 agentes de IA especializados</strong>{' '}
          para cobrir os principais canais de comunicação das marcas Gringo e Zapay — redes sociais,
          fóruns do blog e YouTube. Cada agente foi treinado com Brandbook, exemplos reais de interações
          e, quando necessário, busca na Web ativada para dúvidas técnicas sobre veículos.
        </p>

        <div className="space-y-2">
          <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wide">Agentes criados</p>
          {agentsList.map(({ icon: Icon, name, desc, color, labelColor, iconBg, iconColor }) => (
            <div key={name} className={`flex items-start gap-2.5 p-3 rounded-xl border ${color}`}>
              <div className={`p-1.5 rounded-lg ${iconBg} flex-shrink-0 mt-0.5`}>
                <Icon size={12} className={iconColor} />
              </div>
              <div>
                <p className={`text-xs font-bold ${labelColor}`}>{name}</p>
                <p className={`text-[11px] ${labelColor} opacity-70 mt-0.5 leading-relaxed`}>{desc}</p>
              </div>
            </div>
          ))}
        </div>

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

// ─── PROJECT 2: RELATÓRIOS E APRESENTAÇÕES ──────────────────────────────────

const reportSections = [
  { icon: Gauge,     label: 'SLA por Canal',        desc: 'Tempo médio de resposta por plataforma vs. meta' },
  { icon: BarChart3, label: 'Volume de Interações', desc: 'Total e evolução mensal por tipo e canal' },
  { icon: SmilePlus, label: 'Sentimentação',        desc: 'Classificação positivo / neutro / negativo com NPS' },
  { icon: FileText,  label: 'Principais Assuntos',  desc: 'Temas recorrentes e variações em relação ao mês anterior' },
  { icon: Share2,    label: 'Análise de Parceiras', desc: 'Engajamento, sentimento e comentários em posts de co-marketing' },
  { icon: Cloud,     label: 'Nuvem de Palavras',    desc: 'Termos mais frequentes e destaque de padrão do mês' },
]

const audiences = [
  {
    label: 'Stakeholders de Marketing',
    focus: 'Foco estratégico',
    color: 'bg-violet-50 border-violet-100',
    labelColor: 'text-violet-700',
    dotColor: 'bg-violet-400',
    items: ['NPS e sentimentação consolidada', 'Tendências e variações vs. período anterior', 'Posts de parceiras com análise de sentimento', 'Insight principal do mês'],
  },
  {
    label: 'Time Interno',
    focus: 'Múltiplas frentes',
    color: 'bg-indigo-50 border-indigo-100',
    labelColor: 'text-indigo-700',
    dotColor: 'bg-indigo-400',
    items: ['SLA e volumes detalhados por canal', 'Palavras e temas recorrentes por categoria', 'Breakdown quinzenal e mensal', 'Leitura unificada para todas as frentes de atendimento'],
  },
]

function PresentationsProject() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <div ref={ref} className="grid lg:grid-cols-2 gap-10 items-start">
      <motion.div
        initial={{ opacity: 0, x: -24 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="space-y-5"
      >
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-rose-100">
            <LayoutTemplate size={22} className="text-rose-600" />
          </div>
          <h3 className="text-xl font-bold text-zinc-900">Relatórios e Apresentações de Mídias</h3>
        </div>

        <p className="text-zinc-600 leading-relaxed text-sm">
          Produção de relatórios mensais e quinzenais de mídias sociais para{' '}
          <strong className="text-zinc-800">3 marcas simultaneamente</strong>, adaptados para dois
          públicos distintos: stakeholders de Marketing e o time interno completo — que reúne
          múltiplas frentes de atendimento. Cada relatório transforma dados operacionais em
          narrativas visuais claras e acionáveis.
        </p>

        <div className="space-y-3">
          <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wide flex items-center gap-1.5">
            <Users size={12} /> Públicos atendidos
          </p>
          {audiences.map(({ label, focus, color, labelColor, dotColor, items }) => (
            <div key={label} className={`p-4 rounded-xl border ${color}`}>
              <div className="flex items-center gap-2 mb-2">
                <p className={`text-xs font-bold ${labelColor}`}>{label}</p>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${labelColor} bg-white/70 font-medium`}>{focus}</span>
              </div>
              <ul className="space-y-1">
                {items.map((item) => (
                  <li key={item} className={`text-xs ${labelColor} opacity-80 flex items-start gap-1.5`}>
                    <span className={`w-1 h-1 rounded-full mt-1.5 flex-shrink-0 ${dotColor}`} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 24 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      >
        <Card className="p-5 bg-gradient-to-br from-zinc-50 to-white">
          <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wide mb-4 text-center">
            Anatomia do relatório mensal
          </p>
          <div className="grid grid-cols-2 gap-2.5">
            {reportSections.map(({ icon: Icon, label, desc }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.35, delay: 0.2 + i * 0.07 }}
                className="p-3 rounded-xl border border-zinc-100 bg-white hover:border-rose-200 hover:bg-rose-50/30 transition-colors group"
              >
                <div className="flex items-center gap-2 mb-1">
                  <div className="p-1 rounded-md bg-rose-50 group-hover:bg-rose-100 transition-colors">
                    <Icon size={12} className="text-rose-500" />
                  </div>
                  <p className="text-xs font-bold text-zinc-800 leading-tight">{label}</p>
                </div>
                <p className="text-[11px] text-zinc-500 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-4 p-3 rounded-lg bg-gradient-to-r from-rose-500 to-rose-600 flex items-start gap-2.5">
            <Sparkles size={14} className="text-white/90 flex-shrink-0 mt-0.5" />
            <p className="text-[11px] text-white/90 leading-relaxed">
              Cada seção inclui um <strong className="text-white">Insight Principal</strong> — uma conclusão estratégica derivada dos dados, não apenas a reprodução dos números.
            </p>
          </div>
        </Card>
      </motion.div>
    </div>
  )
}

// ─── PROJECT 3: ESTRATÉGIA DE RESPOSTA ──────────────────────────────────────

const responseFramework = [
  {
    icon: ThumbsUp,
    type: 'Positiva',
    typeColor: 'text-emerald-700',
    typeBg: 'bg-emerald-50 border-emerald-200',
    iconColor: 'text-emerald-500',
    iconBg: 'bg-emerald-100',
    action: 'Engajamento criativo alinhado ao tom da marca',
    actionColor: 'bg-emerald-50 text-emerald-700',
  },
  {
    icon: HelpCircle,
    type: 'Dúvida',
    typeColor: 'text-blue-700',
    typeBg: 'bg-blue-50 border-blue-200',
    iconColor: 'text-blue-500',
    iconBg: 'bg-blue-100',
    action: 'Informação clara + direcionamento para o canal certo',
    actionColor: 'bg-blue-50 text-blue-700',
  },
  {
    icon: Frown,
    type: 'Reclamação',
    typeColor: 'text-amber-700',
    typeBg: 'bg-amber-50 border-amber-200',
    iconColor: 'text-amber-500',
    iconBg: 'bg-amber-100',
    action: 'Empatia + resolução ou escalada interna',
    actionColor: 'bg-amber-50 text-amber-700',
  },
  {
    icon: ShieldAlert,
    type: 'Sensível / Crise',
    typeColor: 'text-red-700',
    typeBg: 'bg-red-50 border-red-200',
    iconColor: 'text-red-500',
    iconBg: 'bg-red-100',
    action: 'Protocolo específico + acionamento imediato',
    actionColor: 'bg-red-50 text-red-700',
  },
]

const responseStructured = [
  'Critérios de triagem para cada tipo de interação',
  'SLA diferenciado por canal e urgência',
  'Tom de voz adaptado ao contexto — sem perder a identidade da marca',
  'Regras de escalada para situações sensíveis',
  'Padronização replicável nas 3 marcas',
]

function ResponseStrategyProject() {
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
          <div className="p-2.5 rounded-xl bg-teal-100">
            <MessageCircle size={22} className="text-teal-600" />
          </div>
          <h3 className="text-xl font-bold text-zinc-900">Estratégia de Resposta e Gestão de Comunidade</h3>
        </div>

        <p className="text-zinc-600 leading-relaxed text-sm">
          Estruturação do framework de como responder em diferentes situações nas{' '}
          <strong className="text-zinc-800">3 marcas</strong> — definindo não só o que responder,
          mas quando, como e quem acionar. O objetivo foi garantir consistência e agilidade
          sem abrir mão do tom humano de cada marca.
        </p>

        <div className="p-4 rounded-xl bg-red-50/60 border border-red-100">
          <p className="text-xs font-semibold text-red-700 mb-2 flex items-center gap-1.5">
            <AlertTriangle size={12} /> Desafio
          </p>
          <ul className="space-y-1.5">
            {[
              '3 marcas com identidades e tons distintos',
              'Múltiplos canais com volumes e urgências diferentes',
              'Time que precisava de critérios claros para agir com autonomia',
            ].map((c) => (
              <li key={c} className="text-sm text-red-700/80 flex items-start gap-2">
                <span className="w-1 h-1 bg-red-400 rounded-full flex-shrink-0 mt-1.5" />
                {c}
              </li>
            ))}
          </ul>
        </div>

        <div className="p-4 rounded-xl bg-teal-50/60 border border-teal-100">
          <p className="text-xs font-semibold text-teal-700 mb-3">O que foi estruturado</p>
          <ul className="space-y-1.5">
            {responseStructured.map((item) => (
              <li key={item} className="text-xs text-teal-700/80 flex items-start gap-1.5">
                <CheckCircle2 size={11} className="text-teal-500 flex-shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* Right — Decision flow */}
      <motion.div
        initial={{ opacity: 0, x: 24 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      >
        <Card className="p-5 bg-gradient-to-br from-zinc-50 to-white">
          <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wide mb-5 text-center">
            Framework de triagem
          </p>

          {/* Root node */}
          <div className="flex justify-center mb-4">
            <div className="px-4 py-2 rounded-full bg-teal-600 text-white text-xs font-bold shadow-sm shadow-teal-300 flex items-center gap-2">
              <MessageCircle size={12} />
              Interação recebida
            </div>
          </div>

          {/* Connector */}
          <div className="flex justify-center mb-1">
            <div className="w-px h-4 bg-teal-300" />
          </div>

          {/* Branches */}
          <div className="relative space-y-2.5">
            <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-teal-300 to-teal-100" />
            {responseFramework.map(({ icon: Icon, type, typeColor, typeBg, iconColor, iconBg, action, actionColor }, i) => (
              <motion.div
                key={type}
                initial={{ opacity: 0, x: 16 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.35, delay: 0.3 + i * 0.08 }}
                className="relative flex items-center gap-2.5 pl-10"
              >
                {/* dot on the line */}
                <div className="absolute left-[17px] w-2.5 h-2.5 rounded-full bg-white border-2 border-teal-400" />

                {/* type badge */}
                <div className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border ${typeBg} flex-shrink-0 min-w-[100px]`}>
                  <div className={`p-0.5 rounded ${iconBg}`}>
                    <Icon size={11} className={iconColor} />
                  </div>
                  <span className={`text-[11px] font-bold ${typeColor}`}>{type}</span>
                </div>

                <ArrowRight size={12} className="text-zinc-300 flex-shrink-0" />

                {/* action */}
                <div className={`flex-1 px-2.5 py-1.5 rounded-lg text-[11px] font-medium ${actionColor} leading-tight`}>
                  {action}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-5 p-3 rounded-lg bg-teal-600 flex items-start gap-2.5">
            <CheckCircle2 size={14} className="text-white/90 flex-shrink-0 mt-0.5" />
            <p className="text-[11px] text-white/90 leading-relaxed">
              O framework foi desenhado para ser <strong className="text-white">replicável entre as 3 marcas</strong>, com adaptações de tom — mantendo o mesmo critério de decisão em qualquer canal.
            </p>
          </div>
        </Card>
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
          description="Projetos reais desenvolvidos no Gringo, combinando comunicação, dados e inteligência artificial."
        />

        <div className="space-y-24">
          <AIAgentProject />
          <div className="border-t border-zinc-100 pt-24">
            <PresentationsProject />
          </div>
          <div className="border-t border-zinc-100 pt-24">
            <ResponseStrategyProject />
          </div>
        </div>
      </div>
    </section>
  )
}
