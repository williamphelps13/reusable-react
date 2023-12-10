import { twMerge } from 'tailwind-merge'
import Label from '../Label/Label'

type Option = {
  label: string
  value: string
}

type ComponentProps = {
  cId: string
  className?: string
  label?: string
  options: Option[]
}

export default function Component({
  cId,
  className,
  label,
  options,
}: ComponentProps) {
  return (
    <fieldset>
      {label && <Label cId={`${cId}-radio`}>{label}</Label>}
      {options.map(({ value }) => (
        <input
          className={twMerge(className)}
          data-testid={`${cId}-${value}-radio`}
          id={`${cId}-${value}`}
          key={value}
          name={cId}
          type="radio"
          value={value}
        />
      ))}
    </fieldset>
  )
}
