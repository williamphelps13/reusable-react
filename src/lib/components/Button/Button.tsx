import { twMerge } from 'tailwind-merge'

import Icon, { type IconNames } from '../Icon/Icon'
import Loader from '../Loader/Loader'

type ButtonProps = {
  children: React.ReactNode
  cId: string
  className?: string
  iconName?: IconNames
  iconPlacement?: 'left' | 'right'
  isDisabled?: boolean
  isLoading?: boolean
  purpose?: 'primary' | 'secondary' | 'tertiary' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  type?: 'button' | 'reset' | 'submit'
}

export default function Button({
  children,
  cId,
  className,
  iconName,
  iconPlacement = 'left',
  isDisabled,
  isLoading,
  purpose = 'primary',
  size = 'md',
  type = 'button',
}: ButtonProps) {
  return (
    <button
      className={twMerge(
        'relative whitespace-nowrap rounded-lg py-2 transition focus:ring-2 focus-visible:outline-none disabled:cursor-not-allowed',
        (purpose === 'primary' || purpose === 'danger') &&
          `bg-${purpose}-500 text-least-contrast shadow-md hover:bg-${purpose}-500/90 hover:shadow-lg focus:ring-${purpose}-800 active:bg-${purpose}-600 disabled:bg-neutral-300 disabled:shadow-none`,
        purpose === 'secondary' &&
          'border-2 border-neutral-500 bg-least-contrast text-neutral-900 hover:bg-neutral-100 focus:ring-neutral-800 active:border-neutral-900 disabled:border-neutral-300 disabled:text-neutral-400 hover:disabled:bg-least-contrast',
        purpose === 'tertiary' &&
          '!p-1 text-neutral-900 hover:text-neutral-600 focus:ring-neutral-800 active:text-neutral-900 disabled:text-neutral-400',
        size === 'sm' && 'px-2 text-xs',
        size === 'md' && 'px-4 text-sm',
        size === 'lg' && 'px-6',
        className,
      )}
      data-testid={`${cId}-button`}
      disabled={isDisabled || isLoading}
      type={type}
    >
      {isLoading && (
        <Loader
          cId={`${cId}-button`}
          className={twMerge(
            `absolute bottom-0 left-0 right-0 top-0 m-auto ${
              isLoading ? 'opacity-100' : 'opacity-0'
            }`,
          )}
          size={size}
        />
      )}
      <span
        className={`flex gap-1 transition-opacity ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
      >
        {iconName && (
          <Icon
            cId={`${cId}-button`}
            className={iconPlacement === 'left' ? 'order-0' : 'order-1'}
            name={iconName}
            size={size}
          />
        )}
        {children}
      </span>
    </button>
  )
}
