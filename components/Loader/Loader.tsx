import { twMerge } from 'tailwind-merge'

type LoaderProps = {
  cId: string
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export default function Loader({ cId, className, size = 'md' }: LoaderProps) {
  return (
    <div
      aria-label={`${cId} loading`}
      className={twMerge(
        'inline-block animate-spin rounded-full border-2 border-solid border-current border-x-transparent motion-reduce:animate-[spin_1.5s_linear_infinite]',
        size === 'sm' && 'h-4 w-4',
        size === 'md' && 'h-5 w-5',
        size === 'lg' && 'h-6 w-6',
        className,
      )}
      data-testid={`${cId}-loader`}
      role="status"
    ></div>
  )
}
