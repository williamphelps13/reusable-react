import { useMemo, useState } from 'react'
import ReactSlider from 'react-slider'
import { twMerge } from 'tailwind-merge'

import Label from '../Label/Label'
import { stringToKebab } from '../utilities'

export type Marks = {
  [key: number]: string
}

type SliderProps = {
  cId: string
  className?: string
  color?: 'primary' | 'secondary' | 'tertiary'
  defaultValues?: number[]
  hasOptionalLabel?: boolean
  isDisabled?: boolean
  isPearling?: boolean
  label?: string
  marks: Marks
  step?: number
}

export default function Slider({
  cId,
  className,
  color = 'primary',
  defaultValues,
  hasOptionalLabel,
  isDisabled,
  isPearling,
  label,
  marks,
  step,
}: SliderProps) {
  const [sliderValue, setSliderValue] = useState(defaultValues)
  const markPositions = useMemo(() => Object.keys(marks).map(Number), [marks])
  return (
    <div
      className="flex w-full flex-col space-y-4"
      data-testid={`${cId}-slider-container`}
    >
      {label && (
        <Label
          cId={`${cId}-slider`}
          isDisabled={isDisabled}
          isOptional={hasOptionalLabel}
        >
          {label}
        </Label>
      )}
      <ReactSlider
        ariaLabel={['Lower range thumb', 'Upper range thumb']}
        ariaValuetext={state =>
          `New range: ${state.value.map(mark => marks[mark]).join(' to ')}`
        }
        className={twMerge('group flex h-2 items-center', className)}
        data-testid={`${cId}-slider`}
        defaultValue={defaultValues}
        disabled={isDisabled}
        marks={markPositions}
        onChange={value => setSliderValue(value)}
        pearling={isPearling}
        renderMark={props => (
          <span
            {...props}
            className={`h-4 w-4 rounded-full ${
              (
                sliderValue &&
                (props?.key as number) >= sliderValue[0] &&
                (props?.key as number) <= sliderValue[1]
              ) ?
                !isDisabled ?
                  `bg-${color}-400 hover:bg-${color}-500 cursor-pointer`
                : 'cursor-not-allowed bg-neutral-400 hover:bg-neutral-400'
              : !isDisabled ?
                'cursor-pointer bg-neutral-300 hover:bg-neutral-400'
              : 'cursor-not-allowed bg-neutral-200 hover:bg-neutral-200'
            }`}
          />
        )}
        renderTrack={(props, state) => (
          <div
            {...props}
            className={`h-2 rounded-full ${
              state.index === 1 ?
                !isDisabled ? `bg-${color}-400`
                : 'bg-neutral-400'
              : !isDisabled ? 'bg-neutral-300'
              : 'bg-neutral-200'
            }`}
          />
        )}
        step={step}
        thumbClassName={`h-6 w-4 rounded-sm focus-visible:outline-none ${
          !isDisabled ?
            `bg-${color}-600 hover:bg-${color}-700 focus-visible:ring-${color}-500 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-least-contrast cursor-pointer`
          : `bg-neutral-500 hover:bg-neutral-500 cursor-not-allowed`
        }`}
      />
      <div className="flex justify-between">
        {Object.entries(marks).map(([key, value]) => (
          <label
            className={`text-xs ${
              !isDisabled ? 'text-neutral-500' : 'text-neutral-400'
            }`}
            data-testid={`${cId}-slider-${stringToKebab(value)}-label`}
            key={key}
          >
            {value}
          </label>
        ))}
      </div>
    </div>
  )
}
