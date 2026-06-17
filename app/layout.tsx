import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Júlia Dias — Comunicação, Dados & IA',
  description:
    'Portfólio profissional de Júlia Dias de Albuquerque — Analista de Comunicação com expertise em dados e inteligência artificial.',
  keywords: ['comunicação', 'dados', 'IA', 'marketing', 'analista', 'portfólio'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="min-h-screen bg-white">{children}</body>
    </html>
  )
}
