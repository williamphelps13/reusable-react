import { twMerge } from 'tailwind-merge'

import Label from '../Label/Label'

export type Option = {
  label: string
  value: string
}

type RadioProps = {
  cId: string
  className?: string
  color?: 'primary' | 'secondary' | 'tertiary'
  isDisabled: boolean
  label?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  options: Option[]
}

export default function Radio({
  cId,
  className,
  color = 'primary',
  isDisabled,
  label,
  onChange,
  options,
}: RadioProps) {
  return (
    <fieldset className="flex w-full gap-2 rounded-xl bg-neutral-100 p-2">
      {label && <Label cId={`${cId}-radio`}>{label}</Label>}
      {options.map(({ label, value }, index) => (
        <div className="flex flex-grow" key={`${cId}-${value}`}>
          <input
            aria-labelledby={`${cId}-radio-main-label ${cId}-radio-optional-label ${cId}-${value}-radio-label`}
            className={twMerge('peer opacity-0', className)}
            data-testid={`${cId}-${value}-radio`}
            defaultChecked={index === 0}
            disabled={isDisabled}
            id={`${cId}-${value}-radio`}
            name={cId}
            onChange={onChange}
            type="radio"
            value={value}
          />
          <label
            className={`flex flex-grow cursor-pointer select-none justify-center rounded-xl p-2 text-neutral-500 transition-colors hover:bg-neutral-200 peer-checked:bg-${color}-600 peer-checked:text-least-contrast peer-focus:ring-${color}-500 peer-focus:ring-2 peer-focus:ring-offset-2 peer-focus:ring-offset-neutral-100 peer-disabled:cursor-not-allowed peer-disabled:text-neutral-300
            peer-disabled:hover:bg-neutral-100 peer-disabled:peer-checked:bg-neutral-500 peer-disabled:peer-checked:text-neutral-100`}
            htmlFor={`${cId}-${value}-radio`}
            id={`${cId}-${value}-radio-label`}
          >
            {label}
          </label>
        </div>
      ))}
    </fieldset>
  )
}
