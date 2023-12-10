import { twMerge } from 'tailwind-merge'

type LabelProps = {
  children?: React.ReactNode
  isDisabled?: boolean
  isOptional?: boolean
}

export default function Label({
  children,
  isDisabled,
  isOptional,
}: LabelProps) {
  return (
    <div className="flex w-full items-center justify-between">
      <label
        className={twMerge(
          'text-sm text-gray-900',
          isDisabled && 'text-gray-500',
        )}
      >
        {children}
      </label>
      {isOptional && (
        <label
          className={twMerge(
            'text-xs text-gray-500',
            isDisabled && 'text-gray-400',
          )}
        >
          optional
        </label>
      )}
    </div>
  )
}
