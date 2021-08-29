'use strict';
///////////////////////////////////////
// Coding Challenge #4

/* 
1. Re-create challenge #3, but this time using ES6 classes: create an 
'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' 
methods of this class, and also update the 'brake' method in the 'CarCl'
 class. They experiment with chining!

DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  get speedUS() {
    return `( Speed in ${this.speed / 1.6} mi/h )`;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

class EVCL extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  accelerate() {
    this.speed += 10;
    this.#charge--;
    console.log(
      `${this.make} is going at ${this.speed} km/h & Battery Power reduced to ${
        this.#charge
      }`
    );
    return this;
  }

  brake() {
    this.speed -= 5;
    console.log(
      `${this.make} is going at ${this.speed} km/h & Battery Power reduced to ${
        this.#charge
      }`
    );
    return this;
  }
  chargerBattery(chargeTo) {
    this.#charge = chargeTo;
    console.log(`Battery Power  ${this.#charge}`);
    return this;
  }
}
const rivian = new EVCL('Rivian', 120, 25);
const devender1 = new EVCL('Devender', 100, 45);

rivian
  .chargerBattery(100)
  .accelerate()
  .accelerate()
  .accelerate()
  .brake()
  .accelerate();

/* Battery Power  100
   Rivian is going at 130 
      km/hBattery Power reduced to 99
   Rivian is going at 140 
      km/hBattery Power reduced to 98
   Rivian is going at 150 
      km/hBattery Power reduced to 97
   Rivian is going at 145 
      km/hBattery Power reduced to 97
   Rivian is going at 155 
      km/hBattery Power reduced to 96 */

//console.log(rivian.#charge);
/* Uncaught SyntaxError: Private field '#charge' 
must be declared in an enclosing class */

console.log(rivian.speedUS);
/* Speed in 96.875 mi/h */

/* rivian
         EVCL {make: "Rivian", speed: 155, #charge: 96}
               make: "Rivian"
               speed: 155
               #charge: 96
               speedUS: (...)
[[Prototype]]: CarCl
               accelerate: ƒ accelerate()
               brake: ƒ brake()
               chargerBattery: ƒ chargerBattery(chargeTo)
               constructor: class EVCL
               speedUS: (...)
[[Prototype]]: Object
               constructor: class CarCl
               speedUS: (...)
               get speedUS: ƒ speedUS()
               set speedUS: ƒ speedUS(speed)
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

console.log(rivian);
console.log(devender1);

/* EVCL {make: "Rivian", speed: 155, #charge: 96}
   EVCL {make: "Devender", speed: 100, #charge: 45} */

/* And here it is,
the final coding challenge
about object oriented programming.
And in this challenge,
the goal is to recreate the challenge number 3,
but this time using ES6 classes.
So basically what you should do,
is to create a class EV,
so electric vehicle.
Which is going to be a child class,
of the car class that we already created before as well.
Then in that EV class,
make the charge property private.
So that's number two.
And then point number three,
is that I want you to implement the ability
to chain the accelerate and charged battery methods
on this class.
And the same also for the brake method in the car class.
So that's actually called CarCL.
So then go ahead and experiment with chaining,
and all of that should be done
using this test data down here.
All right.
So I already have to coat here.
And so this makes it a bit easier
to understand what the goal is.
So, as I mentioned,
we already have the CarCL class from before,
and so this one is basically going to stay the same,
except for the break method,
which I want you to make chainable.
And then here we have the EV already,
as we implemented it previously using constructor functions.
And so the big goal of this challenge,
is basically to convert all of this,
into a child class of the CarCL class.
All right,
so let's do this.
So class EVCL,
and now this should be a child class.
And so we use the extends keyword.
So this extends the CarCL class.
And now let's put this curly brace actually down here,
because all we need to do is to now modify this
a little bit.
So here we can transform this here
into the constructor.
So the constructor method,
and we still need to make speed and charge Of course.
Now here we don't need to call the car,
but instead we call super.
Remember, and we do that of course,
without the disc keyword,
because all of this
will automatically happen behind the scenes.
Okay. So if I save this now,
we get to this error,
but that's because
we still have a lot of stuff to change down here.
Next here is linking off the prototypes.
And none of this is necessary with classes,
because all of this simply happens automatically
behind the scenes.
We also don't need to set anything manually
on the prototype properties.
So let's get rid of this.
And in here also,
we don't need to function keyword.
And so with this,
uh, I think for now we should be good to go.
So let's now create an object called Rivian,
which is going at 120 with a charge of 23%.
So Rivian,
which is, uh, another electric vehicle brand.
So EVCL Rivian 120 and 23% of charge.
Let's check it out here,
and yup, there it is.
Great.
So next up the task,
is to make the charge private.
So let's do that.
So this is the CarCL.
So here we don't have to charge in the parent class,
but we do have it here in the child class.
Now we receive this charge,
actually as an input here.
And so we still need to define
all the fields outside of any method.
So we do that up here,
and that is true for both private and public fields.
So in this case,
we want a private field,
and that's called charge,
and then we don't give it any value.
And here we simply reassign that.
And then all we have to do is to change it everywhere.
So that's here and here and here,
give it a save.
If we now check this,
then indeed here it is.
And we didn't get any error,
but indeed, as we try to now access this property outside,
then that is not going to work.
So it is now truly private,
and it is encapsulated inside of the class.
So from outside,
there is no way of changing it,
except of course by charging the battery or by accelerating.
And so once again,
this method here is basically a public API,
so that we can manipulate
the charge property from the outside.
But without being able to directly access the property
from the outside.
So next up,
we want to implement a chaining
on accelerate, chargeBattery and brake.
So on brake,
we need to do it here.
And so remember,
all we have to do is to return this keyword, right?
So that's very easy,
here to same,
this.
And again, we are doing this here,
basically on all the methods that actually set something.
And so that's why this makes the most sense.
Great. So now we are able to do something like this.
So we can accelerate,
and then we can accelerate again,
and we can accelerate again maybe.
Let's brake for a change,
then let's charge the battery,
let's say to 50%,
and then let's accelerate some more.
And so this is what the result is going to be looking like.
So here we are accelerating three times,
then we are breaking down by five kilometers per hour,
and then immediately,
we add 20 kilometers per hour back again.
And the charge then drops to 49.
And that's because previously we had charged it to 50.
And what's also interesting to see here,
is that, or child class does also inherit
the getters and setters from the parent class.
So we can also do this.
So remember,
that is a setter and a getter that we defined previously.
And so this is basically 195 kilometers per hour,
converted to miles per hour.
Okay. And with that,
this challenge is now completed.
And I think we used all the things
that we learned over the course of this section
right here in all of these four challenges.
So this should cover everything that you learned.
And so by now,
you actually already put everything
that we learned about object oriented programming
into practice by yourself.
So congratulations for that.
That was a really great job,
and a great effort
to watch this entire section until the end.
And now it's time to make this even more exciting
and to do that,
we will create an entire brand new project,
which will be completely based on objects
in the next section.
So that project is going to be
one of the most exciting things
of this course, in my opinion.
So I hope to see you there soon,
once you're finished,
basically digesting this section.
So congratulations once again.
I'm really happy to still have you with me,
here at this point of the course.
And so I see you back here in the next section.

 */
