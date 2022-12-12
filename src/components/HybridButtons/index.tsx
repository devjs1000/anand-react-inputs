import React from 'react'
import styled from 'styled-components'
import { CircleButton } from '../Buttons'

export const TagContainer = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 10px;
  padding: 4px 10px;
  margin: 4px;
  font-size: 20px;
  font-weight: 500;
  color: #333;
  cursor: pointer;
  gap: 4px;
  border: 2px solid #e6e6e6;
  &:hover {
    background-color: #e6e6e6;
  }
`

export const Tag = ({ children, icon = 'x', onClick, ...others }: TagProps) => {
  return (
    <TagContainer {...others}>
      {children}
      <CircleButton
        style={{
          border: 'none'
        }}
        onClick={onClick}
      >
        {icon}
      </CircleButton>
    </TagContainer>
  )
}

interface TagProps {
  icon?: string
  onClick?: () => void
  [key: string]: any
}
