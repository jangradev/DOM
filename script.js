'use strict';

/* 205. Constructor Functions and the new
Operator */

/* lets create a constructure function ..
for convention for constructure function name started with captial letter 
I'm using a function expression but of course a function declaration will
 also work.Now an arrow function will actually not work
as a function constructor.And that's because it doesn't have its own this keyword
and we need that, okay.So only function declarations and function expressions.
Now remember that this function is basically gonna produce an object*/

const Person = function (firstName, LastName, birthYear) {
  console.log(this);

  this.firstName = firstName;
  this.LastName = LastName;
  this.birthYear = birthYear;
};
/* Person {}
LastName: "Kumar"
firstName: "Devender" */

const devender = new Person('Devender', 'Kumar', 1989);
console.log(devender);

/* Person {firstName: "Devender", LastName: "Kumar", birthYear: 1989} */

/* this constructor function will create a new object
with the propertey that we just passed in const. function */

/* lets create new constructor with starting with new keyword
this will create new object with name of person 
1--> New {} is created 
2--> function is called ,this ={}
3--> {} this object linked to a prototype 
4--> function automatically retuen a {} 
 constructor function.

So the function automatically returns that empty object from the beginning.
But actually at this point,the object no longer needs to be empty.
And this is actually the trick of making the constructor function work.
then create a property on the this keyword with the same name and then set it to that value.
And then the same with the birth year, equal to birth year.*/

/* now we can add many object with this const. function  */
// new Person('Pooja', 'jangra');
/* lets save this is new variable  */
const pooja = new Person('Pooja', 'jangra', 1992);
console.log(pooja);
/* Person {firstName: "Pooja", LastName: "jangra", birthYear: 1992} */
const amandeep = new Person('Amandeep', 'jangra', 1988);
console.log(amandeep);

console.log(devender instanceof Person); // true

const Jay = 'Jay';
console.log(Jay instanceof Person); // false

//➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
/* 206. Prototypes */
console.log(Person);

/* ƒ (firstName, LastName, birthYear) {
  console.log(this);

  this.firstName = firstName;
  this.LastName = LastName;
  this.birthYear = birthYear;
} */

console.log(Person.prototype);

Person.prototype.calAge = function () {
  console.log(2021 - this.birthYear);
};
devender.calAge(); // 32
pooja.calAge(); // 29
amandeep.calAge(); // 33
console.log(devender);

console.log(devender.__proto__);
/* {calAge: ƒ, constructor: ƒ}
calAge: ƒ ()
constructor: ƒ (firstName, LastName, birthYear)
[[Prototype]]: Object */
console.log(devender.__proto__.__proto__);
console.log(devender.__proto__ === Person.prototype); // true

console.log(Person.prototype.isPrototypeOf(devender)); // true
console.log(Person.prototype.isPrototypeOf(pooja)); // true
console.log(Person.prototype.isPrototypeOf(Person)); // false

/* Person {firstName: "Devender", LastName: "Kumar", birthYear: 1989}
LastName: "Kumar"
birthYear: 1989
firstName: "Devender"
[[Prototype]]: Object
calAge: ƒ ()
constructor: ƒ (firstName, LastName, birthYear) */
/* we can add propertey in protptype also  */

Person.prototype.family = 'Jangra`s family';
/* Person {firstName: "Devender", LastName: "Kumar", birthYear: 1989}
LastName: "Kumar"
birthYear: 1989
firstName: "Devender"
[[Prototype]]: Object
calAge: ƒ ()
family: "Jangra`s family"
constructor: ƒ (firstName, LastName, birthYear)
 */
console.log(devender.family, pooja.family);
/* Jangra`s family Jangra`s family */

console.log(devender.hasOwnProperty('firstName')); // true
console.log(devender.hasOwnProperty('family')); // false
console.log(devender.hasOwnProperty('calAge')); // false

//➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
/* 207. Prototypal Inheritance and The Prototype Chain */

console.log(devender.__proto__);
/* {family: "Jangra`s family", calAge: ƒ, constructor: ƒ}
calAge: ƒ ()
family: "Jangra`s family"
constructor: ƒ (firstName, LastName, birthYear)
 */
/* object.prototype (top of prototype chain) */
console.log(devender.__proto__.__proto__);
/* {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …} */
console.log(devender.__proto__.__proto__.__proto__); // null

const arr = [3, 4, 3, 5, 6, 8, 2, 1, 3];
console.log(arr.__proto__);

