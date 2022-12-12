import React, { useRef } from 'react'
import { CircleButton } from '../Buttons'
import { HAround } from '../Containers'
import { Tag } from '../HybridButtons'
import { CircleSingleInput, OutlineInput, SquareSingleInput } from '../Input'

export const SingleInput = React.forwardRef(
  ({ variant, ...others }: Props, ref: any) => {
    const Single = variant === 'circle' ? CircleSingleInput : SquareSingleInput
    return (
      <div>
        <Single placeholder='-' maxLength={1} ref={ref} {...others} />
      </div>
    )
  }
)

export const OtpInput = ({
  length = 4,
  variant = 'circle',
  inputStyle,
  ...others
}: OtpProps) => {
  const inputsRef = useRef([])
  const handleOnChange = (e: any) => {
    console.log(e)
    console.log(inputsRef)
  }
  return (
    <HAround {...others}>
      {[...Array(length)].map((_, index) => (
        <SingleInput
          ref={inputsRef}
          variant={variant}
          key={index}
          onChange={handleOnChange}
          {...inputStyle}
        />
      ))}
    </HAround>
  )
}

export const CounterInput = ({
  min = 0,
  max = 10,
  value = 0,
  onChange,
  style,
  ...others
}: CounterProps) => {
  const handleIncrement = () => {
    if (value < max) {
      onChange?.(value + 1)
    }
  }
  const handleDecrement = () => {
    if (value > min) {
      onChange?.(value - 1)
    }
  }
  return (
    <HAround style={{ alignItems: 'center', ...style }} {...others}>
      <CircleButton onClick={handleDecrement}>-</CircleButton>
      <SquareSingleInput value={value} onChange={onChange} />
      <CircleButton onClick={handleIncrement}>+</CircleButton>
    </HAround>
  )
}

export const ArrayInput = ({
  value = [],
  onChange,
  backspaceDelete = true,
  tagButtonStyle,
  tagStyle,
  inputStyle,
  ...others
}: ArrayInputProps) => {
  const handleKeyDown = (e: any) => {
    if (e.key === 'Enter') {
      onChange?.([...value, e.target.value])
      e.target.value = ''
    }
    if (e.key === 'Backspace' && e.target.value === '') {
      onChange?.(value.slice(0, -1))
    }
  }

  const handleDelete = (index: number) => {
    onChange?.(value.filter((_, i) => i !== index))
  }

  return (
    <div>
      {value.map((item: string, index: number) => (
        <Tag
          {...tagStyle}
          tagButtonStyle={tagButtonStyle}
          onClick={() => handleDelete(index)}
          key={index}
        >
          {item}
        </Tag>
      ))}
      <OutlineInput
        placeholder='enter your text here'
        {...inputStyle}
        onKeyDown={handleKeyDown}
        {...others}
      />
    </div>
  )
}

interface ArrayInputProps {
  value: string[]
  backspaceDelete?: boolean
  onChange: (e: any) => void
  tagButtonStyle?: any
  tagStyle?: any
  inputStyle?: any

  [key: string]: any
}

interface CounterProps {
  min?: number
  max?: number
  value?: number
  onChange?: (e: any) => void
  [key: string]: any
}

interface OtpProps {
  length?: number
  variant?: 'circle' | 'square'
  inputStyle?: any
  [key: string]: any
}
interface Props {
  variant?: 'circle' | 'square'
  [key: string]: any
}
