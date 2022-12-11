import React from 'react'

import {
  CircleButton,
  RoundButton,
  SquareButton,
  Test,
  TriangleButton
} from 'anand-react-inputs'
import 'anand-react-inputs/dist/index.css'

const App = () => {
  return (
    <div>
      <CircleButton>P</CircleButton>
      <SquareButton>Square</SquareButton>
      <RoundButton>Round</RoundButton>
      <TriangleButton>C</TriangleButton>
    </div>
  )
}

export default App