/*  in output we can easlity se  arr does not have all these methods ,but its prototype has all 
these methods ,each array inherent all these methods from its prototype */
/* [constructor: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, find: ƒ, …]
at: ƒ at()
concat: ƒ concat()
constructor: ƒ Array()
copyWithin: ƒ copyWithin()
...
...
Symbol(Symbol.iterator): ƒ values()
Symbol(Symbol.unscopables): {copyWithin: true, entries: true, fill: true, find: true, findIndex: true, …}
[[Prototype]]: Object */

console.log(arr.__proto__.__proto__); // object of its protype
/*  in this we have methods that we can apply to an object */

/* {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
constructor: ƒ Object()
hasOwnProperty: ƒ hasOwnProperty()
isPrototypeOf: ƒ isPrototypeOf()
propertyIsEnumerable: ƒ propertyIsEnumerable()
toLocaleString: ƒ toLocaleString()
toString: ƒ toString()
valueOf: ƒ valueOf()
__defineGetter__: ƒ __defineGetter__()
__defineSetter__: ƒ __defineSetter__()
__lookupGetter__: ƒ __lookupGetter__()
__lookupSetter__: ƒ __lookupSetter__()
get __proto__: ƒ __proto__()
set __proto__: ƒ __proto__() */

console.log(arr.__proto__.__proto__.__proto__); // null
console.log(arr.__proto__ === Array.prototype); // true
console.log(arr);
/* (9) [3, 4, 3, 5, 6, 8, 2, 1, 3]

length: 9
[[Prototype]]: Array(0) */
/*  here is also in the end array has its prototype which has access to all methods that include 
in array prototype. */

/* 🍀 So we know at this point,that any array inherits all their methods
from it's a prototype.And therefore we can use that knowledge
to extend the functionality of arrays even further.
So all we would have to do is to say array.prototype.
And then here we can add any new method
to this prototype and all the arrays will then inherit it.
 */
Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique);

/* ƒ () {
  return [...new Set(this)];
} */

/* 🍀 we added a new method to the prototype property of the array constructor.
And so therefore now all arrays will inherit this method.
And so we can then call that method on any array that we want.
However, what we just did here.so extending the prototype
of a built-in object is generally not a good idea  */

/* 🍀 1 .really don't get into the habit of doing this for multiple reasons.
The first reason is that the next version of JavaScript
might add a method with the same name that we are adding, for example this one here,
but it might work in a different way.And so your code will then use that new method
which, remember, works differently.And then that will probably break your code. 

2. second reason why you shouldn't do this is because when you work on a team of developers,
then this is really gonna be a bad idea because if multiple developers implement the same method
with a different name then that's just going to create so many bugs
that it's just not worth doing this.So it's just a nice and fun experiment
but in practice, you should probably not do it.*/

/* 🍀 we already know that all the DOM elements are behind the scenes objects. */

const h1 = document.querySelector('h1');
console.dir(h1);
/* h1
➡➡➡> [[Prototype]]: HTMLHeadingElement
➡➡➡>[[Prototype]]: HTMLElement 
➡➡➡> [object HTMLElement]
➡➡➡>[[Prototype]]: Element
➡➡➡>[[Prototype]]: Node
➡➡➡>[[Prototype]]: EventTarget 
➡➡➡>[[Prototype]]: Object*/

/* 🍀 the function itself is also an object.And so therefore it also has a prototype.
And in this case to prototype will then contain the methods */

console.dir(x => x + 1);

/* [[Prototype]]: ƒ ()
➡➡➡>[[Prototype]]: Object */

//➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
/* 210. ES6 Classes */
/* classes are special type of function  */
// class expression

// class declearation
class PersonClass {
  constructor(firstName, birthYear) {
    // add a constructor method
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  //➖➖➖➖➖➖
  calAge() {
    console.log(2021 - this.birthYear);
  }
  greet() {
    console.log(`Hello ${this.firstName}`);
  }
}

const jessica = new PersonClass('Jessica', 1989); // object formation
console.log(jessica);
jessica.calAge(); //32
console.log(jessica.__proto__ === PersonClass.prototype); // true
console.log(PersonClass.prototype); // true
console.log(jessica.__proto__); // true
console.log(jessica.__proto__); // true

/* PersonClass.prototype.greet = function () {
  console.log(`Hello ${this.firstName}`);
}; */

/* that method we can decleared in class also 
has no effect on output  */
jessica.greet(); // hello jessica

/*⚡ PersonClass {firstName: "Jessica", birthYear: 1989}
     birthYear: 1989
     firstName: "Jessica"
[[Prototype]]: Object
    calAge: ƒ calAge()
     constructor: class PersonClass
[[Prototype]]: Object*/

//♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦
