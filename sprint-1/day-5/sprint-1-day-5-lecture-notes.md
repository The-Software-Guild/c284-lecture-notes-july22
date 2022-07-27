# Sprint 1 - Day 5 => C284 ITT

## Agenda

1. Day 4 Recap
2. Exercise: Composing Components
3. Constructor Functions & Classes in Vanilla JS
4. React.js Overview => Sandbox
5. Hooks
6. The State Hook
7. The Effect Hook
8. Custom Hooks
9. Test Yourself

## Overview

A constructor is a special function that creates and initializes an object instance of a class. In JavaScript, a constructor gets called when an object is created using the new keyword. The purpose of a constructor is to create a new object and set values for any existing object properties. Classes are also a template for creating objects and are Es6 versions of constructor functions. They encapsulate data with code to work on that data. Classes in JS are built on prototypes but also have some syntax and semantics that are not shared with ES5 class-like semantics. In React components come in three types, Class components, function components, and functional components. Hooks are a new feature that allow you to use React features that were once reserved for classes within functional components such as state and lifecyle methods.

### Learning Goals

In this lesson we:

- Learn how to programatically make objects using constructor functions and a newer Es6 syntax of class

- Define the base React API and explore its use cases in a trivial sandbox environment.

- Explore and practice a new React concept called hooks which allow you to use React features that used to be reserved for class components such as state and lifecycle methods

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

### The `this` Keyword

In JavaScript, the thing called `this` is the object that "owns" the code.

The value of `this`, when used in an object, is the object itself.

In a constructor function `this` does not have a value. It is a substitute for the new object. The value of `this` will become the new object when a new object is created.

### Built-in JavaScript Constructors

### Classes

Classes are a template for creating objects. They encapsulate data with code to work on that data. Classes in JS are built on prototypes but also have some syntax and semantics that are not shared with ES5 class-like semantics.

Classes are in fact "special functions", and just as you can define function expressions and function declarations, the class syntax has two components: class expressions and class declarations.

One way to define a class is using a class declaration. To declare a class, you use the class keyword with the name of the class "Rectangle" below:

```javascript
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
```

An important difference between function declarations and class declarations is that **function declarations are hoisted and class declarations are not**. You first need to declare your class and then access it.

### Strict Mode

The body of a class is executed in strict mode, i.e., code written here is subject to stricter syntax for increased performance, some otherwise silent errors will be thrown, and certain keywords are reserved for future versions of ECMAScript.

### `constructor()`

The constructor method is a special method of a class for creating and initializing an object of that class.

> A constructor enables you to provide any custom initialization that must be done before any other methods can be called on an instantiated object.

If you don't provide your own constructor, then a default constructor will be supplied for you. If your class is a **base class**, the default constructor is empty:

If your class is a **derived class**, the default constructor calls the parent constructor, passing along any arguments that were provided:

```Javascript
constructor(...args) {
    super(...args)
}
```

- args for us (in react-land) are what we use to pass information between components ... aka props!

There can be only one special method with the name "constructor" in a class. Having more than one occurrence of a constructor method in a class will throw a SyntaxError error.

> A constructor can use the super keyword to call the constructor of the super class.

### Static Methods & Properties

The `static` keyword defines a static method or property for a class. Static members (properties and methods) are called without instantiating their class and cannot be called through a class instance. Static methods are often used to create utility functions for an application, whereas static properties are useful for caches, fixed-configuration, or any other data you don't need to be replicated across instances.

## 4. React.js Overview => Sandbox

## 5. Hooks

