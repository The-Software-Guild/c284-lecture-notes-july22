# Sprint 1 - Day 3

## Agenda

1. CSS Classes
2. JavaScript Basics
3. Node
4. Exercise: JavaScript Variables
5. Problem Solving Process
6. How to Ask a Good Question
7. Equivalence
8. Control Flow & Conditionals
9. Test Yourself
10. Functions
11. Exercise: Defining Functions
12. Arrays
13. Exercise: Working with JavaScript Arrays
14. JS & the browser
15. Events
16. Exercise: Lucky Sevens

## Overview

JavaScript is a prototype-based, multi-paradigm, single-threaded, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles. Today we will be exploring it's basic syntax and conventions eventually making way for [React.js](https://reactjs.org/) tomorrow, one of the most powerfull, in demand, and popular frameworks in the world.

### Learning Goals

In this lesson we:

- Explore CSS classes and syntax.

- Introduce JavaScript syntax and conventions

- Briefly cover Node.js

- Learn how to have an efective problem solving process & ask a good question

- Explore equivalence within JS

- Define control flow examples

- Explore arrays, functions, the DOM, and events before covering them in more details tomorrow morning.

## 1. CSS Classes

_Practice:_ [🛠 Code-Along: Formatting HTML using CSS Classes](https://academy.engagelms.com/mod/book/view.php?id=109420)

_Test Yourself:_ [🧪 Exercise: Format HTML Content Using Classes](https://academy.engagelms.com/mod/page/view.php?id=109421)

## 2. Vanilla JavaScript Overview

JS is a lousely typed dynamic scripting language with first-class functions.

The standards for JavaScript are the ECMAScript Language Specification (ECMA-262) and the ECMAScript Internationalization API specification (ECMA-402). As soon as one browser implements a feature, we try to document it. This means that cases where some proposals for new ECMAScript features have already been implemented in browsers, documentation and examples in MDN articles may use some of those new features. Most of the time, this happens between the stages 3 and 4, and is usually before the spec is officially published.

Do not confuse JavaScript with the Java programming language. Both "Java" and "JavaScript" are trademarks or registered trademarks of Oracle in the U.S. and other countries. However, the two programming languages have very different syntax, semantics, and use.

> [VS Code Mac OS keyboard shortcuts](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf)

### Syntax

Values, variables, and expressions are camelCased while constants and enviromental variables (ENV) are SCREAMING_SNAKE_CASE

> [Air BnB Style Guide](https://github.com/airbnb/javascript)

Directories, assets, repositores, basically everything else should be kebab-case. Do you know why?

### Values

#### _Primitive_

- Numbers
- Strings
- Booleans, used for logical operations.

- Undefined, used for unintentionally missing values.
- Null, used for intentionally missing values.

- BigInt
- Symbolk, used to hide implementation details.

>**Primitive values are immutable (unchangeable/read only)!**

#### _Complex_

- **Objects** are denoted with curly braces, `{}`, and are used to group related data and code.

- **Functions** are similar to a procedure—a set of statements that performs a task or calculates a value, but for a procedure to qualify as a function, it should take some input and return an output where there is some obvious relationship between the input and the output. To use a function, you must define it somewhere in the scope from which you wish to call it.

#### **No Other Types**

```javascript
console.log(typeof []) // expected output ?

console.log(typeof new Date) // 

console.log(typeof function myFx(){}) // 

console.log(typeof /regex/) // 

console.log(typeof null) //
```

### **Expressions**

Expressions are questions that JavaScript can answer. JavaScript answers expressions in the only way it knows how — with values.

If we “ask” the expression 2 + 2, JavaScript will “answer” with the value 4.

```Javascript
console.log(2 + 2); // 4
```

If the word “expression” confuses you, think of it as a piece of code that expresses a value. You might hear people say that 2 + 2 “results in” or “evaluates to” 4. These are all different ways to say the same thing.

We ask JavaScript 2 + 2, and it answers with 4.

> **Expressions always result in a single value**.

### Operators

_Read:_ [📕 JavaScript: Value Types and Operators](https://academy.engagelms.com/mod/book/view.php?id=109423)

_Read:_ [📕 JavaScript: Expressions, Statements, and Variables](https://academy.engagelms.com/mod/book/view.php?id=109424)

### **Variables**

Variables are not values. Variables point to values.

## 3. Node.js

[Node.js](https://nodejs.org/en/) is a JS runtime enviroment built on [Chrome's V8 JS engine](https://v8.dev/).

## 4. Exercise: JavaScript Variables

_Test Yourself:_ [🧪 Exercise: JavaScript Variables](https://academy.engagelms.com/mod/page/view.php?id=109425)

## 5. Problem Solving Process

Starting and maintaining a good problem solving process is a **vital** skill as a programmer. This is especially important for students and soon to be junior level devs.

The key here is to find something that works for you and stick to it no matter what. As the idium goes, "3 hours of planning can save you 3 days of headaches."

### Ex: The 20 min rule

Conceptually, we never want to be stuck on a given problem for more than 20 minutes. Let's take a look at that practically.

1) Given any problem or task the first step will always be to map out your direction, idea, data strucure & flow, components, local & global state, folder structure, required modules, ...etc. This can be quick but is vital to our process. Should be done with psedo code and some form or drawings or wireframing.

2) Code out the scaffold of your project and start working on your tasks, constantly testing or reffering to the unit tests provided to you. Important to do this as you develop (Test Driven Development) not once you complete hours of coding.

3) When stuck try different solutions for no more than 20 mins in your IDE. DO NOT use destructive code — meaning comment out old code not deleting it in lie of copy pasting new code from the internet. Creating this breadcrumb of ideas 99% of the time will lead you to your answer before moving forward.

4) Take a break! This can mean any number of things I usually suggest to go work on other code. Something that is "easy" or "easily" completed in your project. Often times writing sucessfull code can get your brain flowing again. Or go for a walk, do some pushups, find your peace, take the dog out — whatever works for you.

5) Try again for 20 minutes. You should not have went through stack overflow or anythign yet if you are goign to use outside materials it should be from your notes or the **documentation** for whatever you are using. I know often your answer can be found easily on SO but at your level I think it will help you immensely to try and figure it out without that help. Leading to a stronger knwledge base will make your interview process easier and ultimately add more value to the first company you go to work for.

6) Leave comments **everywhere**. If you are not, start immediately and do not stop. This is important for your own sanity but also good practice for when you join a team. Think of facebooks codebase and 100,000 some developers globally. Imagine looking at some code and trying to figure out a bug or what the problem is with no test files or comments. Write comments everywere. Full stop. This will also differenite your code from other juniors as you move into the interview process.

7) If you can not figure it out yet now head online in this order — documentation, blogs/vids/articles, stack overflow. When using google for these look for **recent** posts.

