import { twMerge } from 'tailwind-merge'

type ButtonProps = {
  children: React.ReactNode
  purpose?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  type?: 'button' | 'reset' | 'submit'
}

export default function Button({
  children,
  purpose = 'primary',
  size = 'md',
  type = 'button',
}: ButtonProps) {
  return (
    <button
      className={twMerge(
        'rounded-lg py-2 transition-all',
        purpose === 'primary' &&
          'bg-blue-500  text-white shadow-md hover:bg-blue-500/90 hover:shadow-lg focus:ring-2  focus:ring-blue-800 focus-visible:outline-none active:bg-blue-600',
        purpose === 'secondary' &&
          'border-2 border-black text-black  hover:bg-gray-50',
        size === 'sm' && 'px-2  text-xs',
        size === 'md' && 'px-4 text-sm',
        size === 'lg' && 'px-6',
      )}
      type={type}
    >
      {children}
    </button>
  )
}
