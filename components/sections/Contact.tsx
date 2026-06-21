'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Linkedin, Mail, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const contactLinks = [
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: '/in/júliadiasdealbuquerque',
    href: 'https://www.linkedin.com/in/j%C3%BAliadiasdealbuquerque/',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    border: 'border-blue-100 hover:border-blue-300',
  },
  {
    icon: Mail,
    label: 'E-mail',
    value: 'juliadiasdealbuquerque@gmail.com',
    href: 'mailto:juliadiasdealbuquerque@gmail.com',
    color: 'text-violet-600',
    bg: 'bg-violet-50',
    border: 'border-violet-100 hover:border-violet-300',
  },
]

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contato" className="section-padding bg-white">
      <div className="container-width">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-12">
            <span className="text-xs font-semibold tracking-widest text-violet-600 uppercase">Contato</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-zinc-900 leading-tight">
              Vamos conversar?
            </h2>
            <p className="mt-4 text-base text-zinc-500 leading-relaxed">
              Estou aberta a novas oportunidades. Se você tem um projeto interessante ou uma vaga que combina com meu perfil, adoraria trocar uma ideia.
            </p>
          </div>

          {/* Contact cards */}
          <div className="space-y-3 mb-8">
            {contactLinks.map(({ icon: Icon, label, value, href, color, bg, border }, i) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -16 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className={`flex items-center gap-4 p-4 rounded-xl border ${border} bg-white hover:shadow-md transition-all duration-200 group`}
              >
                <div className={`p-2.5 rounded-xl ${bg} flex-shrink-0`}>
                  <Icon size={18} className={color} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wide">{label}</p>
                  <p className="text-sm font-medium text-zinc-900 truncate">{value}</p>
                </div>
                <ArrowRight
                  size={16}
                  className="text-zinc-300 group-hover:text-zinc-600 group-hover:translate-x-1 transition-all duration-200 flex-shrink-0"
                />
              </motion.a>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="text-center"
          >
            <Button size="lg" className="group w-full sm:w-auto" asChild>
              <a href="mailto:juliadiasdealbuquerque@gmail.com">
                Vamos conversar
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="mt-24 pt-8 border-t border-zinc-100">
        <p className="text-center text-xs text-zinc-400">
          © {new Date().getFullYear()} Júlia Dias de Albuquerque
        </p>
      </div>
    </section>
  )
}
