// notes.js


// stateless === data does not persist
// servers are considered stateless meaning they do not keep or store
// any information from any previous req or res

// how do we add state in modern web dev

// external
// DB


// internal (js)
// localStorage & sessionStorage
// are objects held in the browser that persist data for you

// const userToken = localStorage.getItem('access_token')

// sessionStorage

// cookies
// do same thing as LS except they are opften increibly small (few bytes)
// expireable 
// parameters are placeholders for arguments and store arguments into the parameters as local variable
// function outsideFx (param, param2) {
//      this // global scope
//      console.log(arguments)
     
//      const exampleArrow = () => {
//           this
//      }
// }

// outsideFx(arg, arg2, 3, true, false, null, whatever, 'bananan') // arguments get passed into fx on invocation in comparison to parameters which

// const exampleObj = {
//      single: 'value1'
// }

// exampleObj.double = 'value2'

// console.log(exampleObj)

// constructor functions 
// last type of function we need to learn
// allow us to make objects progamtically

// function Person(nameParam, hungryParam) {
//      this.name = nameParam; // object dot notation to assign new properties to an object that has not been created yet
//      this.hungry = hungryParam;
// } // think about how we can programatically add properties and methods to this constructor so that all instances fo it aka teacher,s tudent, all new people created reflect the new properties and values

// // 3rd fx invocation style - constructor style w/ the new keyword
// // store the newly created instance in a variable = new NameOfFunction('configuration arguments', 4)
// const student = new Person('kevin', true); // this is a specific instance of the instantiated parent constructor function Person
// const student2 = new Person('gabrielle', true);
// const student3 = new Person('andrew', false);

// console.log(student)
// console.log(student2)

// // classes 
// // are just es6 syntactical sugar of constructor functions
function Person(nameParam, hungryParam) {
     this.name = nameParam; // object dot notation to assign new properties to an object that has not been created yet
     this.hungry = hungryParam;
     this.speak = () => {
          console.log(`hello my name is ${this.name}`)
     }
}

const teacher = new Person('patrick', true); 
// teacher.speak()

// base class
class ClassPerson {
     constructor(nameParam, hungryParam) {
          this.name = nameParam;
          this.hungry = hungryParam;
     } // special method used for creating and initializing an object of that class


     // privatized emthods whicha re mthods unique to this clas
     static privateMethodIDontWantDerivedClassToUse() {
          // everything here will only be available to the instantiated ClassPerson Objects
     }

     // global methods or methods available to all base classes
     speak() {
          console.log(`hello my name is ${this.name}`) // ClassPerson.name
     }
}

const teacherClassEx = new ClassPerson('patrick', true); // 3rd type of function invocation
teacherClassEx.speak()

// // derived class
// // derived class is used to create a new class with some shared attributes to a parent 
//but with further unique configuration and encapsulation
class Students extends ClassPerson {
     constructor(...args){
          super(...args) // calls the parent constuctor by consuming any arguments passed through to it 
          // the students unique intiialization
     } // this constructor in a derived class will call upon instantiation the parent classes constructor

     // unique methods that are only applicable to students that go hear
}

const student1 = new Students('tony', false);
student1.speak()

// OOP is a design paradiagm
// inheritence // protoype (prototypal inheritence)
// encapsulation //
// abstraction // modularization pattern [react -. singular component should belong to a singular file] import and exporting(es6 version of require module.exports)
// polymorphism // in JS to exhibit PM you must give up encapsulation 


