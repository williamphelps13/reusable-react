import { twMerge } from 'tailwind-merge'
import { iconMap } from './iconMap'

export type IconNames = keyof typeof iconMap

type IconProps = {
  cId: string
  className?: string
  name: IconNames
  purpose?: 'neutral' | 'primary' | 'danger'
  size?: 'sm' | 'md' | 'lg'
}

export default function Icon({
  cId,
  className,
  name,
  purpose,
  size = 'md',
}: IconProps) {
  const IconFromPackage = iconMap[name] || null

  return (
    <IconFromPackage
      className={twMerge(
        purpose && `text-${purpose}-500`,
        !purpose && 'text-current',
        size === 'sm' && 'h-4 w-4',
        size === 'md' && 'h-5 w-5',
        size === 'lg' && 'h-6 w-6',
        className,
      )}
      data-testid={`${cId}-${name}-icon`}
    />
  )
}
