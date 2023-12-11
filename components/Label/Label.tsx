import { twMerge } from 'tailwind-merge'

type LabelProps = {
  cId: string
  children?: React.ReactNode
  isDisabled?: boolean
  isOptional?: boolean
}

export default function Label({
  children,
  cId,
  isDisabled,
  isOptional,
}: LabelProps) {
  return (
    <div className="flex w-full items-center justify-between">
      <label
        className={twMerge(
          'text-sm text-neutral-900',
          isDisabled && 'text-neutral-500',
        )}
        data-testid={`${cId}-label`}
        htmlFor={cId}
      >
        {children}
      </label>
      {isOptional && (
        <label
          className={twMerge(
            'text-xs text-neutral-500',
            isDisabled && 'text-neutral-400',
          )}
          data-testid={`${cId}-optional-label`}
          htmlFor={cId}
        >
          optional
        </label>
      )}
    </div>
  )
}
