// Calculator.js
import React, { useState } from 'react'

import Keypad from './Keypad'
import Display from './Display/Display'


// here goes JS cal operation logic

// stillneed to account for clearing functionality
function Calculator() {
  const [inputNum1, setInputNum1] = useState('1st placeholder');
  const [inputNum2, setInputNum2] = useState('2nd placeholder');
  const [operation, setOperation] = useState('2nd placeholder');
  const [result, setResult] = useState('result'); // clear functionality reused here


  // here goes result state variable update logic (yes this fx is within the scope of the fucntion component)
  // setResult

  return (
    <div>
      <Display 
        inputFirstNum={inputNum1}
        inputSecondNum={inputNum2}
        finalResult={result}/>
      <Keypad 
        firstInStUdFx={setInputNum1}
        secondInStUdFx={setInputNum2}/>
    </div>
  )
}

export default Calculator;