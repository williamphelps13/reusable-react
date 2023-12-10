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
          'bg-blue-500 text-white shadow-md hover:bg-blue-500/90 hover:shadow-lg focus:ring-2 focus:ring-blue-800 focus-visible:outline-none active:bg-blue-600 disabled:bg-gray-300 disabled:shadow-none',
        purpose === 'secondary' &&
          'border-2 border-gray-500 bg-white text-gray-900 hover:bg-gray-100 disabled:border-gray-300 disabled:text-gray-400 hover:disabled:bg-white',
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
