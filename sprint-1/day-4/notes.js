// notes.js

// GUI (graphical user interface)

// JS -> single threaded synchnrounous 
// Js execution context -> lexical scoping, call-stack
// threads are really just stack DS , array LIFO (last in first out)



// Node.js -> async non-blocking I/O
// node event loop 6 different phases (only 3 are commonly interacted with and important === timer, poll, check)

// maps
// lower time complexity relationship

//objects store more detailed information one one specific thing 
// {
//      key: 'value'
// }


// quick question on Indexing: is there a better way to get 0,1,2 
// without typing the list out 3 times? example:
// console.log(groceryList[0], groceryList[1], groceryList[2]);

// arrays, strings are two of the main itterables in JS

// const itterateStringEx = 'hello world'
const itterateArrayEx = [1, true, 'banana', false, 14, 6]

// function printLoop(itt) {
//      for (let i = 0; i < itterateArrayEx.length; i++) {
//           const ele = itterateArrayEx[i];
//           console.log(ele)
//      }
// }

// printLoop()

// console.log(itterateStringEx.length) // 11


// big O notation and time complexity mrtoe often than not 
// itterative emthods are goignt o be worse

// higher order array methods

itterateArrayEx.push('add to end')
itterateArrayEx.unshift('add to beginning')
const sliceResult = itterateArrayEx.slice(0, 3); // non incluysive
// const spliceResult = itterateArrayEx.splice();

console.log(sliceResult)
// console.log(spliceResult)


// top of the DOM tree window object

// console.log(window)
// console.log(window.document)
// console.dir(window.document) // dir gives us an object like representation of a thing that is not an object
// console.log(window.document.body)


// parent/child relationships
// node
// root node = no parent node
// child node is of its parent
// sibling nodes share a parent
// ancestors have parents 
// who are siblings
// leaf/internal



// DOM interactions are computational
// expensive



// events

// eventTarget.addEventListener('eventName', callbackFx)

// document.querySelector('.className')

// event handler
// const onClick = (e) => {
//      console.log(e)
// }

// const targetDiv = document.getElementById('greeting');
// targetDiv.addEventListener('click', onClick)

// window.addEventListener('scroll', (e) => {
//      console.log(e)
// })

// JSON (javascript object notation)
// {
//      "key": "value";
//      "anotherKey": {};
//      "anotherAnotherLey": [];
// }


// red.body
// signature
// head


// api acts as middleware in this data flow and are the actual rules and redulartions for the req/res

// middleware === software or code that enacts itself on 
// EVERYTHIGN coming through a specific data flow


// API
// REST

// CRUD                  http req/res verbs (methods)
// Create                post

// Read                  get

// Update                put  

// Delete                delete

// RESTful 

// state of the union (currentness of our country)
// state of a molecule (water frozen, gas, liquid)
// state === current snapshot of changes often used to track 

// state 

// stateless

// data does not persist

// singular way to persist data in WebDev currently securely === DB

// server === stateless

// SOAP => xml
// REST design paradaim
// N + 1
// Facebook create GraphQL -> federated ata layer implementation



// declararative vs imperative

// D
// go out make your way to nostrad a stop ride it to hyot s/ transfer to q 
// ride to peenn station get out NW corener walk .3 miles 

// i
// you need to hop on the express 1 and transfer somewhere tog et you to pen 
// then its likea round the corner 




// pure functions
// 1. do not change or augment their inputs (props {})
// 2. reproducible/predictable output === given the same input it should output the same thing


// reconcilliation => hollistic diffing algorithm that makes use of 3 assumptions
// to kjeep track of changes and only update what is necessary


























