# Sprint 1 - Day 5 => C284 ITT

## Agenda

1. Day 4 Recap
2. Exercise: Composing Components
3. Constructor Functions & Classes in Vanilla JS
4. React.js Overview Sandbox
5. Hooks
6. The State Hook
7. The Effect Hook
8. Custom Hooks
9. Test Yourself

## Overview

A constructor is a special function that creates and initializes an object instance of a class. In JavaScript, a constructor gets called when an object is created using the new keyword. The purpose of a constructor is to create a new object and set values for any existing object properties. Classes are also a template for creating objects and are Es6 versions of constructor functions. They encapsulate data with code to work on that data. Classes in JS are built on prototypes but also have some syntax and semantics that are not shared with ES5 class-like semantics. In React components come in three types, Class components, function components, and functional components. Hooks are a new feature that allow you to use React features that were once reserved for classes within functional components such as state and lifecyle methods.

### Learning Goals

In this lesson we:

- Define the base React API and explore its use cases in a trivial sandbox environment.

## 1. Day 4 Recap

- Map, Set, & Higher Order Array Methods
- JS, The Browser, and The DOM
- Events
- HTTP Request Response Cycle
- Web Services
- Introduction to React.js
- Hackathon Planning & Final Idea Approvals
- Constructor Functions & Classes in Vanilla JS

## 2. Exercise: Composing Components

_Test yourself:_ [🧪 Exercise: Composing Components](https://academy.engagelms.com/mod/page/view.php?id=109443)

## 3. Constructor Functions & Classes

Sometimes we need a "blueprint" for creating many objects of the same "type".

The way to create an "object type", is to use an object constructor function.

Objects of the same type are created by calling the constructor function with the new keyword:

```javascript
const myFather = new Person("John", "Doe", 50, "blue");

const myMother = new Person("Sally", "Rally", 48, "green");
```

#### **The this Keyword**

In JavaScript, the thing called _**this**_ is the object that "owns" the code.

The value of _**this**_, when used in an object, is the object itself.

In a constructor function _**this**_ does not have a value. It is a substitute for the new object. The value of _**this**_ will become the new object when a new object is created.

#### **Built-in JavaScript Constructors**

#### **Classes**

Classes are a template for creating objects. They encapsulate data with code to work on that data. Classes in JS are built on prototypes but also have some syntax and semantics that are not shared with ES5 class-like semantics.

Classes are in fact "special functions", and just as you can define function expressions and function declarations, the class syntax has two components: class expressions and class declarations.

One way to define a class is using a class declaration. To declare a class, you use the class keyword with the name of the class ("Rectangle" here).

```javascript
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
```

An important difference between function declarations and class declarations is that **function declarations are hoisted and class declarations are not**. You first need to declare your class and then access it

#### **Strict Mode**

The body of a class is executed in strict mode, i.e., code written here is subject to stricter syntax for increased performance, some otherwise silent errors will be thrown, and certain keywords are reserved for future versions of ECMAScript.

##### **constructor()**

The constructor method is a special method of a class for creating and initializing an object of that class.

    A constructor enables you to provide any custom initialization that must be done before any other methods can be called on an instantiated object.

If you don't provide your own constructor, then a default constructor will be supplied for you. If your class is a base class, the default constructor is empty:

```Javascript
constructor()
```

If your class is a derived class, the default constructor calls the parent constructor, passing along any arguments that were provided:

```Javascript
constructor(...args) {
    super(...args)
}
```

- args for us are what we use to pass information between components ... aka props!

There can be only one special method with the name "constructor" in a class. Having more than one occurrence of a constructor method in a class will throw a SyntaxError error.

    A constructor can use the super keyword to call the constructor of the super class.

#### **Static Methods & Properties**

The static keyword defines a static method or property for a class. Static members (properties and methods) are called without instantiating their class and cannot be called through a class instance. Static methods are often used to create utility functions for an application, whereas static properties are useful for caches, fixed-configuration, or any other data you don't need to be replicated across instances.

## Summary


### References

- [React.js Documentation](https://reactjs.org/docs/getting-started.html)
