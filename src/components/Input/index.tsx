import styled from 'styled-components'

const activeStyle = `
 &:focus {
    outline: none;
    border: 1px solid #000;
    box-shadow: 0 0 0 0.2rem rgba(0, 0, 0, 0.25);
}
`

const staticStyle = `
  padding: 4px 10px;
  min-width: 100px;
  background-color: white;
  border: none;
  height: 20px;
  ${activeStyle}
`

export const OutlineInput = styled.input`
  ${staticStyle}
  border: 1px solid black;
  border-radius: 5px;
`

export const RoundInput = styled.input`
  ${staticStyle}
  border: 1px solid black;
  border-radius: 50px;
`

export const SquareInput = styled.input`
  ${staticStyle}
  border: 1px solid black;
  border-radius: 0px;
`

const borderInputStyle = `
    ${staticStyle}
    border-radius: 0px;
`

export const LeftBorderInput = styled.input`
  ${borderInputStyle}
  border-left: 2px solid black;
`
export const RightBorderInput = styled.input`
  ${borderInputStyle}
  border-right: 2px solid black;
`

export const TopBorderInput = styled.input`
  ${borderInputStyle}
  border-top: 2px solid black;
`

export const BottomBorderInput = styled.input`
  ${borderInputStyle}
  border-bottom: 2px solid black;
`

const singleInputStyle = `
    border: 1px solid black;
    width: 30px;
    height: 30px;
    padding: 0;
    text-align: center;
    font-size: 20px;
`

export const CircleSingleInput = styled.input`
  border-radius: 50%;
  ${singleInputStyle}
  ${activeStyle}
`

export const SquareSingleInput = styled.input`
  border-radius: 0px;
  ${singleInputStyle}
  ${activeStyle}
`