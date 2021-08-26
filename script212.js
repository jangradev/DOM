'use strict';

/* 212. Static Methods */
console.log(Array.from); //ƒ from() { [native code] }
console.log(Array.from(document.querySelectorAll('h1')));
/* [h1]
0: h1
length: 1
[[Prototype]]: Array(0)
 this method is only attached with Array constructor only not its prototype
 thats why all array not inherit this propertey*/

/* [1,2,3].from()
VM787:1 Uncaught TypeError: [1,2,3].from is not a function
    at <anonymous>:1:9 */

const PersonStfn = function (firstName, LastName, birthYear) {
  console.log(this);

  this.firstName = firstName;
  this.LastName = LastName;
  this.birthYear = birthYear;
};

const Jangra = new PersonStfn('Devender', 'Kumar', 1989);
console.log(devender);

PersonStfn.heyfn = function () {
  console.log('Hello this is static Function');
  console.log(this);
};
PersonStfn.heyfn();

/* ƒ (firstName, LastName, birthYear) {
  console.log(this);

  this.firstName = firstName;
  this.LastName = LastName;
  this.birthYear = birthYear;
} */

//➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

class PersonSclass {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  // instense methods
  calAge() {
    console.log(2021 - this.birthYear);
  }
  greet() {
    console.log(`Hello ${this.firstName}`);
  }
  // static method
  static hey = function () {
    console.log('Hello this is static Function');
    console.log(this);
  };
}

const staticFn = new PersonSclass(' static Function', 1989);

PersonSclass.hey(); // Hello this is static Function

/* this hey function not available in PersonSclass prototype */
console.log(PersonSclass.prototype);

/* {constructor: ƒ, calAge: ƒ, greet: ƒ}
calAge: ƒ calAge()
constructor: class PersonSclass
greet: ƒ greet()
[[Prototype]]: Object
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

console.log(staticFn);
/* PersonSclass {firstName: " static Function", birthYear: 1989}
birthYear: 1989
firstName: " static Function"
[[Prototype]]: Object
calAge: ƒ calAge()
constructor: class PersonSclass
greet: ƒ greet()
[[Prototype]]: Object */

/*  this function not available in prototype propertey of that class */
