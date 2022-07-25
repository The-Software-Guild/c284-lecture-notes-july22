// notes.js

// ES6 

// single line comments

/* these are used
for 
mutiple 
line 
comments .... get it? */

// react and js are declarative
// declarative vs imperative
// declarative 
// walk out my apartment head north to atlantic ave A train
// ride A train manahttan side until penn station
// get off penn station exit NW corner
// walk .6miles east to madison ave

// ruby and rails 
// imperative
// You need to get on the a train to penn and wlak to the met its only like a half mile

// 4 pillars of OOP

// abstraction, encapsulation, inheritance, polymophism


// mostly everything named is CC
const someVariableExample = {};

// two exceptions
// ENV variables & constants
const MY_SECRET = 'fiji';
const CLOUDFORGE_CONFIG_SOMETHING = 129837128937;

// directories, files, assets, repo, etc.,
// kebab-case

// let_me_type_this_out

// let-me-type-this-out

// letMeTypeThisOut

// readability, computationally its more effective to parse, no capitalization

// interoperable

// JS sntax is soley for humans ()

// ASI
// semi colons .... semi colons are "necessary" at the end of every grouping of logical thought or
// end of every statement

// end end of every logical grouping expression


// value === data types
// primitives
// 12 + 1 //13

// BigInt

// 'I just said: "this is a string that needs doubles inside"'.toUpperCase // 
// `in order to concatenate ${MY_SECRET} into sentances` //es6 featuire aka syntactical sugar aka new syntax for old concept
// // if i console logged line 64 ==+ in order to concatenate fiji into sentances
// true & false

// // there are two values that are used to describe missing data
// undefined // refers to unintenionallty missing data
// null // purposefully missing 

// symbol

// complexes
// there is only a singular construct in JS and that is an object
// {} is used to describe a singular thing in more detail
// var myExampleObj = {
//      key:value,
// }

// var myDog = {
//      name: 'fiji',
//      age: 4
// }

//object dot notation
// objectReciever.propertyName
// console.log(myDog.name) // fiji
// console.log(myDog.age) // 4
// // console.log(myDog['age'])
// console.log(myDog) // JS passes its values by reference except for arrays which are pass by value

// when declaring any value youi are only to declare it with literal syntax
// 3

// 8
// 17
// {}
// true
// undefined
// null
// 'string literal'


// fx's in js should take in somethign and return or produce 
// somethign in a predictable repetable manner
// functional programming
// declared with fucnntion KW followed by name and parenthesis taking in parameters
// then curly braces to start a block of scope
// explicitly returned

// a block of code is created within the curly braces of a functions closure
// named function
function nameOfFunction(parameter1, parameter2) {
     //parameters are treated like local variables within the fx's block for scoping
     let result = parameter1 + parameter2;

     return result;
};

// no other types
// console.log(typeof []) // obj
// console.log(typeof new Date) // obj
// console.log(typeof function myFx(){}) // fx
// console.log(typeof /regex/) //  obj
// console.log(typeof undefined) // undefined
// console.log(typeof null) // obj

// annonymous fx
// function (num1, num2) {
     
// }

// // constructor function are how JS makes objects programatically
// function ConstructorFunction() {

// }

// methods are functions that enact themselves on objects

// const myDog = {
//      name: 'fiji',
//      age: 4,
// };

// myDog.age = 5;

// variables point to values not nevessarily store them 
// variables are declared and they are assigned

// decleration
// keyword nameOfVariable
// var/let/const myOtherDog = 'somethign'
// let use always and then if you can decide that a value should not be reassigned 
// then you can refactor the keyword decleration to const

// assignment
// uses the assignment operator, L = R

// reassignment

// var is global scoped and let/const are function(block) scoped

let weather = 'good'
weather = 'bad, it is stormin now'

// console.log(weather) //
// console.log(myDog) //

// it is accepted convention to use const when declaring objects and arrays

