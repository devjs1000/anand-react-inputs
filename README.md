# anand-react-inputs

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/anand-react-inputs.svg)](https://www.npmjs.com/package/anand-react-inputs) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save anand-react-inputs
```

## Usage

Get Every Possible Form of Inputs for React;

```tsx
import React, { useState } from 'react'

import {
  CircleButton,
  OutlineInput,
  RoundButton,
  RoundInput,
  SquareButton,
  SquareInput,
  TriangleButton,
  BottomBorderInput,
  LeftBorderInput,
  RightBorderInput,
  TopBorderInput,
  CircleSingleInput,
  SquareSingleInput,
  SingleInput,
  OtpInput,
  CounterInput,
  ArrayInput
} from 'anand-react-inputs'
import 'anand-react-inputs/dist/index.css'

const App = () => {
  const [value, setValue] = useState(0)
  const [array, setArray] = useState([])
  const handleArrays = (value: any) => {
    setArray(value)
  }
  return (
    <div>
      <h1>BUTTONS</h1>
      <div id='buttons' className='container'>
        <CircleButton>P</CircleButton>
        <SquareButton>Square</SquareButton>
        <RoundButton>Round</RoundButton>
        <TriangleButton>C</TriangleButton>
      </div>
      <br />
      <h1>INPUTS</h1>
      <div className='container'>
        <OutlineInput placeholder='enter your text here' />
        <RoundInput placeholder='enter your text here' />
        <SquareInput placeholder='enter your text here' />
        <LeftBorderInput placeholder='enter your text here' />
        <RightBorderInput placeholder='enter your text here' />
        <TopBorderInput placeholder='enter your text here' />
        <BottomBorderInput placeholder='enter your text here' />
        <CircleSingleInput placeholder='-' />
        <SquareSingleInput placeholder='-' />
      </div>
      <br />
      <h1>HYBRID OF COMPONENT </h1>
      <div className='container'>
        <p>
          <b>NOTE:</b> The input component is a hybrid of the input and button
          and they have added functionality of component.
        </p>
        <SingleInput variant='circle' />
        <SingleInput variant='square' />
        <OtpInput style={{ width: '150px' }} length={4} variant='circle' />
        <OtpInput style={{ width: '150px' }} length={4} variant='square' />
        <CounterInput
          style={{ width: '150px' }}
          onChange={setValue}
          min={0}
          max={100}
          value={value}
        />
        <ArrayInput value={array} onChange={handleArrays} />
      </div>
    </div>
  )
}

export default App
```

## License

MIT © [devjs1000](https://github.com/devjs1000)
