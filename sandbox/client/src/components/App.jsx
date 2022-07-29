// App.js
import React, { Component } from 'react'

import Calculator from './Calculator/Calculator'
import Card from './shared/Card'

// I have information in my high level component that I need
// to pass far my tree component hierarchy and not eb consumed along the way

const randomTextGottenFromSomewhere = 'not a button'
const CONFIG_PORT = 4000

// Create an ES6 class, with the same name, that extends React.Component.
// Add a single empty method to it called render().
// Move the body of the function into the render() method.
// Replace props with this.props in the render() body.
// Delete the remaining empty function declaration.

// composition



class App extends Component {
  constructor(){
    super() // calls the parent classes constructor providing the derived class with all of its parents intialiaztion logic
    this.state = {
      clickCount: 0
    }

    // this keyword in constrctuor of class and class component refer to the class itself
    // therefore onClick would be undefined but this.onClick === App.onClick

    // any initiliaztation configurations
    // using this kw to access method = .bind
    // this.onClick          = this.onClick.bind(this)
    // 3rd anti pattern is binding this in the constructor instead we can use fat arrow function syntax for our class method decleration
  }

  // the this keyword within this method does not refer to what you think or want and in order to account
  // for that you need to explicity bind the this keyword in the constructor
  onClick() {
    console.log(this) // 
  }

  //method definitions go here
  // semantically in 2022 99 majority of internal class methods be arrow function
  onClick = () => {
    console.log(this) // App
    // this.state
  }


  // in order to access anythign from within the render method
  // state, props, and class methods
  render() {
    return (
      <div>
        {/* <Calculator /> */}
        <p>Clicked: {this.state.clickCount}</p>
        <Card
          port={CONFIG_PORT}
          btnText={randomTextGottenFromSomewhere}
          cursor={'pointer'}
          text={'error card'}
          color={'white'}
          background={'lightCoral'} />
        <Card
          port={CONFIG_PORT}
          btnText={randomTextGottenFromSomewhere}
          cursor={'pointer'}
          text={'click card'}
          color={'white'}
          background={'lightBlue'} />
      </div>
    )
  }
}

export default App;

