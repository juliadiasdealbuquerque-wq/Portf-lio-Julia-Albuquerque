'use client'

import {
  LineChart, Line, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
} from 'recharts'

const volumeData = [
  { mes: 'Jan', interacoes: 1240 },
  { mes: 'Fev', interacoes: 1580 },
  { mes: 'Mar', interacoes: 1320 },
  { mes: 'Abr', interacoes: 1890 },
  { mes: 'Mai', interacoes: 2100 },
  { mes: 'Jun', interacoes: 1760 },
]

const slaData = [
  { periodo: 'Q1', cumprido: 94, meta: 90 },
  { periodo: 'Q2', cumprido: 87, meta: 90 },
  { periodo: 'Q3', cumprido: 96, meta: 90 },
  { periodo: 'Q4', cumprido: 92, meta: 90 },
]

const sentimentData = [
  { name: 'Positivo', value: 62, color: '#7c3aed' },
  { name: 'Neutro', value: 24, color: '#a78bfa' },
  { name: 'Negativo', value: 14, color: '#ddd6fe' },
]

interface CustomTooltipProps {
  active?: boolean
  payload?: Array<{ name: string; value: number; color: string }>
  label?: string
}

function CustomTooltip({ active, payload, label }: CustomTooltipProps) {
  if (!active || !payload?.length) return null
  return (
    <div className="bg-white border border-zinc-200 rounded-xl shadow-lg px-3 py-2">
      <p className="text-xs font-semibold text-zinc-500 mb-1">{label}</p>
      {payload.map((p) => (
        <p key={p.name} className="text-sm font-medium" style={{ color: p.color }}>
          {p.name}: <span className="text-zinc-900">{p.value}{p.name === 'cumprido' || p.name === 'meta' ? '%' : ''}</span>
        </p>
      ))}
    </div>
  )
}

export function VolumeChart() {
  return (
    <ResponsiveContainer width="100%" height={180}>
      <LineChart data={volumeData} margin={{ top: 4, right: 8, left: -20, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#f4f4f5" />
        <XAxis dataKey="mes" tick={{ fontSize: 11, fill: '#71717a' }} axisLine={false} tickLine={false} />
        <YAxis tick={{ fontSize: 11, fill: '#71717a' }} axisLine={false} tickLine={false} />
        <Tooltip content={<CustomTooltip />} />
        <Line
          type="monotone"
          dataKey="interacoes"
          name="Interações"
          stroke="#7c3aed"
          strokeWidth={2.5}
          dot={{ fill: '#7c3aed', strokeWidth: 0, r: 4 }}
          activeDot={{ r: 6, fill: '#7c3aed' }}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}

export function SlaChart() {
  return (
    <ResponsiveContainer width="100%" height={180}>
      <BarChart data={slaData} margin={{ top: 4, right: 8, left: -20, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#f4f4f5" />
        <XAxis dataKey="periodo" tick={{ fontSize: 11, fill: '#71717a' }} axisLine={false} tickLine={false} />
        <YAxis tick={{ fontSize: 11, fill: '#71717a' }} axisLine={false} tickLine={false} domain={[80, 100]} />
        <Tooltip content={<CustomTooltip />} />
        <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '8px' }} />
        <Bar dataKey="cumprido" name="SLA Cumprido %" fill="#7c3aed" radius={[4, 4, 0, 0]} />
        <Bar dataKey="meta" name="Meta %" fill="#ddd6fe" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}

export function SentimentChart() {
  return (
    <ResponsiveContainer width="100%" height={180}>
      <PieChart>
        <Pie
          data={sentimentData}
          cx="50%"
          cy="50%"
          innerRadius={48}
          outerRadius={72}
          paddingAngle={3}
          dataKey="value"
        >
          {sentimentData.map((entry) => (
            <Cell key={entry.name} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip
          formatter={(value: number, name: string) => [`${value}%`, name]}
          contentStyle={{ borderRadius: '12px', border: '1px solid #e4e4e7', fontSize: '12px' }}
        />
        <Legend
          iconType="circle"
          iconSize={8}
          wrapperStyle={{ fontSize: '11px', paddingTop: '8px' }}
        />
      </PieChart>
    </ResponsiveContainer>
  )
}
