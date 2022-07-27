import React from 'react'

import Card from './shared/Card'


// render -> creat a node insert it into the DOM
// mounting -> the first time a component is rednered to the dom

// routing logic global configurations 
function App() {
  return (
    <>
      <navbar></navbar>
      <Card
        background='lightCoral' 
        text='more specific error card'/>
      <Card text='normal card'/>
      <Card text='third card'/>
      <Card text='broken card'/>
      <Card
        background='lightBlue'
        color='white' 
        text='blue card'/>
      <Card text='pokemon card'/>
    </>
  )
}

export default App;

