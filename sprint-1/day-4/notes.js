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