8) If you are still stuck you need to ask somebody for help. Utilize your networks. Start thinking about the fact you will not have this BU network soon and begin thinking about how to create your own moving forward. Twitter, dischords, slack channels, meetups.

## 6. How To Ask a "Good" Question

Asking a good question is not only for yourself but helps the person helping you quickly and efficently figure out what in the hell is going on in your jumbled mess of a project and how to help you through it. At first this will be your support system at BU, next most likely stack overflow, and lastly your mentor or senior level devs. The very first thing your senior dev will ask you will be did you google it.

### Contents of a "good" question

1) Code snippets of every file involved. If full stack MERN this could be 5-10 ... all labeled on the top with a comment of the name of the file. Including the commented out code of your "tries."

2) A description of the problem you are trying to solve, or what you are tryign to accomplish. Think — how do I do x ..... tell us what x is.

3) What you specifically have done to try and solve this problem.

4) What error you are getting and any associated screenshot of that error.

## 7. Equality of Values

In JavaScript, there are several kinds of equality.

- Strict Equality: `a === b` (triple equals).

- Loose Equality: `a == b` (double equals).

- Same Value Equality: `Object.is(a, b)`.

### **Same Value Equality: `Object.is(a, b)`**

In JavaScript, `Object.is(a, b)` tells us if a and b are the same value:

```javascript
console.log(Object.is(2, 2)); // 

console.log(Object.is({}, {})); // 
```

This is called **Same Value Equality**.
What does “same value” mean, exactly. You might already know this intuitively, but let’s verify your understanding.

```javascript
let dwarves = 7;
let continents = '7';
let worldWonders = 3 + 4;
```

Now try to answer these questions using the code above:

```javascript
console.log(Object.is(dwarves, continents)); // ?
console.log(Object.is(continents, worldWonders)); // ?
console.log(Object.is(worldWonders, dwarves)); // ?
```

- `Object.is(dwarves, continents)` is false because dwarves and continents point at different values.

- `Object.is(continents, worldWonders)` is false because continents and worldWonders point at different values.

- `Object.is(worldWonders, dwarves)` is true because worldWonders and dwarves point at the same value.

#### **Strict Equality: a === b**

So what’s the difference between `Object.is` and `===`?

In almost all cases, the same intuition works for **Strict Value Equaliy** too. For example, `2 === 2` is **true** because 2 always “summons” the same value.

Conversely, `{} === {}` is **false** because each `{}` creates a different value.

However, there are two rare cases where the behavior of `===` is different.

Consider the cases below as exceptions to the rule — just like you had to memorize the irregular verbs when you were learning English. Both of these unusual cases involve “special numbers” that we discussed in the past:

1. `NaN === NaN` is **false**, although they are the same value.

2. `-0 === 0` and `0 === -0` are **true**, although they are different values.

