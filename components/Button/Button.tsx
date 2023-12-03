import { twMerge } from 'tailwind-merge'

type ButtonProps = {
  children: React.ReactNode
  purpose: 'primary' | 'secondary'
  size: 'sm' | 'md' | 'lg'
  type: 'button' | 'reset' | 'submit'
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
        'rounded-lg py-2',
        purpose === 'primary' && 'bg-blue-500 text-white',
        purpose === 'secondary' && 'border-2 border-black text-black',
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
