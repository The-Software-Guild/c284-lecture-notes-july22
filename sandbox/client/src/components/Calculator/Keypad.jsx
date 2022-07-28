// Keypad.js
import React from 'react'

import Key from './Key'

function Keypad(props) {
  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      columnGap: '10px',
      maxWidth: '160px'
    }}>
      <Key
        style={{ flex: '1 25%' }}
        keyDisVal={7} />
      <Key
        style={{ flex: '1 25%' }}
        keyDisVal={8} />
      <Key
        style={{ flex: '1 25%' }}
        keyDisVal={9} />
      <Key
        style={{ flex: '1 25%' }}
        keyDisVal={'-'} />

      <Key
        style={{ flex: '1 25%' }}
        keyDisVal={4} />
      <Key
        style={{ flex: '1 25%' }}
        keyDisVal={5} />
      <Key
        style={{ flex: '1 25%' }}
        keyDisVal={6} />
      <Key
        style={{ flex: '1 25%' }}
        keyDisVal={'+'} />

      <Key
        style={{ flex: '1 25%' }}
        keyDisVal={'1'} />
      <Key
        style={{ flex: '1 25%' }}
        keyDisVal={2} />
      <Key
        style={{ flex: '1 25%' }}
        keyDisVal={3} />
      <Key
        style={{ flex: '1 25%' }}
        keyDisVal={'x'} />

      <Key
        style={{ flex: '1 25%' }}
        keyDisVal={'C'} />
      <Key
        style={{ flex: '1 25%' }}
        keyDisVal={0} />
      <Key
        style={{ flex: '1 25%' }}
        keyDisVal={'='} />
      <Key
        style={{ flex: '1 25%' }}
        keyDisVal={'/'} />
    </div>
  )
}

export default Keypad;