// <--------------------------- issue number and date ------------------------------------->
// pseudocode
// tryingt o add new private method that interacts with class A from ___________ and then does whatever with controlelr B from hehejekhjkehn alksdnmlaskas

// breadcrumb
// returns me x was expecting y
// function nameOfFunction(parameter1, parameter2) {
//      //parameters are treated like local variables within the fx's block for scoping
//      let result = parameter1 + parameter2;

//      return result;
// };

// didnt work got blank from thisStackOF.com
// function nameOfFunction(parameter1, parameter2) {
//      //parameters are treated like local variables within the fx's block for scoping
// // diff stuiff

//      return result;
// };

// function nameOfFunction(parameter1, parameter2) {
//      //parameters are treated like local variables within the fx's block for scoping
//      let result = parameter1 + parameter2;

//      return result;
// };

// console.log(nameOfFunction())
// gogole somethign
// documentation (issues) => recent blog posts or tutorials -> SO

// comments should be inline documentation
// """this is docstring"""

// if the expression in the parenthesis evaluates to true then execute the block of code
if (true) {
     //do this stuff
}

function testTrue (param1) {
     this
     if (param1 || param2) {
          return 'your input evaluates to true'
     } else {
          return 'your input was false'
     }
}

// const result = testTrue({}, '') 
// console.log(result) // your input evaluates to true
// object.is(a, b) is ane xpression that eveal;uates to true if a and b are the same value adn false if theya re not

// console.log(Object.is(2, 2)) // true
// console.log(Object.is(2, '2')) // false
// console.log(Object.is({}, {})) // false 


let dwarves = 7;
let continents = '7';
let worldWonders = 3 + 4;


// console.log(Object.is(dwarves, continents)); // false
// console.log(Object.is(continents, worldWonders)); // false
// console.log(Object.is(worldWonders, dwarves)); // true


// NaN is actualyl a datatype of number
// console.log(2 === 2) // true
// console.log(typeof NaN) // number

// // exceptions
// console.log(NaN === NaN) // false
// console.log(Object.is(NaN, NaN)) // true

// console.log(-0 === 0)  // true
// console.log(0 === -0)  // true

// console.log(4 == '4')

// console.log(5 == {})

// DRY [dont repeat yourself]

// html collections & node lists
// console.dir()

// named fx (arrow es6 syntacical sugar), annonymous, 
// constructor (class es6 syntactical sugar of a constructor function)

// var -> let and const 


// arrow fx's have no lexical binding of the this keyword
const exampleArrowFx = (param1, param2) => {
     //inside a "normal" fx we are used to 
     return function examplereturn() {}
}

// explicity returned
// 1st class functions 
// 

// invocation and calling
//1. fx style
// functionName(arguments)
// console.log(exampleArrowFx(3, 4)) //7

// 2. method style
// methods are functions that enact themselves on objects 

const myDog = {
     name: 'fiji',
     age: 4,
     speak: function () {
          console.log(`bork bork my name is ${this.name}`)
     }
};

// objectReciever.propertyName()
// console.log(myDog.speak) // [Function: speak]
// console.log(exampleArrowFx)

// 3. constructor style
// new Person()


// const callbackFunctionExample = (cbParam1) => {
//     console.log(cbParam1)
// }

// function higherOrderFunctionExample(cb, paramX) {
//      cb(paramX)
// }

// higherOrderFunctionExample(callbackFunctionExample, 'this is being logged from line 304')


// arrays in JS behave the exact same as they do in all other laguage
// if objects describe us a singular thing in more detail {}
// arrays group similar things []

// transversable =. given a specific unit of mesaurement you can 
// acurately predict and move between any of the other units of measurement
// in a predictable and consistent way

// one of two main itterables (string, array, )
// lists, ques, stacks, thread
// zero indexed
//                    0    1     2     3     4
const exampleArray = [1, true, myDog, {}, 'banana']

console.log(exampleArray[0]) // 1
console.log(exampleArray[4]) // 
