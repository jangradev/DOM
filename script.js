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

console.log(devender instanceof Person); // true

const Jay = 'Jay';
console.log(Jay instanceof Person); // false

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

class PersonCl {
  constructor(firstName, birthYear) {
    // add a constructor method
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  calAge() {
    console.log(2021 - this.birthYear);
  }
  greet() {
    console.log(`Hello ${this.firstName}`);
  }

  get age() {
    return 2021 - this.birthYear;
  }
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else console.log(`${name} Not a full name`);
  }
  get fullName() {
    return this._fullName;
  }
}

const object01 = new PersonCl('jessica', 1988);
console.log(object01);
console.log(object01.__proto__);
/* PersonCl {firstName: "jessica", birthYear: 1988}
         birthYear: 1988
         firstName: "jessica"
         age: (...)
[[Prototype]]: Object
         age: (...)
         calAge: ƒ calAge()
         constructor: class PersonCl
         greet: ƒ greet()
         get age: ƒ age()
[[Prototype]]: Object */
object01.calAge(); // 33
console.log(object01.age); // 33
console.log(object01.fullName); // undefined
// to clear this we have to set getter method

/* Let's now talk about a feature
that is actually common to all objects in JavaScript,
and that's getters and setters.
So every object in JavaScript
can have setter and getter properties.
And we call these special properties assessor properties,
while the more normal properties are called data properties.
So getters and setters are basically functions
that get and set a value so just as the name says,
but on the outside they still look like regular properties.
And so let's first take a look at getters and setters
in a simple object literal,
and for that I'm gonna use the bank account example
from the Bankist application.
So very simple object literal here.
The owner is Jonas.
Then some simple movements.
So the values here don't really matter, okay?
Oh, and of course I'm writing this object all wrong.
Maybe you have already been noticing that.
Okay, but now it should be correct.
All right, but now to add a getter to this object.
We can start by basically writing a normal method.
So let's say that we want a method
to get the latest movement and so let's call it latest.
And then to transform this into a getter
we simply prepend the keyword get.
All right, and so let's simply return the last movement here
so that's this.movements.slice -1.
But this is actually gonna return an array,
so an array with the last position
and so we can simply take that out using the pop method.
And we could've used destructuring as well,
but I didn't want to save this
into an external variable first.
And so now we can use this getter like this.
So account and then we say latest,
but we simply use it as a property.
All right, so we don't call the method,
but instead we write it as if it was just a property.
So let's see, and indeed that returns 300.
So this can be very useful
when we want to read something as a property,
but still need to do some calculations before.
Okay, and now we can do the same also as a setter.
So we say set, latest again
and then here we can basically add a new movement
to the array.
And any setter method needs to have exactly one parameter.
So in this case that's simply a movement.
So let's say this.movements.push
and then that movement that we just passed into.
Now it is not mandatory to specify a setter
when we have a getter for the same property.
Okay, so just a getter or just a setter would be enough.
And so, how do we use the setter now?
So if it was a regular method then we would have to do this.
So account.latest and then call it with the movement,

let's say 50.
But now this is actually like a property and not a method.
And so we can simply set it
just like we set any other property.
So we essentially set it equal to 50.
And so now if we take a look at the movements here,
it will then give us the complete array
with the 50 there at the end.
And so in a nutshell this is how getters and setters work
for any regular object in JavaScript.
Now however, classes do also have getters and setters,
and they do indeed work in the exact same way.
And so let's try them out now here in our person class.
So here we can for example add a getter
for the age property.
So we can say get age and then we return the age.
So this is of course very similar to the calcAge method
that we already have here but that doesn't matter
because this is really just a demonstration example.
All right, and so like this we will be able
to basically read the age of any object using a property.
So let's try that here for example, jessica.age,
and this time we actually need to log it to the console.
And you see here we now get the same value.
All right, so you see that the getter is indeed
just like any other regular method
that we set on the prototype.
And in fact we can also check that out here.
So if we take a look at the prototype of Jessica,
it will be right there.
Now it has these dots here
because it's only calculated once we actually click this.
Okay?
So here too it already looks as if it would be a property
and not a method.
We still have the get method down here,
but then it's also kind of ended as a property.
All right?
So that's a very simple use case of a getter,
but setters and getters can actually be very useful
for data validation and as an example,
let's try some validation with the name.
So for that I will actually change a firstName here
to fullName.
And so now here we expect a full name.
So a name which basically contains a space.
So let's say Jessica Davis here,
and so now we can create a setter for the fullName property
which will check if this is actually a full name.
All right, so set fullName,
and then we need the name itself,
and then here we need some logic.
So to test if it contains a space,
if the name includes a space,
and I'm not sure if it is called includes actually.
Now let me just test it here very quick.
Okay, we have to comment out this part.
All right, so this method actually does exist.
So I wasn't sure if it only exists on erase,
but indeed it also exists on strings.
And so in this case then we actually want to set
this.fullName to the name that was received.
But if not, we want to give an alert.
So the given name is not a full name.
So in this case what's really important to understand
is that we are creating a setter for a property name
that does already exist.
So fullName is already a property
that are trying to set here,
but then we also have the setter.
And so now what's gonna happen is
that each time this code here is executed,
so whenever we set the fullName on the this keyword,
then actually this method here,
so this setter is gonna be executed.
And so that name that we pass in as fullName
will then become this name.
All right, let's check that out actually.
And so now as we create Jessica here,
you will see and indeed it, we saw Jessica Davis here,
but now we got this crazy error here
of maximum call stack size exceeded.
Now that's a very cryptic error message,
but what happens here is that there is a conflict.
So right now both the setter function
and this constructor function
are trying to set the exact same property name.
And so that gives origin to this weird error.
So what we need to do instead
is to here create a new property name.
And the convention for doing that,
so when we have a setter which is trying to set a property
that does already exist,
then here as a convention we add an underscore.
So again, this is just a convention,
it's not a JavaScript feature.
So it's really just a different variable name
to avoid that naming conflict.
However, now when we do this,
we are actually creating a new variable,
so a fullName variable.
So let's try this now actually.
So if we try to look at Jessica Davis you see that right now
the property that exists is underscore fullName.
And so right now we cannot do jessica.fullName
because that simply doesn't exist.
And so to fix this we now also need to create a getter
for the fullName property.
And so that will simply return the underscore fullName.
So let's see.
So return this._fullName.
And so if we try to do the same now,
then you see that we are back to having this fullName here.
All right?
And of course, the actual property that is here
is now still underscore fullName,
because well that's what we do here in the setter, right?
But then we can also compute this full name
just as we can compute the age.
So this pattern here is important to understand
whenever we try to set a property that already exists.
Now let's try another name here just to see what happens,
and actually after all this.
So let's create a Walter object here.
New PersonCl, that's right.
And now we're just using a name with one word,
let's say 1965 and so now we get this error.
So Walter is not a full name,
and so right now if we check out Walter,
age probably doesn't have any name, and yeah it doesn't.
So just the birth year now.
But if we then put it as a full name,
so Walter White then indeed, Walter like this,
then we get the underscore fullName.
But just like before we can then also access walter.fullName
because of that setter or actually of that getter
that we just defined earlier.
Now okay, great, so this is another nice feature of classes
that can be very useful sometimes.
Now we don't need to use getters or setters,
and many people actually don't,
but yeah, as I just said sometimes it's just nice
to be able to use these features
and especially when we need like a validation like this
by the time we are creating a new object.
So that's essentially what this setter here does.
Next up,
we're gonna take a look at yet another feature of classes,
which is static methods.
So let's check that out right now.

 */
