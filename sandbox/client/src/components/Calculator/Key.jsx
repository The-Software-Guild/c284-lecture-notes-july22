// Key.js
import React from 'react'

function handleKeyClick(keyVal) {
     console.log(keyVal)
     // events in react you can not return false to prevent default vbehjavior ... you need to explicity call preventEfauly 
}

// log a value 
function Key({ keyDisVal }) {
     // console.log(handleKeyClick)
     return (
          <div style={{
               border:'2px black solid',
               height: '24px',
               width: '24px',
               textAlign: 'center',
               verticalAlign: 'middle',
               marginTop: '10px',
               cursor: 'pointer'
          }}
          onClick={() => handleKeyClick(keyDisVal)}>
               {keyDisVal}
          </div>
     )
}

// exporting at the end of the file 
export default Key;
