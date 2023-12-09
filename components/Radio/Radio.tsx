import { twMerge } from 'tailwind-merge'

type Option = {
  label: string
  value: string
}

type ComponentProps = {
  cId: string
  options: Option[]
}

export default function Component({ cId, options }: ComponentProps) {
  return (
    <fieldset className={twMerge()}>
      {options.map(({ value }) => (
        <input
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
