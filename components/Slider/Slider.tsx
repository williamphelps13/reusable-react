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
  defaultValues?: number[]
  hasOptionalLabel?: boolean
  isPearling?: boolean
  label?: string
  marks: Marks
  step?: number
}

export default function Slider({
  cId,
  className,
  defaultValues,
  hasOptionalLabel,
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
        <Label cId={`${cId}-slider`} isOptional={hasOptionalLabel}>
          {label}
        </Label>
      )}
      <ReactSlider
        ariaLabel={['Lower range thumb', 'Upper range thumb']}
        ariaValuetext={state =>
          `New range: ${state.value.map(mark => marks[mark]).join(' to ')}`
        }
        className={twMerge('flex h-2 items-center', className)}
        data-testid={`${cId}-slider`}
        defaultValue={defaultValues}
        marks={markPositions}
        pearling={isPearling}
        renderMark={props => (
          <span
            {...props}
            className={`h-4 w-4 cursor-pointer rounded-full bg-gray-300 transition-colors hover:bg-gray-400 ${
              (
                sliderValue &&
                (props?.key as number) >= sliderValue[0] &&
                (props?.key as number) <= sliderValue[1]
              ) ?
                '!bg-blue-400 hover:!bg-blue-500'
              : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        )}
        renderTrack={(props, state) => (
          <div
            {...props}
            className={`h-2 rounded-full ${
              state.index === 1 ? 'bg-blue-400' : 'bg-gray-300'
            }`}
          />
        )}
        step={step}
        thumbClassName="h-6 w-4 bg-blue-600 cursor-pointer hover:bg-blue-700 transition-colors focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded-sm"
        onChange={value => setSliderValue(value)}
      />
      <div className="flex justify-between">
        {Object.entries(marks).map(([key, value]) => (
          <label
            className="text-xs text-gray-500"
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
