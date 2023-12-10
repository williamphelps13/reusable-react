import { useMemo, useState } from 'react'
import ReactSlider from 'react-slider'
import { stringToKebab } from '../utilities'

export type Marks = {
  [key: number]: string
}

type SliderProps = {
  cId: string
  defaultValues?: number[]
  isPearling?: boolean
  marks: Marks
  step?: number
}

export default function Slider({
  cId,
  defaultValues,
  isPearling,
  marks,
  step,
}: SliderProps) {
  const [sliderValue, setSliderValue] = useState(defaultValues)
  const markPositions = useMemo(() => Object.keys(marks).map(Number), [marks])
  return (
    <div
      className="flex flex-col w-full"
      data-testid={`${cId}-slider-container`}
    >
      <ReactSlider
        ariaLabel={['Lower range thumb', 'Upper range thumb']}
        ariaValuetext={state =>
          `New range: ${state.value.map(mark => marks[mark]).join(' to ')}`
        }
        className="h-2 flex items-center"
        data-testid={`${cId}-slider`}
        defaultValue={defaultValues}
        marks={markPositions}
        pearling={isPearling}
        renderMark={props => (
          <span
            {...props}
            className={`h-4 w-4 bg-gray-300 hover:bg-gray-400 rounded-full cursor-pointer transition-colors ${
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
            className="text-sm mt-4 text-gray-400"
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
