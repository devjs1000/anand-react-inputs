import styled from 'styled-components'

const createFlexContainer = (rest = '') => styled.div`
  display: flex;
  ${rest}
`

export const Flex = createFlexContainer()

export const VStack = createFlexContainer('flex-direction: column;')

export const HStack = createFlexContainer('flex-direction: row;')

export const Grid = styled.div`
  display: grid;
`
export const Box = styled.div`
  display: block;
`

export const Wrapper = styled.div`
  display: inline-block;
`

export const Center = createFlexContainer(
  'align-items: center; justify-content: center;'
)

export const VCenter = createFlexContainer('align-items: center;')

export const HCenter = createFlexContainer('justify-content: center;')

export const HBetween = createFlexContainer('justify-content: space-between;')

export const VBetween = createFlexContainer('align-items: space-between;')

export const HAround = createFlexContainer('justify-content: space-around;')

export const VAround = createFlexContainer('align-items: space-around;')

export const HEvenly = createFlexContainer('justify-content: space-evenly;')

export const VEvenly = createFlexContainer('align-items: space-evenly;')

export const HStart = createFlexContainer('justify-content: flex-start;')

export const VStart = createFlexContainer('align-items: flex-start;')

export const HEnd = createFlexContainer('justify-content: flex-end;')

export const VEnd = createFlexContainer('align-items: flex-end;')

export const HStretch = createFlexContainer('justify-content: stretch;')

export const VStretch = createFlexContainer('align-items: stretch;')

export const HBaseline = createFlexContainer('justify-content: baseline;')

export const VBaseline = createFlexContainer('align-items: baseline;')
