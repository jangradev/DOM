'use strict';
// 214. Coding Challenge #2
///////////////////////////////////////
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀

*/ ///////////////////////////////////////
// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.
*/
class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    return `${this.make} going at ${(this.speed += 10)} km/h`;
  }

  brake() {
    return `${this.make} going at ${(this.speed -= 10)} km/h`;
  }
  get speedUS() {
    console.log(this.speed); //120
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    console.log(this.speed); //120
    return (this.speed = speed * 1.6);
  }
}
const car1 = new Car('BMW', 120);
console.log(car1.speedUS); // 75 // get speed from object and return
console.log(car1.speed); // 75 // get speed from object and return
console.log(car1); //120
/* 

Car {make: "BMW", speed: 120}
      make: "BMW"
      speed: 120
      speedUS: 75
[[Prototype]]: Object
      accelerate: ƒ accelerate()
      brake: ƒ brake()
      constructor: class Car
      speedUS: 75
      get speedUS: ƒ speedUS()
      set speedUS: ƒ speedUS(speed)
[[Prototype]]: Object

*/

const person = {
  firstName: 'John',
  lastName: 'Doe',
  language: 'en',
  get lang() {
    return this.language.toUpperCase();
  },
};
