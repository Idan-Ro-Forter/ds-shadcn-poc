import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex h-[28px] gap-1 rounded-[40px] items-center px-1.5 py-0.5 text-sm tracking-[-0.049px] select-none font-poppins font-normal transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-surface-tertiary text-text-secondary hover:bg-surface-tertiary/80',
        'active-brand':
          'text-text-brand bg-surface-secondary-brand hover:bg-surface-secondary-brand/80',
        'active-dev': 'bg-surface-secondary-dev text-text-dev hover:bg-surface-secondary-dev/80',
        success:
          'bg-surface-secondary-success text-text-success hover:bg-surface-secondary-success/80',
        warning:
          'bg-surface-secondary-warning text-text-warning hover:bg-surface-secondary-warning/80',
        danger: 'bg-surface-secondary-error text-text-error hover:bg-surface-secondary-error/80',
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
