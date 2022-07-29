import React from 'react'

function Button({ rest: { port, btnText } }) {
     // console.log(props)
     return (
          <div>
               {port}
               {btnText}
          </div>
     )
}

export default Button;