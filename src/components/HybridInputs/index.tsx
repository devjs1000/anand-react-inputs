import React from 'react'
import { CircleButton } from '../Buttons'
import { HAround } from '../Containers'
import { CircleSingleInput, SquareSingleInput } from '../Input'

export const SingleInput = ({ variant, ...others }: Props) => {
  const Single = variant === 'circle' ? CircleSingleInput : SquareSingleInput
  return (
    <div>
      <Single placeholder='-' maxLength={1} {...others} />
    </div>
  )
}

export const OtpInput = ({
  length = 4,
  variant = 'circle',
  inputStyle,
  ...others
}: OtpProps) => {
  return (
    <HAround {...others}>
      {[...Array(length)].map((_, index) => (
        <SingleInput variant={variant} key={index} {...inputStyle} />
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
