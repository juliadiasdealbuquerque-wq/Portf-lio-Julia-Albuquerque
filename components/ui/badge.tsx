import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-colors',
  {
    variants: {
      variant: {
        default:
          'bg-violet-100 text-violet-700 border border-violet-200/80',
        secondary:
          'bg-zinc-100 text-zinc-700 border border-zinc-200',
        outline:
          'border border-zinc-200 text-zinc-600',
        success:
          'bg-emerald-50 text-emerald-700 border border-emerald-200',
        destructive:
          'bg-red-50 text-red-700 border border-red-200',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { Badge, badgeVariants }
