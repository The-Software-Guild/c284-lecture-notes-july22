import React from 'react'

function Display({
  inputFirstNum,
  inputSecondNum,
  finalResult }) {
  return (
    <div>
      <p>First Num: {inputFirstNum}</p>
      <p>First Num: {inputSecondNum}</p>
      <p>Final Result: {finalResult}</p>
    </div>
  )
}

export default Display;