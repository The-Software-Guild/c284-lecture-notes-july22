import React from 'react'


// function component 
function Card(props) {
     // console.log(propsback)

     const exampleElement = <h4>This is {props.text}</h4>

     return (
        <div style={{
          color: props.color,
          background: props.background,
          height: '80px',
          width: '200px',
          padding: '4px',
          margin: '10px',
          cursor: 'pointer',
          border: '2px solid black' 
        }}>
          {exampleElement}
        </div>  
     )
}

export default Card;