### First SPecial Case: `NaN`

`NaN` is a special number that shows up when we do invalid math like `0 / 0`.

You probably won’t do this intentionally, but it can happen when you work with incorrect data in the first place, or if your calculation contains a mistake.

```javascript
console.log(NaN === NaN) // false
console.log(Object.is(NaN, NaN)) // true
```

`NaN === NaN` is always false, but `NaN` is the same value as `NaN`.

### Second Special Case: `-0`

In regular math, there is no such concept as “minus zero”, but it exists in floating point math for practical reasons. Here’s an interesting fact about it.

Both `0 === -0` and `-0 === 0` are always true.

In practice, I haven’t run into a case where this matters in my entire career.

> Imagine negotiating business deals at a masked carnival. You might talk to two people, and not realize that you really talked to the same person twice. Or you might think you talked to one person but those were two different people!
>
> If you don’t have a clear mental model of equality in JavaScript, every day is like a carnival – and not in a good way. You’re never quite sure if you’re dealing with the same value, or with two different values. As a result, you’ll often make mistakes — like changing a value you didn’t intend to change.
> -Dan Abramov

#### **Loose Equality**

The rules of Loose Equality (also called “abstract equality”) are arcane and confusing. They are widely acknowledged as an early bad design decision. Many coding standards prohibit the use of == and != in code altogether.

Although I don't take strong opinions on what features you should or shouldn’t use, we’re not going to cover Loose Equality for now. It’s uncommon in modern codebases, and its rules don’t play a larger role in the language — or in our mental model. If you are curious, check out how it works, but don’t feel pressured to memorize it.

>"**_Loose Equality (double equals) is the bogeyman of JavaScript._**" - Dan Abramov

## 8. Control Flow & Conditionals

Control flow is the order in which a program's lines of code are executed. Generally, a computer will execute JavaScript code one line at a time, from top to bottom. But there are certain control flow mechanisms we can use to interrupt this flow.

_Read:_ [📕 JavaScript: Control Flow](https://academy.engagelms.com/mod/page/view.php?id=109426)

_Practice:_ [🛠 Code-Along: Logging Letters](https://academy.engagelms.com/mod/page/view.php?id=109427)

## 9. _Test Yourself_

1. [🧪 Exercise: If Statements](https://academy.engagelms.com/mod/page/view.php?id=109428)

2. [🧪 Exercise: for loops](https://academy.engagelms.com/mod/page/view.php?id=109429)

## 10. Functions

JS has **first class functions**:

1. Store fx's as values
2. Pass around fx's as arguments
3. Fx's can be returned from other fx's

Function can be invoke in three ways:

1. FX Style
2. Method Style
3. Constructor Style

_Read:_ [📕 JavaScript Functions](https://academy.engagelms.com/mod/page/view.php?id=109431)

_Practice:_ [🛠 Code-Along: Counting Characters](https://academy.engagelms.com/mod/book/view.php?id=109432)

## 11. Exercise: Defining Functions

_Test yourself:_ [🧪 Exercise: Defining Functions](https://academy.engagelms.com/mod/page/view.php?id=109434)

## 12. Arrays

_Read:_ [📕 JavaScript Arrays](https://academy.engagelms.com/mod/page/view.php?id=109435)

_Practice:_ [🛠 Code-Along: JavaScript Array Methods](https://academy.engagelms.com/mod/page/view.php?id=109436)

## 13. Exercise: Working with JavaScript Arrays

_Test yourself:_ [🧪 Exercise: Working with JavaScript Arrays](https://academy.engagelms.com/mod/page/view.php?id=109437)

## 14. JS & the browser

_Read:_ [📕 JavaScript and the Browser](https://academy.engagelms.com/mod/page/view.php?id=109438)

_Practice:_ [🛠 Code-Along: JavaScript and the Browser](https://academy.engagelms.com/mod/page/view.php?id=109439)

## 15. Events

_Read:_ [📕 JavaScript and the DOM](https://academy.engagelms.com/mod/page/view.php?id=109441)

_Practice:_ [🛠 Code-Along: JavaScript Form Validation and Content Control](https://academy.engagelms.com/mod/page/view.php?id=109442)

## 16. Exercise: Lucky Sevens

_Test yourself:_ [🧪 Exercise: Lucky Sevens](https://academy.engagelms.com/mod/page/view.php?id=109443)

## Summary

JavaScript is a dynamic computer programming language. It is lightweight and most commonly used as a part of web pages, whose implementations allow client-side script to interact with the user and make dynamic pages. It is an interpreted programming language with object-oriented capabilities.

The DOM represents the document as nodes and objects; that way, programming languages can interact with the page. A web page is a document that can be either displayed in the browser window or as the HTML source.

CSS is a tool to add style and depth to web pages.

### References

- [MDN Web Docs > Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
