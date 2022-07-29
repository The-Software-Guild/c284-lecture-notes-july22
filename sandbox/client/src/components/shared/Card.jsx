import React from 'react'

import Button from './Button'
 
function Card({ text, color, background, ...rest }) {
  // console.log(rest)
  const exampleElement = <h4>This is {text}</h4>

  return (
    <div style={{
      color: color,
      background: background,
      height: '80px',
      width: '200px',
      padding: '4px',
      margin: '10px',
      cursor: 'pointer',
      border: '2px solid black'
    }}>
      {exampleElement}
      <Button rest={rest}/>
    </div>
  )
}

export default Card;