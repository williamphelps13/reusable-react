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
            className={`h-4 w-4 cursor-pointer rounded-full bg-neutral-300 hover:bg-neutral-400 ${
              (
                sliderValue &&
                (props?.key as number) >= sliderValue[0] &&
                (props?.key as number) <= sliderValue[1]
              ) ?
                '!bg-primary-400 hover:!bg-primary-500'
              : 'bg-neutral-300 hover:bg-neutral-400'
            }`}
          />
        )}
        renderTrack={(props, state) => (
          <div
            {...props}
            className={`h-2 rounded-full ${
              state.index === 1 ? 'bg-primary-400' : 'bg-neutral-300'
            }`}
          />
        )}
        step={step}
        thumbClassName="h-6 w-4 bg-primary-600 cursor-pointer hover:bg-primary-700 focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-least-contrast rounded-sm focus-visible:outline-none"
        onChange={value => setSliderValue(value)}
      />
      <div className="flex justify-between">
        {Object.entries(marks).map(([key, value]) => (
          <label
            className="text-xs text-neutral-500"
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
