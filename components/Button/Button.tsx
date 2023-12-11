import { twMerge } from 'tailwind-merge'
import Loader from '../Loader/Loader'

type ButtonProps = {
  cId: string
  children: React.ReactNode
  className?: string
  isDisabled?: boolean
  isLoading?: boolean
  purpose?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  type?: 'button' | 'reset' | 'submit'
}

export default function Button({
  children,
  cId,
  className,
  isDisabled,
  isLoading,
  purpose = 'primary',
  size = 'md',
  type = 'button',
}: ButtonProps) {
  return (
    <button
      className={twMerge(
        'relative whitespace-nowrap rounded-lg py-2 transition-all disabled:cursor-not-allowed',
        purpose === 'primary' &&
          'bg-primary-500 text-least-contrast shadow-md hover:bg-primary-500/90 hover:shadow-lg focus:ring-2 focus:ring-primary-800 focus-visible:outline-none active:bg-primary-600 disabled:bg-neutral-300 disabled:shadow-none',
        purpose === 'secondary' &&
          'border-2 border-neutral-500 bg-least-contrast text-neutral-900 hover:bg-neutral-100 disabled:border-neutral-300 disabled:text-neutral-400 hover:disabled:bg-least-contrast',
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
            `absolute bottom-0 left-0 right-0 top-0 m-auto transition-opacity ${
              isLoading ? 'opacity-100' : 'opacity-0'
            }`,
          )}
          size={size}
        />
      )}
      <span
        className={`transition-opacity ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
      >
        {children}
      </span>
    </button>
  )
}
