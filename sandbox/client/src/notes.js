// notes.js

// components & logic

//1
// wrapper component for both keypad and display meaning wrapper is parent to the K & D Siblings

//2 -> buttons 2.5
// keypad parent to 16 key components

// 3
// some way to recieve input from keys

// 4
// dispaly parent number input & number output which will be siblings of each other

// 5
// js calculator logic to perform operations on recieved key input

// 6. how do i do events in react and how do i display the result
// event on equal key to fire the operation side effect

// 8 this will be last 
// clearing mechanism to reset inputs

// 9
// review & refactor (removing any uneccsary coments, devlopment logs, refactoring,)

// styled compoent (air bnb)
// css => inline 


// if youa re trying to mount and render any conmponent it must be done from the parents 
// FILE NOT where the parent is rendered

// the idea that when react apps scale and your trees becaome really
// deep that you are forced into lifting state up to high 
// and passign it down through props to many levels
// prop drilling => antipattern
// anti pattern => decleration of a function within a components scope bounds

// destructuring assignment syntax
// general syntax
// const { a1, b2, c3 } = destEx;
// variable name on left side muyst equal property name in obj

// old way of storing the property value a of destEx into a new variable
// let newVar = destEx.a
// let anotherVar = destEx.b

// console.log(newVar) // 1
// console.log(anotherVar) // 2



// objects
const user = {
     id: 1,
     name: "patrick",
     cohorts: {
          first: 'C284',
          second: 'C571',
          third: '387'
     }
}

// DS

// name, 2nd cohort
const { name, cohorts: { second }} = user;

console.log(`${name} will be teaching ${second}`)









// arrays







// spread operator
// if ODS unpack valeus from constructs and composables like objects andarrays
// then the spread operator packs them into a storage unit
// ...varName
// console.log(varName) // {}




















