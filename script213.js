' use strict';
/* 213. Object.create */
// create simple object
const PersonProto = {
  calcAge() {
    console.log(2021 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
/*      {}
[[Prototype]]: Object
        calcAge: ƒ calcAge()
[[Prototype]]: Object */

// add propertey to this new empty obect
steven.name = 'Steven';
steven.birthYear = 2000;
steven.calcAge(); // 21

console.log(steven.__proto__); //{calcAge: ƒ}
/* {calcAge: ƒ}
         calcAge: ƒ calcAge()
   [[Prototype]]: Object  */

console.log(steven.__proto__ === PersonProto); // true

// lets create new object
const sarah = Object.create(PersonProto);
sarah.init('Devender Kumar', 1989);
sarah.calcAge(); // 32
