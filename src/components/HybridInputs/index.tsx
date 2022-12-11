import React from 'react'
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
  ...others
}: OtpProps) => {
  return (
    <HAround>
      {[...Array(length)].map((_, index) => (
        <SingleInput variant={variant} key={index} {...others} />
      ))}
    </HAround>
  )
}

interface OtpProps {
  length?: number
  variant?: 'circle' | 'square'
  [key: string]: any
}
interface Props {
  variant?: 'circle' | 'square'
  [key: string]: any
}
