// main.js

// top of the DOM tree window object

// console.log(window)
// console.log(document)
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

// MVC
// unidirectional language



// callback functions are async that are passed into other functions
const callbackFx = (cbParam1) => {
    console.log(cbParam1)
}

function higherOrderFx(cb, paramX) {
     cb(paramX)
}

higherOrderFx(callbackFx, 'this is being logged from line 304')

// events

// the cb fxc from line 44 syntax is reffered to as a event handler
//html element.addEventLister('onClick', cb)
// eventTarget.addEventListener('eventName', callbackFx)

// // event handler (onClick) vanilla js
const onClick = (e) => {
     e.stopPropagation()
     console.log('this is being printed from our deeply nested child')
}

const targetParent = document.getElementById('parent')
const targetDiv = document.getElementById('deeplyNestedChild')
targetDiv.addEventListener('click', onClick)
targetParent.addEventListener('click', (e) => {
     console.log('this is from our parent')
})

// window.addEventListener('scroll', (e) => {
//      console.log(e)
// })












