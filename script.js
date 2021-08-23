'use strict';
/* lets create a constructure function ..
for convention for constructure function name started with captial letter 
I'm using a function expression but of course a function declaration will
 also work.Now an arrow function will actually not work
as a function constructor.And that's because it doesn't have its own this keyword
and we need that, okay.So only function declarations and function expressions.
Now remember that this function is basically gonna produce an object*/

const Person = function (firstName, LastName, birthYear) {
  console.log(this);
  /* Person {} 
  lets add some propetey in this empty object*/
  this.firstName = firstName;
  this.LastName = LastName;
  this.birthYear = birthYear;
  /* we can create methods also in this object 
    like what we write below code is not good practice */
  //   this.age = function () {
  //     console.log(2021 - this.birthYear);
  //   };
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

/* Now remember from one of the previous lectures,that in classical object oriented programming,
an object created from a class is called an instance,right? Now we didn't technically create a class here
because as we discussed before,JavaScript doesn't really have classes
in the sense of traditional OOP.However, we did create an object
from a constructor function.And actually three objects, right?
And constructor functions have been used since the beginning of JavaScript
to kind of simulate classes.And so therefore we can still say
that devender here is an instance of person and the same goes for pooja and for amandeep here.
And in fact there is even an operator that we can use to test for that.
So that works like this.So devender is an instance of, and then person.
And so this will then return either true or false.Now, if we created something else here,
let's say J, just like this, then if we do this,this would of course be false, right?
Because of course we didn't create this variable here,so this object using any constructor function, all right?
And since we're talking about instances here,we can also say that these properties here
will be the instance properties. */

console.log(devender instanceof Person); // true

const Jay = 'Jay';
console.log(Jay instanceof Person); // false

/* a really bad practice.So you should never do this.
You should never create a method inside of a constructor function.
That's because imagine we were gonna create a hundred
or thousands or even tens of thousands of person objects using this constructor function.
Then what would happen,
is that each of these objects would carry around this function here.
So if we had a thousand objects,we would essentially create a thousand copies
of this function. And so that would be terrible for the performance of our code.
Again, don't do this.But instead to solve this problem,
we are gonna use prototypes and prototype inheritance
just like we discussed in the last video.All right, great.
So this is the basics of constructor functions. */

/* Just note that function constructors are not really a feature of 
the JavaScript language.
Instead, they are simply a pattern that has been developed by other developers.
And now everyone simply uses this.And this now includes you as a new developer. */

/* But now we're gonna talk about prototypes.So actually, we talked about prototypes,
prototypal inheritance and delegation earlier already.But how does all of that actually work?
Well, it can be summarized like this.So, first each and every function in JavaScript
automatically has a property called prototype.And that includes, of course, constructor functions.
Now every object that's created by a certain constructor function
will get access to all the methods and properties that we define on the constructors
 prototype property. */

//➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
/* 206. Prototypes */

console.log(Person.prototype);
Person.prototype.calAge = function () {
  console.log(2021 - this.birthYear);
};
devender.calAge(); // 32
pooja.calAge(); // 29
amandeep.calAge(); // 33
console.log(devender);
/* Person {firstName: "Devender", LastName: "Kumar", birthYear: 1989} */

/* if we check our devender here,then you see that it contains of course
the birth year and the first name,but it does not contain the calcAge method.
But still, we have access to it because of prototypal inheritance.Okay. */

/* so this is the prototype of Jonas.It's not the prototype property
but it is simply the prototype, okay?And so here again, we see the calcAge function
and that's why Jonas is able to use this.So to prototype of the Jonas object
is essentially the prototype propertyof the constructor function. */
console.log(devender.__proto__);
/* {calAge: ƒ, constructor: ƒ}
calAge: ƒ ()
constructor: ƒ (firstName, LastName, birthYear)
[[Prototype]]: Object */
console.log(devender.__proto__ === Person.prototype); // true

/* But what I just said sounded incredibly confusing, didn't it?
So shouldn't person dot prototype be the prototype of person,I mean
should this prototype property here not be the prototype of person?
Well, actually, no.So this is the confusing part.so person dot prototype here
is actually not the prototype of person.But instead, it is what's gonna be used
as the prototype of all the objects that are created with the person constructor function.
So that's a subtle but important difference that you need to keep in mind.
And, in fact, what I just said that is confirmed by this comparison that we just did here.
So we just saw that devender's prototype which is this, is the prototype property
of the person constructor function.And there are actually other built in methods
that we can use to prove this.So on any object,for example, object dot prototype,
we can test if this is a prototype of another object.So we can call is prototype,
so is prototype like this of and then Jonas.And so this should also become true.
And indeed it is. */

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
entries: ƒ entries()
every: ƒ every()
fill: ƒ fill()
filter: ƒ filter()
find: ƒ find()
findIndex: ƒ findIndex()
flat: ƒ flat()
flatMap: ƒ flatMap()
forEach: ƒ forEach()
includes: ƒ includes()
indexOf: ƒ indexOf()
join: ƒ join()
keys: ƒ keys()
lastIndexOf: ƒ lastIndexOf()
length: 0
map: ƒ map()
pop: ƒ pop()
push: ƒ push()
reduce: ƒ reduce()
reduceRight: ƒ reduceRight()
reverse: ƒ reverse()
shift: ƒ shift()
slice: ƒ slice()
some: ƒ some()
sort: ƒ sort()
splice: ƒ splice()
toLocaleString: ƒ toLocaleString()
toString: ƒ toString()
unshift: ƒ unshift()
values: ƒ values()
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
0: 3
1: 4
2: 3
3: 5
4: 6
5: 8
6: 2
7: 1
8: 3
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
///////////////////////////////////////
// Coding Challenge #1

/* 1. Use a constructor function to implement a Car. A car has a make and a speed property.
 The speed property is the current speed of the car in km/h; */
// 👍
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

//➖➖➖➖➖➖➖➖➖
Car.prototype.accelerate = function () {
  //return `${this.make} going at ${(this.speed + 10)} km/h`;
  /*  with above code there is a mistake which is of operator 
  speed increased only at 1st time  */
  return `${this.make} going at ${(this.speed += 10)} km/h`;
};

//➖➖➖➖➖➖➖➖➖
Car.prototype.brake = function () {
  return `${this.make} going at ${(this.speed -= 5)} km/h`;
};
/* const devender = new Person('Devender', 'Kumar', 1989); */
//➖➖➖
const Car1 = new Car('BMW', 120);
// Car {make: "BMW", speed: 120}
console.log(Car1.accelerate());
console.log(Car1.accelerate());
console.log(Car1.accelerate());
console.log(Car1.brake());

//➖➖➖
const Car2 = new Car('Mercedes', 95);
// Car {make: "Mercedes", speed: 95}

console.log(Car2.accelerate());
console.log(Car2.accelerate());
console.log(Car2.accelerate());
console.log(Car2.accelerate());
console.log(Car1.brake());

console.log(Car2.brake());
console.log(Car2.brake());
console.log(Car2.brake());
console.log(Car2.brake());
console.log(Car2.brake());

console.log(Car.prototype);

/* {accelerate: ƒ, brake: ƒ, constructor: ƒ}
       accelerate: ƒ ()
       brake: ƒ ()
       constructor: ƒ (make, speed)
   [[Prototype]]: Object */

//♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦
/* 210. ES6 Classes */
/* classes are special type of function  */
// class expression

// class declearation
class PersonClass {
  //➖➖➖➖➖➖➖➖➖
  constructor(firstName, birthYear) {
    // add a constructor method
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // method decleration
  //➖➖➖➖➖➖➖➖➖
  calAge() {
    console.log(2021 - this.birthYear);
  }
  //➖➖➖➖➖➖➖➖➖
  greet() {
    console.log(`Hello ${this.firstName}`);
  }
}

const jessica = new PersonClass('Jessica', 1989); // object formation
console.log(jessica);
jessica.calAge(); //32
console.log(jessica.__proto__ === PersonClass.prototype); // true

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

/* 🌟 Now, what's important to understand here is that all of these
   methods that we write in the class,so outside of the constructor,
   will be on the prototype of the objects and not on the objects themselves.  
   So this is really just like before prototypal inheritance. */

/* 🌟 So first, classes are not hoisted.So first, let's scroll a bit here.
Classes are not hoisted,and so even if they are class declarations.
So function declarations, remember are hoisted,which means we can use them
before they are declared in the code.But with classes, that doesn't work. */

/* 🌟 Second, just like functions,classes are also first class citizens.
First class citizens,and so what that means, is that we can pass them
into functions and also return them from functions.And as I mentioned before,
that is because classes are really just a special kind of function behind the scenes. */

/* 🌟 third, the body of a class is always executed in strict mode.
Classes are executed in strict mode.And so even if we didn't activate it for our
 entire script,all the code that is in the class will be executed in strict mode. */

/* 🌟 Now, if you're asking, if you should use classes without understanding prototypal 
 inheritance,well then, the reply is definitely no */

//♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦
/* 211. Setters and Getters */
/* 🌟 So getters and setters are basically functions that get and set a value so
  just as the name says,but on the outside they still look like regular properties.
  but setters and getters can actually be very useful for data validation and as an example, */

const account = {
  owner: 'jonas',
  movements: [200, 530, 236, 1000],
  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    // one argument must be decleared
    this.movements.push(mov);
  },
};
console.log(account.latest); // calling getter function
/* here it is just like popertey of a object but we can 
apply some condition  */

// account.latest(50); but we have apply like propertey of a object
account.latest = 50;
