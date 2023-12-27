import { twMerge } from 'tailwind-merge'

import IconButton from '../IconButton/IconButton'

type BadgeProps = {
  children: React.ReactNode
  cId: string
  className?: string
  color?: 'neutral' | 'primary' | 'secondary' | 'tertiary'
  iconButtonAriaLabel?: string
  iconButtonType?: 'remove' | 'open' | undefined
}

export default function Badge({
  children,
  cId,
  className,
  color = 'neutral',
  iconButtonAriaLabel,
  iconButtonType,
}: BadgeProps) {
  return (
    <span
      className={twMerge(
        `bg-${color}-50 text-${color}-600 ring-${color}-500/10 inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs ring-1 ring-inset`,
        className,
      )}
      data-testid={`${cId}-badge`}
    >
      <span className="max-w-[8rem] truncate">{children}</span>
      {iconButtonType && (
        <IconButton
          ariaLabel={iconButtonAriaLabel}
          cId={`${cId}-badge`}
          className={`p-0 hover:bg-${color}-500/20 focus:ring-1 focus:ring-${color}-600 active:text-${color}-700`}
          name={
            iconButtonType === 'remove' ? 'x-mark' : 'arrow-top-right-on-square'
          }
          size="sm"
        />
      )}
    </span>
  )
}
