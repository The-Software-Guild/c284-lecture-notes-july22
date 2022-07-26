# Sprint 1 - Day 4 => C284 ITT

## Agenda

1. Day 3 Recap
2. Map, Set, & Higher Order Array Methods
3. Exercise: Lucky Sevens
4. JS, The Browser, and The DOM
5. Events
6. HTTP Request Response Cycle
7. Web Services
8. Introduction to React.js
9. Exercise: Composing Components
10. Hackathon Planning & Final Idea Approvals
11. Constructor Functions & Classes in Vanilla JS

## Overview

The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects; that way, programming languages can interact with the page. Today we explore two implementations of it, in the browser and somethign more modern via React.js.

### Learning Goals

In this lesson we:

- Finish our dive into JavaScript by covering Maps, Sets, higher order array methods, constructor functions, and classes

- Explore JS in the browser

- Install and explore a vital devloper tool for mocking APi calls, Postman

- Define the HTTP request responce cycle while exploring its signifigance in modern web devlopment

- Introduce the concept of the DOM

- Learn about event bubbling and capturing

- Begin our dive into React.js at a very high level makign way to dive more into the framework in the coming week

## 1. Day 3 Recap

- some thign

- another thing

## 2. Map, Set, & Higher Order Array Methods

### Map

Very recently both maps & sets have been added to JS. **Map** is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type. **Unlike objects, keys are not converted to strings. Any type of key is possible.**

```javascript
let map = new Map();

map.set('1', 'str1');   // a string key
map.set(1, 'num1');     // a numeric key
map.set(true, 'bool1'); // a boolean key

// remember the regular Object? it would convert keys to string
// Map keeps the type, so these two are different:
alert( map.get(1)   ); // 'num1'
alert( map.get('1') ); // 'str1'

alert( map.size ); // 3
```

For looping over a map, there are 3 methods:

1. `map.keys()` – returns an iterable for keys,
2. `map.values()` – returns an iterable for values,
3. `map.entries()` – returns an iterable for entries [key, value], it’s used by default in for..of.

>Map can also use objects as keys.

### Set

A Set is a special type collection – “set of values” (without keys), where each value may occur only once. The main feature is that repeated calls of set.add(value) with the same value don’t do anything. That’s the reason why each value appears in a Set only once. Sets are best used to test for uniqueness.

```javascript
let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// visits, some users come multiple times
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

// set keeps only unique values
alert( set.size ); // 3

for (let user of set) {
  alert(user.name); // John (then Pete and Mary)
}
```

Iteration over Set:

- We can loop over a set either with `for..of` or using `forEach`.

>Map has a buiolt in forEach method

### Higher Order Array Methods

_see_assets_

[HOAM](https://javascript.info/map-set)

## 3. Exercise: Lucky Sevens

_Test yourself:_ [🧪 Exercise: Lucky Sevens](https://academy.engagelms.com/mod/page/view.php?id=109443)

## 4. JS, The Browser, and The DOM

_Read:_ [📕 JavaScript and the DOM](https://academy.engagelms.com/mod/book/view.php?id=109441)

_Read:_ [📕 JavaScript and the Browser](https://academy.engagelms.com/mod/book/view.php?id=109438)

## 5. Events

[W3 School > Events](https://www.w3schools.com/js/js_events.asp)

## 6. HTTP Request Response Cycle

## 7. Web Services

_Read:_ [📕 Cloud Service Models](https://academy.engagelms.com/mod/book/view.php?id=109445)

_Read:_ [📕 API Design and Development Principles](https://academy.engagelms.com/mod/book/view.php?id=109446)

_Read:_ [📕 Getting Started With Postman](https://academy.engagelms.com/mod/book/view.php?id=109447)

### Postman

[Postman](https://learning.postman.com/docs/getting-started/introduction/) is an API platform for building and using APIs. Postman simplifies each step of the API lifecycle and streamlines collaboration so you can create better APIs—faster.

_Practice:_ [🛠 Code-Along: Working With Postman](https://academy.engagelms.com/mod/book/view.php?id=109448)

## 8. Introduction to React

### React Dev Tools

Does eveyone have these installed? if not install now. Google react dev tools and install the chrome extension. Restart browser if promt.

### React.js

React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.

Declarative views make your code **more predictable** and easier to debug.

#### **Components**

React is component-based, meaning you can build **encapsulated** components that manage their own state, then compose them to make complex UIs.

Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.

Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.

**Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.**

#### **Props**

When React sees an element representing a user-defined component, it passes JSX attributes and children to this component as a single object. We call this object “props”.

> Props are immutable! You must treat them as read-only.

Whether you declare a component as a function or a class, it must never modify its own props.

React is pretty flexible but it has a single strict rule:

_**All React components must act like pure functions with respect to their props.**_

Functions are called “pure” because they do not attempt to change their inputs, and always return the same result for the same inputs.

#### **State**

State is similar to props, but it is private and fully controlled by the component.

In addition to taking input data (accessed via this.props), a component can maintain internal state data (accessed via this.state). When a component’s state data changes, the rendered markup will be updated by re-invoking render().

>Internal state alows for true encapsulation and reusability.

#### **Do Not Modify State Directly**

Instead, use `setState()`. The only place where you can assign this.state is the _constructor_.

State updates may be asynchronous.Meaning, react may batch multiple `setState()` calls into a single update for performance. Because of this, `props` and `this.state` may be updated asynchronously, **you should not rely on their values for calculating the next state.**

_Read:_ [📕 Introduction to React](https://academy.engagelms.com/mod/book/view.php?id=109450)

_Read:_ [📕 Set Up a React App](https://academy.engagelms.com/mod/book/view.php?id=109451)

_Read:_ [📕 React Components](https://academy.engagelms.com/mod/book/view.php?id=109453)

_Practice:_ [🛠 Code-Along: Create a React Component](https://academy.engagelms.com/mod/book/view.php?id=109454)

## 9. Exercise: Composing Components

_Test yourself:_ [🧪 Exercise: Composing Components](https://academy.engagelms.com/mod/page/view.php?id=109443)

## 10. Hackathon Planning & Final Idea Approvals

[Final Project Planning part 2](https://academy.engagelms.com/mod/page/view.php?id=109458)

## 11. Constructor Functions & Classes in Vanilla JS

## Summary

In today's lessons we explored the rest of JavaScript in a aim to pave the way for React.js. We stayed really high levelwith React today in an aim to bolster those of you completely new to it. In the foloowing week will willl take a deep dive through the framework.

### References

- [MDN Web Docs > Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [React.js Documentation](https://reactjs.org/docs/getting-started.html)
- [Postman](https://learning.postman.com/docs/getting-started/introduction/)
- [Javascript.info > Map & Set](https://javascript.info/map-set)
- [W3 Schools > JavaScript Events](https://www.w3schools.com/js/js_events.asp)
