import { FC } from 'react'
import { Badge, BadgeProps } from './ui/badge'

const Chip: FC<BadgeProps> = ({ children, variant }) => {
  return (
    <Badge className="rounded-[40px]" variant={variant}>
      {children}
    </Badge>
  )
}
export default Chip
