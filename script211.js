'use strict';

/*  these methods to object  */
const account = {
  owner: 'jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },
  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

//account.latest(50);
/* script211.js:17 Uncaught TypeError: account.latest is not a function */

account.latest = 50;
console.log(account.movements); // (5) [200, 530, 120, 300, 50]

//➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
/* we can set these methods to classes also  */

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    //if (name.includes(' ')) this._fullNAme = name;
    else console.log(`${name} is not a full name`);
  }
  get fullName() {
    return this._fullName;
  }
}

const jessica1 = new PersonCl('jonas', 2000);
jessica1.calcAge(); //37
console.log(jessica1.age); // 37

// these are propertey of object/class thats why written same as above code

/* jessica1
PersonCl {fullName: "jonas", birthYear: 2000}
     birthYear: 2000
     fullName: "jonas"
     age: 37
[[Prototype]]: Object
     age: 37
     calcAge: ƒ calcAge()
     constructor: class PersonCl
     greet: ƒ greet()
     get age: ƒ age()
[[Prototype]]: Object */

jessica1.fullName = 'devender'; // devender is not a full name
jessica1.fullName = 'Devender Kumar';

/*jessica1
PersonCl {birthYear: 2000, _fullName: "Devender Kumar"} */
/* _fullName is a different property ,we have set the value in same propertey 
that we decleared in the class ,so decleared a new get menthod to return the same*/

/*       jessica1.fullName
         undefined           */
/* jessica1._fullName
   "Devender Kumar"         */
/* after setting new grt method on class 
        jessica1.fullName
       "Devender Kumar"     */

/*  jessica1
PersonCl {birthYear: 2000, _fullName: "Devender Kumar"}
    birthYear: 2000
    _fullName: "Devender Kumar"
    age: 37
    fullName: "Devender Kumar"
[[Prototype]]: Object
    age: 37
    calcAge: ƒ calcAge()
    constructor: class PersonCl
    fullName: "Devender Kumar"
    greet: ƒ greet()
    get age: ƒ age()
    get fullName: ƒ fullName()
    set fullName: ƒ fullName(name)
[[Prototype]]: Object */

const walter = new PersonCl('walter', 2001);
console.log(walter);
/* PersonCl {birthYear: 2001}
     birthYear: 2001
     age: 36
     fullName: undefined
[[Prototype]]: Object
     age: 36
     calcAge: ƒ calcAge()
     constructor: class PersonCl
     fullName: undefined
     greet: ƒ greet()
     get age: ƒ age()
     get fullName: ƒ fullName()
     set fullName: ƒ fullName(name)
[[Prototype]]: Object */

const walter1 = new PersonCl('walter white', 2001);
console.log(walter1);

/* PersonCl {_fullName: "walter white", birthYear: 2001}
      birthYear: 2001
      _fullName: "walter white"
      age: 36
      fullName: "walter white"
[[Prototype]]: Object
      age: 36
      calcAge: ƒ calcAge()
      constructor: class PersonCl
      fullName: "walter white"
      greet: ƒ greet()
      get age: ƒ age()
      get fullName: ƒ fullName()
      set fullName: ƒ fullName(name)
[[Prototype]]: Object */
