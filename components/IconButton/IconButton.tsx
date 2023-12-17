import { twMerge } from 'tailwind-merge'

import Icon, { type IconNames } from '../Icon/Icon'
import Loader from '../Loader/Loader'

type IconButtonProps = {
  cId: string
  className?: string
  isDisabled?: boolean
  isLoading?: boolean
  name: IconNames
  purpose?: 'neutral' | 'primary' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  type?: 'button' | 'reset' | 'submit'
}

export default function IconButton({
  cId,
  className,
  isDisabled,
  isLoading,
  name,
  purpose,
  size = 'md',
  type = 'button',
}: IconButtonProps) {
  return (
    <button
      className={twMerge(
        `group relative rounded-md p-1 transition focus:ring-2 focus:ring-${purpose}-600 focus-visible:outline-none disabled:cursor-not-allowed disabled:text-neutral-300`,
        className,
      )}
      data-testid={`${cId}-icon-button`}
      disabled={isDisabled || isLoading}
      type={type}
    >
      {isLoading && (
        <Loader
          cId={`${cId}-icon-button`}
          className={twMerge(
            `absolute bottom-0 left-0 right-0 top-0 m-auto ${
              isLoading ? 'opacity-100' : 'opacity-0'
            }`,
          )}
          size={size}
        />
      )}
      <Icon
        cId={`${cId}-icon-button`}
        className={twMerge(
          `transition group-disabled:text-neutral-300 ${
            isLoading ? 'opacity-0' : 'opacity-100'
          }`,
          purpose && `hover:text-${purpose}-500/70 active:text-${purpose}-600`,
          !purpose && 'hover:text-current active:text-current',
        )}
        name={name}
        purpose={purpose}
        size={size}
      />
    </button>
  )
}
