import styled from 'styled-components'
const hoverButton = `
&:hover{
  background-color: black;
  color: white;
  cursor: pointer;
}
`

export const RoundButton = styled.button`
  background-color: white;
  border: 1px solid black;
  border-radius: 10px;
  padding: 4px 10px;
  min-width: 100px;
  ${hoverButton}
`

export const SquareButton = styled.button`
  background-color: white;
  border: 1px solid black;
  border-radius: 0px;
  padding: 4px 10px;
  min-width: 100px;
  ${hoverButton}
`

export const CircleButton = styled.button`
  background-color: white;
  border: 1px solid black;
  border-radius: 50%;
  padding: 4px;
  width: 30px;
  height: 30px;
  ${hoverButton}
`

export const TriangleButton = styled.button`
  clip-path: polygon(50% 100%, 0% 0%, 100% 0%);
  background-color: black;
  color: white;
  border: none;
  padding: 4px 10px;
  &:hover {
    background-color: white;
    color: black;
  }
  cursor: pointer;
`