[Hooks are a new addition in React 16.8](https://www.youtube.com/watch?v=dpw9EHDh2bM). They let you use state and other React features without writing a class.

**No Breaking Changes**

Before we continue, note that Hooks are:

- **Completely opt-in.** You can try Hooks in a few components without rewriting any existing code. But you don’t have to learn or use Hooks right now if you don’t want to.

- **100% backwards-compatible.** Hooks don’t contain any breaking changes.

- **Available now.** Hooks are now available with the release of v16.8.0.

- **There are no plans to remove classes from React.** You can read more about the gradual adoption strategy for Hooks in the bottom section of this page.

**Hooks don’t replace your knowledge of React concepts.** Instead, Hooks provide a more direct API to the React concepts you already know: props, state, context, refs, and lifecycle — hooks also offer a new powerful way to combine them.

### Motivation

Hooks solve a wide variety of seemingly unconnected problems in React that we’ve encountered over five years of writing and maintaining tens of thousands of components. Whether you’re learning React, use it daily, or even prefer a different library with a similar component model, you might recognize some of these problems.

>It’s hard to reuse stateful logic between components

React doesn’t offer a way to “attach” reusable behavior to a component (for example, connecting it to a store). If you’ve worked with React for a while, you may be familiar with patterns like render props and higher-order components that try to solve this. But these patterns require you to restructure your components when you use them, which can be cumbersome and make code harder to follow. If you look at a typical React application in React DevTools, you will likely find a “wrapper hell” of components surrounded by layers of providers, consumers, higher-order components, render props, and other abstractions. While we could filter them out in DevTools, this points to a deeper underlying problem: React needs a better primitive for sharing stateful logic.

With Hooks, you can extract stateful logic from a component so it can be tested independently and reused. **Hooks allow you to reuse stateful logic without changing your component hierarchy.** This makes it easy to share Hooks among many components or with the community.

> Complex components become hard to understand

We’ve often had to maintain components that started out simple but grew into an unmanageable mess of stateful logic and side effects. Each lifecycle method often contains a mix of unrelated logic. For example, components might perform some data fetching in `componentDidMount` and `componentDidUpdate`. However, the same `componentDidMount` method might also contain some unrelated logic that sets up event listeners, with cleanup performed in `componentWillUnmount`. Mutually related code that changes together gets split apart, but completely unrelated code ends up combined in a single method. This makes it too easy to introduce bugs and inconsistencies.

In many cases it’s not possible to break these components into smaller ones because the stateful logic is all over the place. It’s also difficult to test them. This is one of the reasons many people prefer to combine React with a separate state management library. However, that often introduces too much abstraction, requires you to jump between different files, and makes reusing components more difficult.

To solve this, **Hooks let you split one component into smaller functions based on what pieces are related (such as setting up a subscription or fetching data)**, rather than forcing a split based on lifecycle methods. You may also opt into managing the component’s local state with a reducer to make it more predictable.

> Classes confuse both people and machines

In addition to making code reuse and code organization more difficult, we’ve found that classes can be a large barrier to learning React. You have to understand how `this` works in JavaScript, which is very different from how it works in most languages. You have to remember to bind the event handlers. Without unstable syntax proposals, the code is very verbose. People can understand props, state, and top-down data flow perfectly well but still struggle with classes. The distinction between function and class components in React and when to use each one leads to disagreements even between experienced React developers.

Additionally, React has been out for about five years, and we want to make sure it stays relevant in the next five years. As Svelte, Angular, Glimmer, and others show, ahead-of-time compilation of components has a lot of future potential. Especially if it’s not limited to templates. Recently, we’ve been experimenting with component folding using Prepack, and we’ve seen promising early results. However, we found that class components can encourage unintentional patterns that make these optimizations fall back to a slower path. Classes present issues for today’s tools, too. For example, classes don’t minify very well, and they make hot reloading flaky and unreliable. We want to present an API that makes it more likely for code to stay on the optimizable path.

To solve these problems, **Hooks let you use more of React’s features without classes**. Conceptually, React components have always been closer to functions. Hooks embrace functions, but without sacrificing the practical spirit of React. Hooks provide access to imperative escape hatches and don’t require you to learn complex functional or reactive programming techniques.

_Read:_ [📕 React Hooks](https://academy.engagelms.com/mod/book/view.php?id=109460)

## 6. The State Hook

`useState` is a way to “preserve” some values between function calls.

_Read:_ [📕 The State Hook](https://academy.engagelms.com/mod/book/view.php?id=109461)

_Practice:_ [🛠 Code-Along: Create an Interactive Search Bar for the Contact List](https://academy.engagelms.com/mod/book/view.php?id=109462)

## 7. The Effect Hook

By using this Hook, `useEffect`, you tell React that your component needs to do something after render. React will remember the function you passed (we’ll refer to it as our “effect”), and call it later after performing the DOM updates.

_Read:_ [📕 The Effect Hook](https://academy.engagelms.com/mod/book/view.php?id=109464)

_Practice:_ [🛠 Code-Along: Add Side Effects to Search The Contact List](https://academy.engagelms.com/mod/book/view.php?id=109465)

## 8. Custom Hooks

_Read:_ [📕 Custom Hooks](https://academy.engagelms.com/mod/book/view.php?id=109467)

_Practice:_ [📕 🛠 Code-Along: Create a Custom Fetch Hook for the Contact List](https://academy.engagelms.com/mod/book/view.php?id=109468)

## 9. Test Yourself

_Test yourself:_ [🧪 Exercise: Simple React Calculator](https://academy.engagelms.com/mod/page/view.php?id=109470)

_Test yourself:_ [🧪 Exercise: Sale Countdown](https://academy.engagelms.com/mod/page/view.php?id=109471)

## Summary

### References

- [React.js Documentation](https://reactjs.org/docs/getting-started.html)
- [MDN Web Docs > Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
