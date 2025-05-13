import { FC } from 'react'
import { Badge, BadgeProps } from './ui/badge'

const Chip: FC<BadgeProps> = ({ children, variant }) => {
  return <Badge variant={variant}>{children}</Badge>
}
export default Chip
